const fs = require('fs')

fs.writeFile('log/hello.log', '你好 ~ \n',(error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('写入文件成功');
    }
})

fs.appendFile('log/hello.log', 'hello ~ \n', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('追加成功');
    }
})