const express=require('express');
const app=express();
const cors=require('cors');

require('dotenv').config({path:"./config.env"})
const port= process.env.PORT || 5000;

console.log(port,"port")
//use middleware
app.use(cors());
app.use(express.json());

//mongodb connection
const con=require('./db/connection');

//using routes
app.use(require('./routes/route'))

con.then(db=>{
  if(!db) return process.exit(1);

  //listen to the http server 
app.listen(port,()=>{    
   console.log(`server is running on port: http://localhost:${port}`)
 })

 app.on('error', err=>console.log(err,"failed to connect with https server"))

 //error in mongodb connection
}).catch(error=>{
  console.log(error,"connection failed")
})

  