const d = require('discord.js')
const db = require('quick.db')
const gc = require('../gC')
const ms = require('ms')
exports.run = async (client, msg, args) => {
    if(msg.channel.type === 'dm') return msg.channel.send(`no`)
    let guildExists = await gc.findOne({guildID: msg.guild.id})
  let help = new d.RichEmbed()
  .setTitle(`Help is on the way!`)
  .setDescription(`Example: .unmute @user reason`)
  .setColor("BLUE")
  let user = msg.mentions.members.first()
  if(!user) return msg.channel.send(help)
  if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.channel.send(`You do not have permission to mute!`)
  if(user.hasPermission("BAN_MEMBERS")) return msg.channel.send(`https://tenor.com/view/angry-fist-arthur-gif-5794225`)
  let reason = args.slice(1).join(" ") || 'no mute reason'
  if(!guildExists) {
    const guild = new gc({
        guildID: msg.guild.id,
        welcomechannel: null,
        logschannel: null,
        filterwords: [],
        prefix: '.'
    })
    try{
      const savedGuild = await guild.save()// doesn't matter
    }catch(err){
      console.log(err)
    }
}
let mrole = msg.guild.roles.find(r => r.name.toLowerCase().startsWith('mute'))
if(!mrole) return msg.channel.send(`Please setup a mute role with .config!`)
if(!user.roles.has(mrole.id)) return msg.channel.send(`That user isn't muted!`)
    user.removeRole(mrole)
msg.channel.send(`UnMuted ${user.user.username}!`)
const channel = guildExists.logschannel
if(channel === null) return
if(!msg.guild.channels.find(ch => ch.id === channel)) return
let chff = msg.guild.channels.find(ch => ch.id === channel)
let banembed = new d.RichEmbed()
.setTitle(`User unmuted!`)
.addField(`unmuted user`, user.user.tag, true)
.addField(`Punisher`, msg.author.tag, true)
.addField(`Reason`, reason, true)
.setFooter(user.user.id)
.setColor("RED")
chff.send(banembed)
}