const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// set static folder path
app.use(express.static(path.join(__dirname, "public")));

// run when client connects
io.on("connection", (socket) => {
    console.log("new commection ...");

    socket.emit("message", "welcome to chatCord");
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});