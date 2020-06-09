const fs = require('fs')

fs.readdir('log', (err,file) => {
    if (err) {
        console.log(err);
    } else {
        console.log(file);
    }
})