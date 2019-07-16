const fs = require('fs')
const articles = fs.readdirSync('./md')
const json = { list: [] }
for (const item of articles) {
    if(item.indexOf('md') != -1){
        const arr = item.split('_')
        const title = arr[1].split('.')
        json.list.push({
            "title": title[0],
            "tag": arr[0],
            "api": item,
        })
    }
}
const files = fs.readdirSync('./')
const flag = files.includes('article.json')
const appendFile = () => {
    fs.appendFile('./article.json', JSON.stringify(json), error => {
        if(error){
            console.log(error);
            return false;
        }
    })
}
const unlink = () => {
    fs.unlink('./article.json', error => {
        if(error){
            console.log(error);
            return false;
        }
        appendFile()
    })
}
if(flag){
    unlink()
} else {
    appendFile()
}