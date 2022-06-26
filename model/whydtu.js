const mongoose = require("mongoose")
const whydtuSchema = new mongoose.Schema({
chancellor : {
    type: String,
    required:true
},
HOD:{
    type: String,
    required: true,

},

})

let Whydtu = mongoose.models.whydtu || mongoose.model('whydtu', whydtuSchema)

module.exports = Whydtu