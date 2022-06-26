const mongoose = require("mongoose")
const procedureSchema = new mongoose.Schema({
chancellor : {
    type: String,
    required:true
},
HOD:{
    type: String,
    required: true,

},

})

let Procedure = mongoose.models.procedure || mongoose.model('procedure', procedureSchema)

module.exports = Procedure