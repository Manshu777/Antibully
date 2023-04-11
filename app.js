const express = require("express")
const App = express()
const dotenv = require("dotenv")
const path = require("path")
dotenv.config({path:"./dotenv.env"});
 const PORT = process.env.PORT || 4000
 
 require('./coonect/connect.js')
  const bullydata = require('./coonect/connect.js')
   
  App.use(express.json());
  App.use(
    express.urlencoded({ extended: true })
);


 App.post("/", async (req,res)=>{
 

 	try{
 		const user = new bullydata({
 			name:req.body.name,
 			number:req.body.number,
 			mesg:req.body.mesg
 		})
 	    await user.save()
 	     res.status(200).json({mesg:"Succssful registerdata"})

 	}catch(err){

     console.log(err)
 	}



 })

   // path for build folder
  App.use(express.static(path.join(__dirname,"./client/build")));
  
  App.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
  })

 App.get('/data', async(req,res)=>{

 	const userdata = await bullydata.find({})
 	res.send(userdata)


 })

App.listen(PORT,()=>{
  console.log(`Your are listening ${PORT}`)
})
