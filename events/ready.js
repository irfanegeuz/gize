const Moment = require('moment')
const Discord = require('discord.js')
const config = require('./config.json');
let prefix = '!'
module.exports = client => {
  
  const aktiviteListesi = [
    `BrosGaming`
  ]

  client.user.setStatus('dnd')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 5000)
}
