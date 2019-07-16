## Websocket
```js
class WS {
    constructor( platformId, url, store, router, msg) {
        this.platformId = platformId //平台ID
        this.url = url // url
        this.store = store // store
        this.router = router//router
        this.msg = msg
        this.ws = ''
        this.count = 0 // 记录 requestId
        this.cb = {} // promise callback 列表
        this.delayQueue = [] // 等待发送列表
        this.authenticateFlag = false//是否已验证身份
        this.fromCallback = {} // 服务器主动传到客户端方法集
        this.timer = ''// 心肌包计时器
        
        this.init()
    }

    //初始化
	init() {
		this.ws = new WebSocket(this.url) 
        this.onopen()
		this.onmessage()
		this.onerror()
        this.onclose()
    }
    
    //绑定 ws onopen
	onopen() {
		this.ws.onopen = () => {
            this.authenticate()
            log('open:' + new Date())
		}
    }
    
    // 绑定 ws onmessage
	onmessage() {
		this.ws.onmessage = res => {
            this.setHeartBeat()
            const data = JSON.parse(res.data);
            const id = data.requestId || '';
            const status = data.data.status;
            if (!id) {
				this.fromCallback[data.functionName].fun(data.data)
				return
			}
            if(status === 200){
                this.cb[id].reslove(data.data)
            } else {
                this.cb[id].reject(data.data)
                this.errorMessage(data)
            }
            delete this.cb[id]
		}
    }

    errorMessage(data){
        if(data.functionName != "authenticate"){
            const _data = data.data;
            this.msg(_data.errorMessage, 'error')
            switch (_data.status) {
                case 420:
                    this.router.push('/sign_in')
                    this.store.commit('IS_SIGN_IN', false)//退出登陆
                    all.tool.RemoveSession('user')
                    all.tool.RemoveSession('playerId')
                    all.tool.RemoveSession('token')
                    break;
            }
        }
    }
    
    //onerror
	onerror() {
		this.ws.onerror = event => {
			log('error:' + new Date())
		}
    }
    
    // 服务器关闭钩子
	onclose() {
		this.ws.onclose = () => {
            log('close:' + new Date())
            setTimeout(() => {
                all.net.init()
            }, 2000);
		}
    }

    //设置心肌包计时器
	setHeartBeat() {
		clearTimeout(this.timer)
		this.timer = setTimeout(() => {
			this.authenticate()
			this.setHeartBeat()
		}, 55000)
	}
    
    // 发送authenticate 身份验证,成功返回后 发送其他请求
    authenticate(){
        const token = JSON.parse(sessionStorage.getItem('token')) || '';
        const playerId = JSON.parse(sessionStorage.getItem('playerId')) || '';
        const delayQueue = () => {
            this.delayQueue.forEach(val => {
                this.ws.send(val)
            })
            this.delayQueue = []
        }
		api.authenticate({ playerId, token, }).then(()=>{
            this.authenticateFlag = true
            delayQueue()
        },()=>{
            this.authenticateFlag = true
            delayQueue()
        })
    }

    /**
	 * ws 发送方法
	 * @param  {obj} obj 发送的信息
	 * @return {Promise} Promise
	 */
	send(obj) {
        const requestId = 'RQ' + this.count;
        const str = this.assemble(obj, requestId);
        const readyState = this.ws.readyState;
        if(readyState == 1 && obj.functionName == "authenticate"){
            this.ws.send(str)
        } else if (readyState != 1 || !this.authenticateFlag) {
            this.delayQueue.push(str)
        } else {
            this.ws.send(str)
        }
        this.count ++
        return new Promise((reslove, reject) => {
			this.cb[requestId] = {
				reslove,
				reject,
			}
		})
    }
    
    /**
	 * 拼装需要发送的数据
	 * @param  {object} obj       原始数据
	 * @param  {number} requestId id
	 */
	assemble(obj, requestId) {
		const load = {
			requestId,
			platformId: this.platformId
		}
		const data = Object.assign(obj.data? obj.data : {}, load)
		obj.data = data
		return JSON.stringify(obj)
    }
    
    /**
	 * 服务器主动返回使用的方法
	 * @param  {object} opt 返回的信息
	 */
	from(opt) {
        this.fromCallback[opt.functionName] = opt;
    }
}

```