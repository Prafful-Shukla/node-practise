// const eventemitter=require('events');
// const event=new eventemitter();

// event.on('saved',()=>{
//     console.log('a saved event occured');
// });

// event.emit('saved')

// //Timers
// // var myInt =setInterval
// // (function(){console.log("Hello");}
// // ,500)

// //HTTP
// //creating server
// const http=require("http");

// const server=http.createServer((req,res)=>{
//     res.end("hello i am a response")
// })

// server.listen(1000,()=>{
//     console.log("listening to port no 1000")
// })

// //Url module
// var url=require('url');
// console.log(req.url)

//Handle http req (Routing)
var http=require("http");

var server2=http.createServer(function(req,res){
    if(req.url=='/'){
        res.end('Welcome to index page');
    }
    else if(req.url=='/emp'){
        res.end('Welcome to Employees page')
    }
    else{
        res.end("invalid req made")
    }
});

server2.listen(1000);
console.log('Server running at port 1000')

// callback function
// 1
const abc = (name,callback) => {
    console.log(`hello ${name}`);
    callback();
}

const abcd = () => {
    console.log("hello1")
}

abc("divya",abcd);

//file system module

// 1 Create a file:
	// Need to require the module	:
			const fs =require("fs");
			fs.writeFileSync("filename.txt",'contetnt of file');

// 2 Add Data to file:
	fs.appendFileSync("filename.txt",'content of file');

    // 3 Read File Data:
	// This method read the entire file into buffer.
	// 	fs.readFileSync("newfile.txt");
	// 	const data= fs.readFileSync("newfile.txt");
	// 	console.log(data);
    // 4 Instead of buffer data , i want original data inside a file:
	// actual_data=data.toString();
	// console.log(actual_data);
    // fs.readFileSync("newfile.txt",”utf-8”);

    // 1 Create a file:
	// const fs= require("fs");
	// fs.writeFile("fs.txt","i am the original data",(err)=>{
	// console.log('file is created');
    // 	console.log(err);
	// 			});
    // 2 Add Data to file:
    //     fs.appendFile("fs.txt",": ,hello i am added ",(err) =>{
    //                 console.log("task completed");
    // 3 Read File Data:
	// fs.readFile("fs.txt",(err,data)  =>{
   	// 	 console.log(data);
	// 			})

    // Operating System Module



