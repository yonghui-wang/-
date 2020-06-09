const fs = require('fs')

fs.readdirSync('log').map(file => {
    fs.unlink(`log/${file}`, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('删除文件成功');
        }
    })
})

fs.rmdir('log', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('成功删除文件夹');
    }
})