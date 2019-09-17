const discord = require('discord.js')
const fs = require('fs')
exports.run = (client, message, args) => {
    if(message.channel.type === 'dm'){
        message.channel.send(`no`)
    }else if(!message.member.hasPermission("ADMINISTRATOR")){
        message.delete()
        message.channel.send(`No permissions`)
        .then(message => message.delete(10000))
    }else{
        let muterole = message.guild.roles.find(r => r.name.toLowerCase() === 'muted')
        if(!muterole){
            {
                message.guild.createRole({
                  "name": "muted",
                  "permissions": []
                }).then(role => {
                  message.guild.channels.forEach(channel => {
                    channel.overwritePermissions(role, {
                      "SEND_MESSAGES": false,
                      "ADD_REACTIONS": false
                    })
                  })
                  
                })
        }
        message.delete()
        message.channel.send(`I have made a mute role!`)
        .then(message => message.delete(10000))
    }else{
        message.delete()
        message.channel.send(`There is already a role named "MUTED"`)
        .then(message => message.delete(10000))
    }
}
}