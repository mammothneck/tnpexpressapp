const mongoose = require("mongoose")
const objectiveSchema = new mongoose.Schema({
vision : {
    type: String,
    // required:true
},

mission:{
    type: String,
    // required: true,

},

})

let Objective = mongoose.models.objective || mongoose.model('objective', objectiveSchema)

module.exports = Objective