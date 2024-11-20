const { Server } = require("socket.io");

const io = new Server({ cors: { origin: "http://localhost:3000" } });

io.on("connection", (socket) => {
  console.log("worked")
});
io.on("message", (socket) => {
  console.log(socket)
})
httpServer.listen(3001);
