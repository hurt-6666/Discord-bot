const discord = require('discord.js')
const fs = require('fs')
exports.run = (client, message, args) => {
    if(message.channel.type === 'dm'){
        let niggers = new discord.RichEmbed()
        .setTitle(`You requested help?`)
        .addField(`Moderation:`, `Ban - Bans a user.\nKick - Kicks a user.\nPurge - Purges a users messages (example: .purge @user 50)\nClearuser - Clears a users messages.\nWarn - Warns a user (example : .warn @user stupid!)\nMute - Mutes a user (example: .mute @user 1d stupid!)\nUnwarn - Unwarns a user (example: .unwarn @user no longer stupid.)\nUnban - Unbans a user (example: .unban [user id] no longer stupid!)\nUnmute - Unmutes a user (exmaple: .unmute @user no longer stupid!)\nClearwarns - Clears a users warnings (example: .clearwarns @user no longer stupid!)\nConfig - Makes a mute role just incase.`)
        .addField(`Everyone commands:`, `Meme - Posts a random meme.\nCat - Posts a random cat picture.\nDog - Posts a random dog picture.\nGi - Guild information.\nPing - Just shows the bots ping.\nProfile - Shows a users profile relevent to the guild.\nBotinfo - Shows the information for the bot.`)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter(`hurt#6666 <3`)
        message.channel.send(niggers)
    }else if(message.channel.name === 'bot-commands'){
        message.delete()
        let niggers = new discord.RichEmbed()
        .setTitle(`You requested help?`)
        .addField(`Admin:`, `filter - use it like this filter add/remove [word/phrase]\nsetwelcome - sets the channel where welcome messages will be posted!\nprefix - sets the prefix for the bot so .setprefix ; makes the setlogs command now ;setlogs\nsetlogs - sets the logs channel so .setlogs #logs will post any logs into the #logs channel\nAnnounce - announces something you want in a channel (example: .announce [#channel] [text])\nConfig - Makes a mute role just incase.`)
        .addField(`Moderation:`, `ClearChat - Clears 50 chat messages.\nUnLock- makes it so everyone can type and talk in the chat!\nLock - locks the chat so that no one can speak in it!\nBan - Bans a user.\nKick - Kicks a user.\nPurge - Purges a users messages (example: .purge @user 50)\nUnban - Unbans a user (example: .unban [user id] no longer stupid!)\nWarn - Warns a user (example : .warn @user stupid!)\nMute - Mutes a user (example: .mute @user 1d stupid!)\nUnwarn - Unwarns a user (example: .unwarn @user no longer stupid.)\nUnmute - Unmutes a user (exmaple: .unmute @user no longer stupid!)\nClearwarns - Clears a users warnings (example: .clearwarns @user no longer stupid!)`)
        .addField(`Everyone commands:`, `Minesweeper: Creates a minesweeper game!\nMeme - Posts a random meme.\nCat - Posts a random cat picture.\nDog - Posts a random dog picture.\nGi - Guild information.\nPing - Just shows the bots ping.\nProfile - Shows a users profile relevent to the guild.\nBotinfo - Shows the information for the bot.`)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter(`hurt#6666 <3`)
        message.channel.send(niggers)
    }else{
        message.delete()
        message.channel.send(`This is a command for the bot-commands channel.`)
        .then(message => message.delete(10000))
    }
}
