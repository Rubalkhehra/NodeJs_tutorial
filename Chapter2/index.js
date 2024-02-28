const http = require("http");
const fs=require('fs');

fs.readFileSync('index.html');

const index = fs.readFileSync('index.html','utf-8');
//const data = fs.readFileSync('data.json','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
//const product= data.products[0];
const products = data.products;


const server = http.createServer((req, res) => {
  console.log(req.url,req.method);
  console.log(req.data);
  console.log(typeof(req.url));
  res.end();
  // if(req.url.startsWith('/product')){
  //   const id = req.url.split('/')[2];
  //   // +id means convert string into number
  //   const product=products.find(p=>p.id==(+id));
  //   console.log(product);
  //   res.setHeader("Content-Type", "text/html");
  //   let modified_index=index.replace('**title**',product.title).replace('**url**',product.thumbnail)
  //   .replace('**price**',product.price)
  //   .replace('**rating**',product.rating);
  //   res.end(modified_index);
  // }

  switch(req.url){
    case '/':
        res.setHeader('Context-Type','text/html');
        res.end(index);
        break;
    case '/api' :
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
        break;

// this is for dynamic rendering of data that is data from data.json file is dynamic passed in response
// so that product is dynamically displayed
    // case '/product' :
    //     res.setHeader("Content-Type", "text/html");
    //     let modified_index=index.replace('**title**',product.title).replace('**url**',product.thumbnail)
    //     .replace('**price**',product.price)
    //     .replace('**rating**',product.rating);
    //     res.end(modified_index);
    //     break;
    default:
        //res.writeHead(404,'oops not found');
        //res.end();
  }
  console.log("server started  now");
  //res.setHeader("dummy", "dummyValue");
  
  //res.setHeader("Content-Type", "application/json");
  //res.end(JSON.stringify(data));
  
});
// every request is listened by this request listener
server.listen(8080);
