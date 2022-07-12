const mongoose = require("mongoose")
const messageSchema = new mongoose.Schema({
chancellor : {
    type: String,
    // required:true
},
HOD:{
    type: String,
    // required: true,

},

})

let Message = mongoose.models.message || mongoose.model('message', messageSchema)

module.exports = Message