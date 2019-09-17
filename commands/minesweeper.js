const discord = require('discord.js')
const fs = require('fs')
const mines = require('discord-minesweeper');
exports.run = (client, message, args) => {
    if (message.channel.type === 'dm') {
        if (!args[0] || !args[1] || !args[2]) {
            let nig = new discord.RichEmbed()
                .setTitle(`Minesweeper help!`)
                .setDescription(`Example: .minesweeper 10 10 10, rows = 10, columns = 10, mines = 10`)
                .setColor("BLUE")
                .setFooter('hurt#6666 <3')
                .setTimestamp()
            message.channel.send(nig)
        }
        if (!parseInt(args[0]) || !parseInt(args[1] || !parseInt(rags[2]))) {
            let nig = new discord.RichEmbed()
                .setTitle(`Minesweeper help!`)
                .setDescription(`Example: .minesweeper 10 10 10, rows = 10, columns = 10, mines = 10`)
                .setColor("BLUE")
                .setFooter('hurt#6666 <3')
                .setTimestamp()
            message.channel.send(nig)
        }
        if (args[0] > 10 || args[1] > 10 || args[2] > 20) {
            message.channel.send(`Please choose a smaller value`)
        } else {
            message.channel.send(mines(args[0], args[1], args[2], 'X', true))
        }
    } else if (message.channel.name === 'bot-commands') {
        if (!args[0] || !args[1] || !args[2]) {
            let nig = new discord.RichEmbed()
                .setTitle(`Minesweeper help!`)
                .setDescription(`Example: .minesweeper 10 10 10, rows = 10, columns = 10, mines = 10`)
                .setColor("BLUE")
                .setFooter('hurt#6666 <3')
                .setTimestamp()
            message.channel.send(nig)
        } else if (!parseInt(args[0]) || !parseInt(args[1] || !parseInt(rags[2]))) {
            let nig = new discord.RichEmbed()
                .setTitle(`Minesweeper help!`)
                .setDescription(`Example: .minesweeper 10 10 10, rows = 10, columns = 10, mines = 10`)
                .setColor("BLUE")
                .setFooter('hurt#6666 <3')
                .setTimestamp()
            message.channel.send(nig)
        } else if (args[0] > 10 || args[1] > 10 || args[2] > 20) {
            message.channel.send(`Please choose a smaller value`)
        } else {
            message.channel.send(mines(args[0], args[1], args[2], 'X', true))
        }
    } else {
        message.delete()
        message.channel.send(`Please use bot commands channel for bot commands.`)
            .then(message => message.delete(10000))
    }
}