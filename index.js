const mineflayer = require('mineflayer');
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder')
const GoalFollow = goals.GoalFollow

const bot = mineflayer.createBot({
  host: '7PSMP.aternos.me', //EDIT THE IP
  port: 60468, //EDIT THE PORT
  username: 'BOT',
});

bot.on('chat', (username, message) => {
  console.log(message)
})
