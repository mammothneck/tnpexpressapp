const Index = require('./model/index')
const Message = require('./model/message')
const Objective = require('./model/objective')
const Procedure = require('./model/procedure')
const Academics = require('./model/academics')
const Chart = require('./model/chart')
const express = require("express")
const mongoose = require("mongoose")
const path = require('path')
const app = express()
const port = 3000
const cors = require("cors")

app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Mammothneck:stupid26@cluster0.ib7hr.mongodb.net/?retryWrites=true&w=majority")

mongoose.connection.on("connected" , () =>{
      console.log("connected to mongoosejs")
});

app.use(express.static(path.join(__dirname, 'assets')));

app.post('/create',async function(req, res){
      console.log(req.body)
      let data = await Index.findOneAndUpdate({}, req.body)
       data = await Message.findOneAndUpdate({}, req.body)
       data = await Objective.findOneAndUpdate({}, req.body)
       data = await Chart.findOneAndUpdate({}, req.body)
       data = await Procedure.findOneAndUpdate({}, req.body)
      console.log(data)
      
})


    
app.get('/admin',async function(req, res){
     
      res.render('admin.ejs');
    });   


app.get('/',async function(req, res){
      let data = await Index.find({
            
      })
//       console.log(data)
      res.render('index.ejs',data[0]);
    });

app.get('/message',async function(req, res){
      let data = await Message.find({
      })
      // console.log(data)
      res.render('message.ejs',data[0]);
    });
app.get('/objective',async function(req, res){
      let data = await Objective.find({
      })
//       console.log(data)
      res.render('objective.ejs',data[0]);
    });
app.get('/procedure',async function(req, res){
      let data = await Procedure.find({
      })
//       console.log(data)
      res.render('procedure.ejs',data[0]);
    });
app.get('/academics',async function(req, res){
      let data = await Academics.find({
      })
//       console.log(data)
      res.render('academics.ejs',data[0]);
    });

app.get('/chart',async function(req, res){
      let data = await Chart.find({
      })
      // console.log(data)
      res.render('chart.ejs',data[0]);
    });


app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`)
})
