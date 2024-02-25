const express=require('express');

console.log("this is outer module, now server is sunning");

const server=express();
server.listen(8080);