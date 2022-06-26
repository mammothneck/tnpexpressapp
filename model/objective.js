const mongoose = require("mongoose")
const objectiveSchema = new mongoose.Schema({
chancellor : {
    type: String,
    required:true
},
HOD:{
    type: String,
    required: true,

},

})

let Objective = mongoose.models.objective || mongoose.model('objective', objectiveSchema)

module.exports = Objective