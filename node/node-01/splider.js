const http = require('http')
const https = require('https')
const cheerio = require('cheerio')
var url = 'https://www.lagou.com/';

function filterText(html) {
    var $ = cheerio.load(html)
    var menu = $('.menu_main');
    var menuData = [];
    menu.each((index, value) => {
        var title = $(value).find('h2').text().trim();
        var tempArr = []
        $(value).find('h3').each((index, value) => {
            tempArr.push($(value).text())
        })
        menuData.push({
            title,
            tempArr
        })
    })
    return menuData
}
https.get(url, (res) => {
    var html = ''
    res.on('data', (data) => {
        html += data
    })
    res.on('end', () => {
        //  console.log(html);
        console.log((filterText(html)));
    })
    res.on('err', (error) => {
        console.log(error);
    })
})