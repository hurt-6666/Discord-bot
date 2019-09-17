const discord = require('discord.js')
const fs = require('fs')
const db = require('quick.db')
const moment = require('moment')
exports.run = (client, message, args) => {
    if(message.channel.type === 'dm'){
        message.channel.send(`no`)
    }else if(message.channel.name === 'bot-commands'){
        let users = message.mentions.users.first() || message.author
        let warns = db.fetch(`warns_${users.id}`)
        let members = message.mentions.members.first() || message.member
        let p = users.presence.game || 'User has no presence'
        let time = moment(users.createdAt, "YYYYMMDD").fromNow()
        let time2 = moment(members.joinedAt, "YYYMMDD").fromNow()
        let nigger = new discord.RichEmbed()
        .setTitle(`Profile for ${users.username}`)
        .addField(`User is a bot?`, users.bot, true)
        .addField(`Users tag:`, users.tag, true)
        .addField(`Users warnings:`, warns || '0', true)
        .addField(`Users presence:`, p, true)
        .addField(`Users status:`, users.presence.status, true)
        .addField(`Users account creation:`, users.createdAt.toDateString() + " / " + time, true)
        .addField(`When the user joined PotionZones discord:`, members.joinedAt.toDateString() + ' / ' + time2 || 'User never joined?', true)
        .setTimestamp()
        .setThumbnail(users.displayAvatarURL)
        .setColor("BLUE")
        .setFooter(`hurt#6666 <3`)
        message.channel.send(nigger)
    }else {
    message.delete()
    message.channel.send(`Please only use bot commands in the bot commands channel.`)
    .then(message => message.delete(10000))
    }
}