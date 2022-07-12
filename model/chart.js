const mongoose = require("mongoose")
const chartSchema = new mongoose.Schema({
    
totalOffersPlacement : {
    type: String,
},
highestCTCPlacement:{
    type: String,

},
averageCTCPlacement:{
    type: String,

},
highestStipendIntern:{
    type: String,

},
averageStipendIntern:{
    type: String,

},
highestPackage21:{
    type: String,

},
highestPackage20:{
    type: String,

},
highestPackage19:{
    type: String,

},
myChart:{
      type:String
},
myChart3:{
    type:String

},
myChart4:{
    type:String

},
myChart1:{
      type:String

},
myChart2:{
    type:String

},


})

let Chart = mongoose.models.chart || mongoose.model('chart', chartSchema)

module.exports = Chart