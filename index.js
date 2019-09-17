const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const mongoose = require('mongoose')
const gc = require('./gC')
const client = new Discord.Client();
//connecting to db
client.on('ready', async () => {
    mongoose.connect(`lol`,
    {useNewUrlParser: true},
    () => console.log('CONNECTED TO DB'))
})
mongoose.set('useFindAndModify', false);
//The handler
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});
//adding member to guild
client.on("guildMemberAdd", async member => {
  const a = await gc.findOne({guildID: member.guild.id})
  if(!a){
  const guild = new gc({
    guildID: member.guild.id,
            welcomechannel: null,
            logschannel: null,
            filterwords: [],
            prefix: '.'
  })
  try{
    const savedGuild = await guild.save()
    console.log(savedGuild)
  }catch(err){
    console.log(err)
  }
}else{
  let welcome = a.welcomechannel
  if(welcome === null) return;
  let c = member.guild.channels.find(c => c.id === welcome)
  if(!c) return
  c.send(`Thank you <@${member.user.id}> for joining the server!`)
}
})
//bot joined guild and added to the db
client.on('guildCreate', async g => {
    const a = gc.findOne({guildID: g.id})
    if(!a){
        const gg = new gc({
            guildID: g.id,
            welcomechannel: null,
            logschannel: null,
            filterwords: [],
            prefix: '.'
        })
        try{
            await gg.save()
        }catch(err){
            console.log(err)
          }
    }else return;
})
//filter
client.on('message', async msg =>{
  if(msg.channel.type === 'dm') return;
  let ge = await gc.findOne({guildID: msg.guild.id})
  const g = msg.guild.id
  if(!ge) {
    const gg = new gc({
      guildID: g.id,
      welcomechannel: null,
      logschannel: null,
      filterwords: [],
      prefix: '.'
  })
  try{
      await gg.save()
  }catch(err){
      console.log(err)
    }
  }
  let filter = ge.filterwords
  if(!filter) return
  if(!msg.guild.me.hasPermission("ADMINISTRATOR")) return;
  if(msg.member.hasPermission("ADMINISTRATOR")) return;
  for(var i = 0; i < filter.length; i++){
    if(msg.content.toLowerCase().includes(filter[i])){
      msg.delete()
      const channel = guildExists.logschannel
if(channel === null) return
if(!msg.guild.channels.find(ch => ch.id === channel)) return
let chff = msg.guild.channels.find(ch => ch.id === channel)
let aaa = new Discord.RichEmbed()
.setTitle(`Messages deleted in <#${msg.channel.id}>`)
.setDescription(`Message: ${msg.content} Reason: Filter`)
.setColor("RED")
chff.send(aaa)
    }
  }
})
//setting status
client.on("ready", () => {
  let statuses = ['1', '2']
  setInterval(function(){
    let status = statuses[Math.floor(Math.random()*statuses.length)]
    client.user.setActivity(status, {type: "STREAMING", url:"https://twitch.tv/yeet"})
  }, 10000);
})
//logging on
client.login(`token`)