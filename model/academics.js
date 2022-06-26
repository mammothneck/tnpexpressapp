const mongoose = require("mongoose")
const academicsSchema = new mongoose.Schema({
chancellor : {
    type: String,
    required:true
},
HOD:{
    type: String,
    required: true,

},

})

let Academics = mongoose.models.academics || mongoose.model('academics', academicsSchema)

module.exports = Academics