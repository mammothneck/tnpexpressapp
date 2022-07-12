const mongoose = require("mongoose")
const faqSchema = new mongoose.Schema({
chancellor : {
    type: String,
    required:true
},
HOD:{
    type: String,
    required: true,

},

})

let Faq = mongoose.models.faq || mongoose.model('faq', faqSchema)

module.exports = Faq