const discord = require('discord.js')
const moment = require('moment')
exports.run = (client, msg, args) => {
    if(msg.author.id === '489219473476157460'){
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        if(hours >= 24) return hours = 0
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.round(totalSeconds % 60);
        let niggers = client.ping
        let fixedNiger = Math.round(niggers)
        let niger = new discord.RichEmbed()
        .setTitle(`Bot info for x Zone`)
        .addField(`Uptime:`, `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds.`, true)
        .addField(`Ping`, fixedNiger, true)
        .addField(`Coding info`, `Language - JavaScript. Library - Discord.js`, true)
        .addField(`Who made it?`, `hurt#6666 he is best coder!`, true)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter(`hurt#6666 <3`)
        msg.channel.send(niger)
    }else
    if(msg.channel.type === 'dm'){
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.round(totalSeconds % 60);
        let niggers = client.ping
        let fixedNiger = Math.round(niggers)
        let niger = new discord.RichEmbed()
        .setTitle(`Bot info for x`)
        .addField(`Uptime:`, `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds.`, true)
        .addField(`Ping`, fixedNiger, true)
        .addField(`Coding info`, `Language - JavaScript. Library - Discord.js`, true)
        .addField(`Who made it?`, `hurt#6666 he is best coder!`, true)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter(`hurt#6666 <3`)
        msg.channel.send(niger)
    }else if(!msg.channel.name == 'bot-commands'){
        msg.reply(`Please use the memes channel for this.`)
        .then(msg => msg.delete(10000))
    }else{
        if(msg.channel.name === 'bot-commands') {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.round(totalSeconds % 60);
        let niggers = client.ping
        let fixedNiger = Math.round(niggers)
        let niger = new discord.RichEmbed()
        .setTitle(`Bot info for x`)
        .addField(`Uptime:`, `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds.`, true)
        .addField(`Ping`, fixedNiger, true)
        .addField(`Coding info`, `Language - JavaScript. Library - Discord.js`, true)
        .addField(`Who made it?`, `hurt#6666 he is best coder!`, true)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter(`hurt#6666 <3`)
        msg.channel.send(niger)
}else{
    msg.delete()
    msg.reply(`Please use the bot commands channel for this.`)
        .then(msg => msg.delete(10000))
}}
}