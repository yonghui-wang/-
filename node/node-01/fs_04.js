const fs = require('fs')

fs.readFile('log/hello.log','utf-8', (err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data)
    }
})