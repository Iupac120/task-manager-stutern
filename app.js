require('dotenv').config()
const express = require ('express')
const app = express()
const connectionDB =require('./db/connect')
const router = require('./routes/task')
const PORT = process.env.PORT || 3000
app.use('/api/v1/task',router)


const start =async()=>{
   try{
        await connectionDB(process.env.MONGO_URI)
        app.listen(PORT,()=>{
        console.log(`app listens to port ${PORT}`)
    })
   }catch(error){
    console.log(error)
   }
}
start()