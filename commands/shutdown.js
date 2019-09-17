const discord = require('discord.js')
const fs = require('fs')
exports.run = (client, message, args) => {
    if(message.author.id != '611641127661207582') return;
    try {
        message.channel.send(`Bot is shutting down...`)
        process.exit()
    } catch(e){
        message.channel.send(`Couldn't shut down the bot... idk why.`)
    }
}