// const express = require('express');

require('dotenv').config();


// const server = express();
// server.listen(8080);

// console.log('Hello World')

// const { response } = require('express');
// const http = require('http');
// const fs = require('fs');

// const indexFile = fs.readFileSync('index.html', 'utf-8')

// const data = {
//     'name' : 'sudhir',
//     'age' : 20,
// }
// const server = http.createServer((req, res)=>{
//     console.log('Server Started');

//     res.setHeader('Dummy', 'Dummy Value');
//     res.setHeader('content-type', 'text/html');
//     res.end(indexFile);
// })

// server.listen(8080);

const express = require('express');
const server = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const productRouter = require('./routes/product')
// body parser

// db connecton code
// getting-started.js

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('Database Connected');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}





server.use(cors());
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/api', productRouter.routes);
console.log('env', process.env.DB_PASSWORD);
server.use('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'build', 'index.html'))
})

// server.get('/', (req, res)=>{
//     // res.send('Hello World');  // send alway send html to the server
//     // res.sendFile('D:\node class\class2\index.html');
//     // res.sendStatus(2001)
// })

// server.get('/about', (req, res)=>{
// res.send('About page loaded');
// })


// middleware


// server.use((req, res, next)=>{
//     console.log(req.method, req.ip, req.hostname, new Date(), req.get('User Request') );
//     next();
// })

// server.use(express.json());
// const auth = (req, res, next)=>{
//     console.log(req.query);

//     if(req.body.password == '123'){
//         next()
//     }
//     else{
//         res.sendStatus(401)
//     }
// }




// API

// This is not rest api

// server.get('/', (req,res)=>{
//     res.json({type:'GET'});
// })
// // params can be use for mmaking the API of product
// server.get('/product/:id', (req,res)=>{
//     console.log(req.params);
//     res.json({type:'GET'});
// })

// server.post('/home', (req,res)=>{
//     res.json({type:'POST'});
// })
// server.delete('/delete', (req,res)=>{
//     res.json({type:'DELETE'});
// })

// server.put('/about', (req,res)=>{
//     res.json({type:'PUT'});
// })
// server.patch('/service', (req,res)=>{
//     res.json({type:'PATCH'});
// })

// server.listen(8080, ()=>{
//     console.log('Server Started');
// });




// rest api start here🔥🔥🔥🔥🔥✅✅✅✅👇

// Modal view controller



// server class
server.listen(process.env.PORT, ()=>{
    console.log('Server Started');
});