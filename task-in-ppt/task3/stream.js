// const fs=require('fs');
// const http=require('http');

// const server=http.createServer()
// server.on('request',(req,res)=>{
//     fs.readFile('stream.txt',(err,data)=>{
//         if(err)throw err;

//         res.end(data.toString())
//     });
// });

// server.listen(1000,()=>{
//     console.log("listening to portno 1000");
// });

//with stream
// const fs = require("fs");
// const http = require("http");
// const server = http.createServer();

// server.on('request', (req, res) => {
//     const rstream = fs.createReadStream("stream.txt");
//     rstream.on('data', (readdata) => {
//         res.write(readdata);
//     })

//     rstream.on('end', () =>          
//     // how to give response
//     {
//         res.end();
//     })
// });

// server.listen(1000, () => {
//     console.log("listening to port ");
// });

// const fs = require("fs")
// const http = require("http")
// const server = http.createServer();

// server.on('request', (req, res) => {
//     const rstream = fs.createReadStream("C:\Users\coder\node-practise\task-in-ppt\task3\stream.txt");
//     rstream.on('data', (chunkdata) => {
//         res.write(chunkdata);
//     })
//     rstream.on("end", () => {
//         res.end();
//     })
//     rstream.on("error", (err) => {
//         console.log(err)
//         res.end("file not found")
//     })
// })
// server.listen(1000, () => {
//     console.log("listing to port 1000")
// })

//pipe more efficient
const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on('request', (req, res) => {
    const rstream = fs.createReadStream("stream.txt");
    rstream.pipe(res);
})
server.listen(1000, () => {
    console.log("listening to port ");
});




