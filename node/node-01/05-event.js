const EventEmitter = require('events')

class Play extends EventEmitter {}
const play = new Play()

play.on('play',(track) => {
    console.log(`《${track}》正在播放`);
})
play.emit('play','精绝古城')