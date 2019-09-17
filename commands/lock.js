const discord = require('discord.js')
const fs = require('fs')
exports.run = (client, message, args) => {
    if(message.channel.type === 'dm'){
        message.channel.send(`no`)
    }else if(!message.member.hasPermission("BAN_MEMBERS")){
        message.delete()
        message.channel.send(`Error! You do not have permission.`)
        .then(message => message.delete(10000))
    }else{
        let sRole = message.guild.roles.find(r => r.name.toLowerCase() === '@everyone')
        const mentionedChannel = message.mentions.channels.first() || client.channels.get(args[0]) || message.channel
        mentionedChannel.overwritePermissions(sRole, {
            "SEND_MESSAGES": false,
            "ADD_REACTIONS": false
        })
        let nigger = new discord.RichEmbed()
        .setTitle(`Channel locked!`)
        .setDescription(`Please use .unlock to unlock the channel!`)
        .setColor("RED")
        .setFooter(`hurt#6666 <3`)
        .setTimestamp()
        message.channel.send(nigger)
    }
}