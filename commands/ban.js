const d = require('discord.js')
const gc = require('../gC')
exports.run = async (client, message, args) => {
  if(message.channel.type === 'dm') return message.channel.send(`no`)
  let guildExists = await gc.findOne({guildID: message.guild.id})
  let help = new d.RichEmbed()
  .setTitle(`Help is on the way!`)
  .setDescription(`Example: .ban @user reason`)
  .setColor("BLUE")
  let user = message.mentions.members.first()
  if(!user) return message.channel.send(help)
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`You do not have permission to ban!`)
  if(user.hasPermission("BAN_MEMBERS")) return message.channel.send(`https://tenor.com/view/angry-fist-arthur-gif-5794225`)
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`I cannot ban people!`)
  let reason = args.slice(1).join(" ") || 'no ban reason'
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
user.ban(reason)
message.channel.send(`Banned ${user.user.username}!`)
const channel = guildExists.logschannel
if(channel === null) return
if(!message.guild.channels.find(ch => ch.id === channel)) return
let chff = message.guild.channels.find(ch => ch.id === channel)
let banembed = new d.RichEmbed()
.setTitle(`User banned!`)
.addField(`Banned user`, user.user.tag, true)
.addField(`Punisher`, message.author.tag, true)
.addField(`Reason`, reason, true)
.setFooter(user.user.id)
.setColor("RED")
chff.send(banembed)
}