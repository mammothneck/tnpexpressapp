const mongoose = require("mongoose")
const chartSchema = new mongoose.Schema({
chancellor : {
    type: String,
    required:true
},
HOD:{
    type: String,
    required: true,

},

})

let Chart = mongoose.models.chart || mongoose.model('chart', chartSchema)

module.exports = Chart