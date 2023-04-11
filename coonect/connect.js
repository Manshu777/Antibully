const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({path:"./dotenv.env"});
 const DB = process.env.URL.toString()


 mongoose.set('strictQuery',false);
 mongoose.connect(DB).then(()=>{
  console.log("hheel")
 }).catch((err)=>{
   console.log(err)
 })

   const List = new mongoose.Schema({
     name: {
        type: String,
        required: true
    },
    number: {
        type : Number,
        required: true
    },
    mesg:{
        type: String,
        required: true
    }


   
  })


 const bullydata = new mongoose.model("bullydata",List);

 module.exports = bullydata

