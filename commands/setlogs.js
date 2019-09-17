const d = require('discord.js')
const gc = require('../gC')
exports.run = async (bot, message, args) => {
    const missingpermissions = new d.RichEmbed()
          .setTitle(`Permission requirments not met!`)
          .setDescription(`You do not have the required permissions for this command of ADMINISTRATOR!`)
          .setColor("RED")
          .setFooter(`Made by </3#6666`)
    const help = new d.RichEmbed()
    .setTitle(`Help is on the way!`)
    .setDescription(`Example: .setlogs #channel`)
    .setColor("GREEN")
    .setFooter(`Made by </3#6666`)
    if(message.channel.type === 'dm') return message.channel.send(`This is not a dm channel command.`)
    if(!message.guild.me.hasPermission("ADMINISTRATOR")){
        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return
        message.channel.send(`Please make sure I have the administrator permission!`)
    }else{
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(missingpermissions)
    if(!args) return message.channel.send(help)
    let cc = message.mentions.channels.first()
    if(!cc) return message.channel.send(help)
    const guildExists = await gc.findOne({guildID: message.guild.id})
    if(!guildExists){
        const guild = new gc({
            guildID: g.id,
            welcomechannel: null,
            logschannel: null,
            filterwords: [],
            prefix: '.'
        })
        await guild.save()
    }
    const ar = new d.RichEmbed()
    .setTitle(`Success!`)
    .setDescription(`logs channel set to <#${cc.id}>!`)
    .setColor("GREEN")
    .setFooter(`Made by </3#6666`)
    const p = await gc.findOne({guildID: message.guild.id})
    gc.findOne({
        guildID: message.guild.id,
    }, (err, guild) => {
        guild.logschannel = cc.id
        message.channel.send(ar)
        return guild.save().catch(ex => console.log(ex))
    })
}
}