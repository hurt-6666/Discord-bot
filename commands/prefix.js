const d = require('discord.js')
const mongoose = require('mongoose')
const gc = require('../gC')

exports.run = async (client, message, args) => {
    if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send(`I am missing the permission!`)
    const guildExists = await gc.findOne({guildID: message.guild.id})
  if(!guildExists) {
    const guild = new gc({
        guildID: g.id,
        welcomechannel: null,
        logschannel: null,
        filterwords: [],
        prefix: '.'
    })
    try{
      const savedGuild = await guild.save()
    }catch(err){
      console.log(err)
    }
  }
    const p1 = await gc.findOne({guildID: message.guild.id})
    const p = p1.prefix
    const missingpermissions = new d.RichEmbed()
    .setTitle(`Permission requirments not met!`)
    .setDescription(`You do not have the required permissions for this command of ADMINISTRATOR!`)
    .setColor("RED")
    const help = new d.RichEmbed()
    .setTitle(`Help is on the way!`)
    .setDescription(`Example: ${p}prefix {prefix you want}\nPermission required: ADMINISTRATOR`)
    .setColor("RED")
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(missingpermissions)
    if(!args[0]) return message.channel.send(help)
    const setprefix = new d.RichEmbed()
    .setTitle(`Success!`)
    .setDescription(`Guild prefix has been set to ${args} !`)
    .setColor("GREEN")
    const newp = args
    gc.findOne({
        guildID: message.guild.id,
    }, (err, guild) => {
        guild.prefix = args
        message.channel.send(setprefix)
        return guild.save().catch(ex => console.log(ex))
    })
}