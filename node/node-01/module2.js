const request = require('request')
request({
    url: 'https://douban.uieee.com/v2/movie/in_theaters',
    json: true
}, (error, resoponse, body) => {
    console.log(JSON.stringify(body,null,2));
})