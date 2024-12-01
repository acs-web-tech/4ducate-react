const { Server } = require("socket.io");

const io = new Server({ cors: { origin: "http://localhost:3000" } });

io.on("connection", (socket) => {

  socket.emit("message",{message:"hello",id:1})
  socket.emit("message",{message:"hello 2",id:2})
  socket.emit("message",{message:"hello 3",id:3})

  console.log("worked")
});
io.on("message", (socket) => {
  console.log(socket)
})
httpServer.listen(3001);
