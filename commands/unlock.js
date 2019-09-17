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
        let ow = mentionedChannel.permissionsFor(sRole.id)
        if(ow.SEND_MESSAGES === true) {
            message.channel.send(`Channel isn't on lockdown?`)
        }else{
        mentionedChannel.overwritePermissions(sRole, {
            "SEND_MESSAGES": true,
            "ADD_REACTIONS": true
        })
        let nigger = new discord.RichEmbed()
        .setTitle(`Channel unlocked!`)
        .setDescription(`Please use .lock to re-lock the channel!`)
        .setColor("RED")
        .setFooter(`hurt#6666 <3`)
        .setTimestamp()
        message.channel.send(nigger)
    }
}
}