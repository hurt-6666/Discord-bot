const discord = require('discord.js')
const fs = require('fs')
exports.run = (client, message, args) => {
    if(message.channel.type === 'dm'){
        message.channel.send(`no`)
    }else{ 
        message.delete()
        if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send(`You do not have the permission "MANAGE_MESSAGES"`)
        .then(message => message.delete(10000))
    }else {
        let amount = 50

        message.channel.fetchMessages({limit: amount}).then(msgs => {
            message.channel.bulkDelete(msgs)
        })
    }
}
}