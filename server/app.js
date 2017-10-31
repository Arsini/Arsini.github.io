const express = require('express')
const app = express()
var bodyParser = require('body-parser')

const fs = require("fs");

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.all('/testajax', function (req, res,next) {
		var data = req.query
		var str = JSON.stringify(data)
		// console.log(str)
		write(str)
		res.send('ok!')
	// console.log(req.query)//GET 接收
	// console.log(typeof req.body)//POST 接收
  	
})

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

//读
function read(){
	// 异步读取
	// fs.readFile('./db/input.json', function (err, data) {
	//    if (err) {
	//        return console.error(err);
	//    }
	//    console.log("异步读取: " + data.toString());
	// });
	
	// 同步读取
	var data = fs.readFileSync('./db/input.json');
	console.log(data)
	return data
}

//增删改
function write(data) {
	console.log('=='+data)
	fs.writeFile('input.txt', data,  function(err) {
		if (err) {
			return console.error(err);
		}
			console.log("数据写入成功！");
			console.log("--------我是分割线-------------")
			console.log("读取写入的数据！");
		fs.readFile('input.txt', function (err, data) {
		if (err) {
			return console.error(err);
		}
			console.log("异步读取文件数据: " + data.toString());
		});
	});
}