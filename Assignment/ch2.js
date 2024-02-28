const http=require('http');

const ser= function(port){
    const server=http.createServer((req,res)=>{
        console.log(`server with port number ${port} is running`);
    });
    server.listen(port);
}

console.log("working")
ser(8080);
ser(8030);
