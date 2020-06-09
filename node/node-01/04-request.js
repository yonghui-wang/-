const https = require('https')
// url: 'https://douban.uieee.com/v2/movie/in_theaters',
//https://www.lagou.com/
//https://api.apiopen.top/getJoke?page=1&count=2&type=video
const options = {
    hostname: 'api.apiopen.top',
    port: 443,
    path: '/getJoke?page=1&count=2&type=video',
    method: "GET"
}
var getData = ''
const req = https.request(options, (res) => {
    res.setEncoding('utf-8')
    res.on('data', (chunk) => {
        getData += chunk
    })
    res.on('end', () => {
        console.log(  JSON.parse(getData).result.map(ele => ele.top_comments_content)
        )
    })
})
req.on('error', (error) => {
    console.log(error);
})

req.end()