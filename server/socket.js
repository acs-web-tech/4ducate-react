const { Server } = require("socket.io");

const io = new Server({cors:{origin:"http://localhost:3001"}});

io.on("connection", (socket) => {
console.log("worked")
});
// io.on("message",(socket)=>{
    
// })
io.listen(3000);
