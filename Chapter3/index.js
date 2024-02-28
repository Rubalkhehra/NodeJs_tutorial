const fs=require('fs');
const index=fs.readFileSync('data.json','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const products=data.products;


const express=require('express');
const server=express();



// web apis or endpoints or Route
server.get('/',(req,res)=>{
    res.json({type:'GET'});
    //res.status(404).end();
    //res.json(products);
   // res.send('hello express');
   //res.sendFile('C:/Users/khehr/Documents/NODEJS/NodeJs_tutorial/Chapter2/index.html')
});
server.post('/',(req,res)=>{
    res.json({type:'POST'});
});
server.put('/',(req,res)=>{
    res.json({type:'PUT'});
});
server.patch('/',(req,res)=>{
    res.json({type:'PATCH'});

});
server.delete('/',(req,res)=>{
    res.json({type:'DELETE'});

});

server.listen(8080,()=>{
    console.log('server started');
});