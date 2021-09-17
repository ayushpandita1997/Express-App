//Basic Importing/Exporting//

// const fun = require('./index.js');
// fun.fn("ayush again");
// fun.fn2("anu again");

//Importing node module//

// const url = require('url');
// const urlValue = 'https://www.youtube.com/watch?v=zQRrXTSkvfw';
// const value = url.parse(urlValue,true);
// console.log(value.href);



// const os = require('os');
// const fram = os.freemem();
// console.log(fram);



////////////////////////////////Creating a server in node////////////////////////////////
const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('hello world');
        res.end();
    }
    if(req.url==='/gil'){
        res.write('hello world page 1');
        res.end();
    }
    else{
        res.write("page not found")
        res.end();
    }
});

server.listen(3000);
console.log("Listening on port 30000....");
////////////////////////////////Creating a server in node////////////////////////////////




// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
// res.write("hello world");
// res.end();
//     }
//     else{
//         res.write("page not found")
//         res.end();
//     }
// });
// server.listen(8000,()=> console.log("connection is created"));