const discord = require('discord.js')
const fs = require('fs')
const fetch = require('node-fetch')
exports.run = (client, msg, args) => {
    if(msg.channel.type === 'dm'){
        fetch(`http://aws.random.cat/meow`)
        .then(res => res.json()).then(body => {
            if(!body) return msg.channel.send(`I fucked up and couldn't get your cat very sorry mate. try again.`)
            let a = new discord.RichEmbed()
            .setColor(`BLUE`)
            .setImage(body.file)
            .setAuthor(`Cats!`, msg.author.avatarURL)
            .setTimestamp()
            .setFooter(`hurt#6666 <3`)
            msg.channel.send(a)
        })
    }else if(!msg.channel.name == 'memes'){
        msg.reply(`Please use the memes channel for this.`)
        .then(msg => msg.delete(10000))
    }else{
        if(msg.channel.name === 'memes') {
            msg.delete()
            fetch(`http://aws.random.cat/meow`)
        .then(res => res.json()).then(body => {
            if(!body) return msg.channel.send(`I fucked up and couldn't get your cat very sorry mate. try again.`)
            let a = new discord.RichEmbed()
            .setColor(`BLUE`)
            .setImage(body.file)
            .setAuthor(`Cats!`, msg.author.avatarURL)
            .setTimestamp()
            .setFooter(`hurt#6666 <3`)
            msg.channel.send(a)
        })
}else{
    msg.delete()
    msg.reply(`Please use the memes channel for this.`)
        .then(msg => msg.delete(10000))
}}
}