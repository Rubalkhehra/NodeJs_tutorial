// common js
const fs=require("fs")

fs.writeFileSync('demo.txt',)
fs.readFileSync('demo.txt','utf-8')

fs.readFile('demo.txt','utf-8',(err,data)=>{
    console.log(data);
})