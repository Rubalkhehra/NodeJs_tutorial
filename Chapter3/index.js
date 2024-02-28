const fs=require('fs');
const index=fs.readFileSync('data.json','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const products=data.products;


const express=require('express');
const server=express();

//server.app() to load the middleware
//it parses the incoming request wiht json data/payload
//express.json() return middleware that parses JSON only and only looks 
// at requests where content-type is matched with type
server.use(express.json());

//server.use(express.urlencoded())

//for static hosting
server.use(express.static('public'));

server.use((req,res,next)=>{
    console.log("middleware1");
// to call the next middleware in the stack
    next();
})


//req.query to get data from query in url of get request
//req.body to get data in the body of the POST request
const auth=(req,res,next)=>{
    console.log(req.body);
    if(req.body.password=='123'){
        next();
    }else{
        res.sendStatus(401);
    }
}

//server.use(auth)
// web apis or endpoints or Route
//route handler
server.get('/',auth,(req,res)=>{
    res.json({type:'GET'});
    //res.status(404).end();
    //res.json(products);
   // res.send('hello express');
   //res.sendFile('C:/Users/khehr/Documents/NODEJS/NodeJs_tutorial/Chapter2/index.html')
});
server.post('/',auth,(req,res)=>{
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