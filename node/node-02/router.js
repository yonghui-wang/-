const http = require('http')

http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type": 'text/html;charset=urf-8'})
    if (req.url !== 'favicon.ico') {
     //   var pathName = url.parse(req)
     console.log(res);
    }
 
    res.end()
}).listen(8000)


console.log('server runing at http://localhost:8000');