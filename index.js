const express = require('express')
const cors = require('cors');
const route = require('./routinglayer/route');
const PORT = process.env.PORT || 3000;

const server = express();
server.use(express.json())
server.use(cors());
server.use("/api",route);
// server.use("/api/fibbyquery",route);

server.use((err,req,res,next)=>{
    console.log(err)
   res.send(err);
   res.end()
})

server.listen(PORT,()=>{
    console.log(`Server is running ${PORT} `)
})