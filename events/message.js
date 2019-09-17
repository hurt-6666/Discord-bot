const gc = require('../gC')
module.exports = async (client, message) => {
    let g = message.guild
    let gid = message.guild.id
    let gPrefix = '.'
    const guildExists = await gc.findOne({
        guildID: g.id
    })
    if (!guildExists) {
        const guild = new gc({
            guildID: g.id,
            welcomechannel: null,
            logschannel: null,
            filterwords: [],
            prefix: '.'
        })
        try {
            const savedGuild = await guild.save()
            console.log(savedGuild)
        } catch (err) {
            console.log(err)
        }
    }
    const prefix1 = await gc.findOne({
        guildID: gid
    })
    const prefix = prefix1.prefix
    if (message.author.bot) return
    if (message.content.indexOf(prefix) !== 0) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const cmd = client.commands.get(command)
    if (!cmd) return
    cmd.run(client, message, args)
}