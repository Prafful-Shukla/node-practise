const fs = require('fs');
const http=require()
const readableStream = fs.createReadStream('file1.txt');

readableStream.on('data1', (chunk) => {
  const data2=chunk.toString();
  console.log(data2);
});

readableStream.on('end', () => {
  console.log('End of file');
});

app.listen(1000)