const { Server } = require("socket.io");
const {createServer} = require("http")
const httpServer = createServer();
const io = new Server(httpServer,{cors:{origin:"http://localhost:3000"}});

io.on("connection", (socket) => {

  socket.emit("message","hello ")
  socket.emit("message","hello 2")

});
io.on("message",(socket)=>{
    console.log(socket)
})
httpServer.listen(3001);
