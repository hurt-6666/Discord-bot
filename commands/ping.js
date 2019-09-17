const discord = require('discord.js')
const fs = require('fs')
exports.run = (client, message, args) => {
    if(message.channel.type === 'dm'){
message.channel.send(Math.round(client.ping))
}else if(message.channel.name === 'bot-commands'){
    message.channel.send(`${Math.round(client.ping)}`)
}else{
    message.delete()
    message.channel.send(`Please use bot commands channel for bot commands.`)
    .then(message => message.delete(10000))
}
}