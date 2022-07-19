require('./models/db')
let cap

const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const session = require('express-session')
const mongoose = require('mongoose')

User = mongoose.model('Users')
Room = mongoose.model('Rooms')

app.use(session({
     secret:'souvik',
     saveUninitialized:true,
     resave: false
}))

const port = process.env.PORT || 3000
app.set('view engine','ejs')

app.use(bodyparser.urlencoded({
     extended:true
}))
app.use(express.static("public"))

app.get('/',(req,res)=>{
     res.render('index')
})
app.get('/index.html',(req,res)=>{
     res.render('index')
})
app.get('/register.html',(req,res)=>{
     res.render('register')
})

app.post('/register.html',(req,res)=>{
     let room = new Room(req.body)
     room.Date = Date.now()
     room.save((err,doc)=>{
          if(err)
          {
               console.log(err)
          }
          else
          {
               res.redirect('/index.html')
          }
     })
})

app.get('/accommodation.html',(req,res)=>{
     res.render('accommodation')
})

app.get('/register',(req,res)=>{
     res.render('registerUser')
})
app.post('/register',(req,res)=>{
     const uname = req.body.uname
     const pwd = req.body.pwd
     const mail_id = req.body.mail_id
     const geneder = req.body.geneder
     const dob = req.body.dob
     const contact_no = req.body.contact_no
     const newUser = new User({
          uname:uname,
          pwd:pwd,
          mail_id:mail_id,
          geneder:geneder,
          dob:dob,
          contact_no:contact_no
     })
     newUser.save().then(()=>{
          res.redirect('/login')
     }).catch((err)=>{
          console.log(err)
     })
     
})

app.get('/login',(req,res)=>{
     res.render('login')
})
app.post('/login',(req,res)=>{
     mail_id = req.body.mail_id
     pwd = req.body.pwd
      qr9 = { $and : [{mail_id : mail_id}, {pwd : pwd}]}
     User.find(qr9).then((user)=>{
          if(user){
               req.session.user = user
               home
               res.redirect('/home')
               console.log("Logged in")
          }else{
               res.redirect('/login')
               console.log("Invalid credentials")
          }
     })
})

app.get('/home',(req,res)=>{
     if(req.session.user){
          res.render('dashboard',{
               user:req.session.user
          })
     }else{
          res.redirect('/login')
     }
})

app.get('/logout',(req,res)=>{
     console.log(req.session.user)
     res.render("users/logout",{uid:req.session.user})
     req.session.destroy()
     console.log(req.session)
})


app.listen(port,()=>{
     console.log("Server is running at PORT 3000")
})