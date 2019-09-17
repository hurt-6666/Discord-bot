const d = require('discord.js')
const gc = require('../gC')
exports.run = async (client, msg, args) => {
    if(msg.channel.type === 'dm') return msg.channel.send(`no`)
    let guildExists = await gc.findOne({guildID: msg.guild.id})
  let help = new d.RichEmbed()
  .setTitle(`Help is on the way!`)
  .setDescription(`Example: .unban @userid reason`)
  .setColor("BLUE")
  if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(`You do not have permission to unban!`)
  if(!args[0]) return msg.channel.send(help)
  if(msg.guild.member(client.users.get(args[0]))) return msg.channel.send(`This user is in the guild, therefor isn't banned!`), console.log(`lol1`)
  if(!client.users.get(args[0])) return msg.channel.send(help), console.log(`lol2`)
  let reason = args.slice(1).join(" ") || 'no unban reason'
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
msg.channel.send(`UnBanned ${args[0]}!`)
msg.guild.unban(client.users.get(args[0]))
const channel = guildExists.logschannel
if(channel === null) return
if(!msg.guild.channels.find(ch => ch.id === channel)) return
let chff = msg.guild.channels.find(ch => ch.id === channel)
let banembed = new d.RichEmbed()
.setTitle(`User unbanned!`)
.addField(`unbanned user`, args[0], true)
.addField(`Punisher`, msg.author.tag, true)
.addField(`Reason`, reason, true)
.setColor("RED")
chff.send(banembed)
}