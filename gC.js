const mongoose = require('mongoose')

const guildCreateSchema = new mongoose.Schema({
    guildID: {
        type: String,
        required: true
    },
    welcomechannel: {
        type: String,
        required: false
    },
    logschannel:{
        type: String,
        required: false
    },
    filterwords: {
        type: Array,
        required: false
    },
    prefix: {
        type: Array,
        required: true
    }
})
module.exports = mongoose.model('GuildCreate', guildCreateSchema)