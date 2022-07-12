const mongoose = require("mongoose")
const indexSchema = new mongoose.Schema({
    
invitation:{
    type: String,
    // required:true
},
totalOffers:{
    type: Number,
    // required: true,

},
highestCtc:{
    type: Number,
    // required: true,

},
highestStipend:{
    type: Number,
    // required: true,

},
avgStipend:{
    type: Number,
    // required: true,

},
indexPics:{
    type: String,
    
},

})

let Index = mongoose.models.index || mongoose.model('index', indexSchema)

module.exports = Index