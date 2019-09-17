const discord = require('discord.js')
const fs = require('fs')
const db = require('quick.db')
exports.run = async (client, message, args) => {
    if(message.channel.type === 'dm'){
        message.channel.send(`no`)
    }else if(message.channel.name === 'bot-commands'){
        let users = message.mentions.users.first() || message.author
        let members = message.mentions.users.first() || message.author
        let warns = db.fetch(`warns_${message.guild.id}`)
        let online = message.guild.members.filter(m=>m.presence.status=== 'online').size
        let idle = message.guild.members.filter(m=>m.presence.status === 'idle').size
        let dnd = message.guild.members.filter(m=>m.presence.status === 'dnd').size
        let roles = message.guild.roles.size
        message.guild.fetchBans().then(bans => {
            let yeet = bans
        let picture = message.guild.iconURL || message.author.displayAvatarURL
        let nigger = new discord.RichEmbed()
        .setTitle(`Guild info for ${message.guild.name}`)
        .addField(`Guild creation date:`, message.guild.createdAt.toDateString(), true)
        .addField(`Guild members:`, message.guild.memberCount, true)
        .addField(`Online members:`, online + idle + dnd, true)
        .addField(`Total roles:`, `${roles}`, true)
        .addField(`Guild ID:`, message.guild.id, true)
        .addField(`Total warns in the guild:`, warns || '0', true)
        .addField(`Total bans`, yeet.size)
        .setFooter(`hurt#6666 <3`)
        .setColor("BLUE")
        .setTimestamp()
        message.channel.send(nigger)
        })
    }else {
    message.delete()
    message.channel.send(`Please use bot commands channel for bot commands.`)
    .then(message => message.delete(10000))
    }
}