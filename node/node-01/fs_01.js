const fs = require('fs')

fs.stat('hello.js', (error, states) => {
    if (error ){
        console.log(error);
    } else {
        console.log(states);
        console.log(`目录：${states.isDirectory()}`);
        console.log(`文件：${states.isFile()}`);
    }
})