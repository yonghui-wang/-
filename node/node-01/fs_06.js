const fs = require('fs')

fs.rename('log/hello.log', 'log/111.log', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('重命名成功');
    }
})