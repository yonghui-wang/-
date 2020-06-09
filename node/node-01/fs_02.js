const fs = require('fs')

fs.mkdir('log', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('创建目录成功');
    }
})