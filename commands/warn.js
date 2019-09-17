const d = require('discord.js')
const db = require('quick.db')
const gc = require('../gC')
exports.run = async (client, msg, args) => {
    if(msg.channel.type === 'dm') return msg.channel.send(`no`)
    let guildExists = await gc.findOne({guildID: msg.guild.id})
  let help = new d.RichEmbed()
  .setTitle(`Help is on the way!`)
  .setDescription(`Example: .warn @user reason`)
  .setColor("BLUE")
  let user = msg.mentions.members.first()
  if(!user) return msg.channel.send(help)
  if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.channel.send(`You do not have permission to warn!`)
  if(user.hasPermission("BAN_MEMBERS")) return msg.channel.send(`https://tenor.com/view/angry-fist-arthur-gif-5794225`)
  let reason = args.slice(1).join(" ") || 'no warn reason'
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
db.add(`warns_${user.user.id}`, 1)
db.add(`warns_${msg.guild.id}`, 1)
msg.channel.send(`warned ${user.user.username}!`)
const channel = guildExists.logschannel
if(channel === null) return
if(!msg.guild.channels.find(ch => ch.id === channel)) return
let chff = msg.guild.channels.find(ch => ch.id === channel)
let banembed = new d.RichEmbed()
.setTitle(`User warned!`)
.addField(`warned user`, user.user.tag, true)
.addField(`Punisher`, msg.author.tag, true)
.addField(`Reason`, reason, true)
.setFooter(user.user.id)
.setColor("RED")
chff.send(banembed)
}