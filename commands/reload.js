const discord = require('discord.js')
const fs = require('fs')
exports.run = (client, message, args) => {
    if(message.author.id != '611641127661207582') return;
    if(!args[0]) return message.channel.send(`provide a command to reload`)
    let cn = args[0].toLowerCase()
    try {
        delete require.cache[require.resolve(`./${cn}.js`)]
        client.commands.delete(cn)
        const pull = require(`./${cn}.js`)
        client.commands.set(cn, pull)
    } catch(e){
        return message.channel.send(`Error loading \`\`${args[0]}\`\``)
    }
    message.channel.send(`Command \`${args[0].toUpperCase()}\` reloaded.`)
}