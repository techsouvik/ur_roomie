const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ContactDB',{
     useNewUrlParser:true,
     useUnifiedTopology:true
}).then(()=>{
     console.log("Connected")
}).catch((err)=>{
     console.log(err)
})
require('./user.model')
require('./room.model')