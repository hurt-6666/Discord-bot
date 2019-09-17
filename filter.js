const d = require('discord.js')
const gc = require('../gC')
exports.run = async (bot, msg, args) => {
    if(msg.channel.type === 'dm') return;

    let guildExists = await gc.findOne({guildID: msg.guild.id})
        console.log(guildExists.filterwords)
    const mp = new d.RichEmbed()
    .setTitle("Missing permissions!")
    .setDescription(`This command requires the permissions ADMINISTRATOR`)
    .setColor("RED")
    .setFooter(`Made by: </3#6666`)
    const help = new d.RichEmbed()
    .setTitle(`Help is on the way!`)
    .setDescription(`.filter add/remove word/phrase\n.filter list`)
    .setColor("RED")
    .setFooter("Made by: </3#6666")
    if(!msg.member.hasPermission(`ADMINISTRATOR`)) return msg.channel.send(mp)
    if(!msg.guild.me.hasPermission("ADMINISTRATOR")) return msg.channel.send(`I don't have permission of administrator.`)
    if(!args) return msg.channel.send(help)
    let xdrawr = args[0]
    if(!xdrawr) return msg.channel.send(help)
    if(args[0].toLowerCase() === 'add'){
      if(!args.slice(1).join(" ")) return msg.channel.send(help)
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
        const filter = guildExists.filterwords
        for(var i = 0; i < filter.length; i++){
          if(args.slice(1).join(" ").toLowerCase().includes(filter[i]))return msg.channel.send(`\`${args.slice(1).join(" ")}\` is already on the filter list!`)
        }
          let filterd = guildExists.filterwords
          await gc.findOneAndUpdate({guildID: msg.guild.id}, {$push: {filterwords: args.slice(1).join(" ").toLowerCase()}})
          .then(() => {
              msg.channel.send(`Added \`${args.slice(1).join(" ")}\` to the filter list!`)
                      })
    }else if(args[0].toLowerCase() === 'remove'){
      if(!args.slice(1).join(" ")) return msg.channel.send(help)
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
      let filterd = guildExists.filterwords
      await gc.findOneAndUpdate({guildID: msg.guild.id}, {$pull: {filterwords: args.slice(1).join(" ").toLowerCase()}})
      .then(() => {
          msg.channel.send(`removed \`${args.slice(1).join(" ")}\` to the filter list!`)
                  })
    }else if(args[0].toLowerCase() === 'list'){
      
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
    let aasdsd = new d.RichEmbed()
      .setTitle(`Filter list!`)
      let filter = guildExists.filterwords
          aasdsd.setDescription(filter || 'none')
          aasdsd.setColor("GREEN")
          aasdsd.setFooter(`Made by: </3#6666`)
        
      msg.channel.send(aasdsd)
    }else return msg.channel.send(help)
}