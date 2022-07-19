const mongoose = require('mongoose')
// const { string } = require('prop-types')

const newRoomSchema = new mongoose.Schema({
     fname:String,
     lname:String,
     accomodation:String,
     mail_id:String,
     ph_no:Number,
     address:String,
     city:String,
     landmark:String,
     pincode:Number,
     about:String,
     trooms:Number,
     tcapacity:Number,
     types_accomodation:String,
     preference:String,
     prefered_gender:String,
     distribution_rooms:String,
     total:Number,
     n_hospital:String,
     n_hospital_d:String,
     n_pharma:String,
     n_pharma_d:String,
     n_clinic:String,
     n_clinic_d:String,
     n_market:String,
     n_market_d:String,
     n_institutes1:String,
     n_institutes1_d:String,
      n_institutes2:String,
     n_institutes2_d:String,
      n_institutes3:String,
     n_institutes3_d:String,
     Date:Date,
})

module.exports = mongoose.model('Rooms',newRoomSchema)