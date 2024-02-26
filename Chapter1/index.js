// common js
const lib=require('./lib.js');
const fs=require("fs")

fs.writeFileSync('demo.txt',"hello world");
const data_str=fs.readFileSync('demo.txt','utf-8')

fs.readFile('demo.txt','utf-8',(err,data)=>{
    console.log(data);
})

console.log(lib.sum(7,3));