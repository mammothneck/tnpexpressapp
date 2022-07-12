const mongoose = require("mongoose")
const contactSchema = new mongoose.Schema({
chancellor : {
    type: String,
    required:true
},
HOD:{
    type: String,
    required: true,

},

})

let Contact = mongoose.models.contact || mongoose.model('contact', contactSchema)

module.exports = Contact