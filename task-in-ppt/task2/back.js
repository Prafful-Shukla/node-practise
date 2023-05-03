// Create a object .
const obj={
    name:"prafful",
    age:24,
    character:"dheela hai"
}
// Convert it into JSON
const intoJson=JSON.stringify(obj);

// Add this data to another file.
const fs=require("fs");
fs.writeFileSync("createfile.txt",intoJson)

// Read the data from that file.
// fs.readFileSync("createfile.txt");
const readData=fs.readFileSync("createfile.txt");

// Again Convert it back to JS Object.
// Show data on the console. 

console.log(JSON.parse(readData));

//buffer Module
//no need require
// const buf1 = Buffer.alloc(10);
// const buf2 = Buffer.alloc(10, 1);
// 			// Creates a Buffer of length 10,
// 			// filled with bytes which all have the value `1`.
// const buf3 = Buffer.allocUnsafe(10);
// 	//  Creates an uninitialized buffer of length 10.
// 	// // This is faster than calling Buffer.alloc() but the returned
// 	// Buffer instance might contain old data that needs to be
// 	//  overwritten using fill(), write(), or other functions that fill the Buffer's contents.
// const buf4 = Buffer.from([1, 2, 3]);
// const buf6 = Buffer.from('AB');
// console.log(buf1)
// console.log(buf2)
// console.log(buf3)
// console.log(buf4)
// console.log(buf6)

// Buffers and character encodings#
const buf = Buffer.from('Divya', 'utf8');
console.log(buf)
console.log(buf.toString('utf-8'));
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

//for array
// Buffers and iteration
const mybuffer = Buffer.from([1, 2, 3]);
		for (const b of mybuffer)
			 {
  		console.log(b);
			}

//---------Stream module----------
     const stream =require('node:stream');

