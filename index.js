const Index = require('./model/index')
const Message = require('./model/message')
const Objective = require('./model/objective')
const Procedure = require('./model/procedure')
const Academics = require('./model/academics')
const Whydtu = require('./model/whydtu')
const Faq = require('./model/faq')
const Chart = require('./model/chart')
const Contact = require('./model/contact')
const express = require("express")
const mongoose = require("mongoose")
const path = require('path')
const port = 3000;
const cors = require("cors")
const bodyparser = require("body-parser")
const session = require("express-session")
const cookieParser = require('cookie-parser');
// const{v4:uuidv4}= require("uuid")

const app = express();


app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser());
app.use(cors())

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://mammothneck:zqLbU3whBf31vMc6@cluster0.hhwwzzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');



mongoose.connection.on("connected" , () =>{
      console.log("connected to mongoosejs")
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'assets')));

app.use(session({
      secret:'secret',
      resave:false,
      saveUninitialized:true
}))

app.post('/updateIndex',async function(req, res){
      // console.log(req.body)
      let data = await Index.findOneAndUpdate({}, req.body)
      // console.log(data) 
})
app.post('/updateMessage',async function(req, res){
      // console.log(req.body)
      let  data = await Message.findOneAndUpdate({}, req.body)
      // console.log(data) 
})
app.post('/updateObjective',async function(req, res){
      // console.log(req.body)
      let data = await Objective.findOneAndUpdate({}, req.body)         
      // console.log(data) 
})
app.post('/updateChart',async function(req, res){
      // console.log(req.body)
      let data = await Chart.findOneAndUpdate({}, req.body)       
      // console.log(data) 
})
app.post('/updateProcedure',async function(req, res){
      // console.log(req.body)
      let data = await Procedure.findOneAndUpdate({}, req.body)
      // console.log(data) 
})


app.post('/createChart',async function(req,res){
      let  data = await Chart.create(req.body)
})

    


app.get('/admin',async function(req, res){
   
      if(req.session.user){
            res.render('admin.ejs');
      }
      else{
            res.redirect('/login');
      }
      
    });   

app.get('/',async function(req, res){
      let data = await Index.find({})
//       console.log(data)
      res.render('index.ejs',data[0]);
    });
    

app.get('/message',async function(req, res){
      let data = await Message.find({})
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
app.get('/contact',async function(req, res){
      let data = await Contact.find({
      })
//       console.log(data)
      res.render('contact.ejs',data[0]);
    });

app.get('/chart',async function(req, res){
      let data = await Chart.find({
      })
      // console.log(data)
      res.render('chart.ejs',data[0]);
    });
    
app.get('/whydtu',async function(req, res){
      let data = await Whydtu.find({
      })
      // console.log(data)
      res.render('whydtu.ejs',data[0]);
    });

app.get('/faq',async function(req, res){
      let data = await Faq.find({
      })
      // console.log(data)
      res.render('faq.ejs',data[0]);
    });

app.get('/login',async function(req, res){
      let data = await Faq.find({
      })
      // console.log(data)
      res.render('login.ejs',data[0]);
    });


const credential = {
      email:"admin@gmail.com",
      password:"admin123"
}

app.post('/login',(req,res)=>{
      console.log(req.body);
      if(req.body.email==credential.email && req.body.password==credential.password){
            req.session.user = req.body.email;
            res.redirect('/admin');
      }else{
          res.end("invalid username");
      }
  })

app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`)
})
