const  {  WebSocketServer } = require("ws");
const dotenv = require("dotenv");

dotenv.config();
const wss = new WebSocketServer({ port: process.env.PORT || 8080 });

wss.on ("connection", (ws)=>{
    ws.on("erro", console.error)

    ws.on("mensagem", (data)=> {
        wss.clients.forEach((clients) => ws.send(data.toString()))
    })

    console.log("conect")
})