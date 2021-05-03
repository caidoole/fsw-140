const express = require('express');
const server = express();

server.use(express.json());
server.use('/', require('./routers/cardRouter.js'))

//Open Up and Listen from Port 3002
server.listen(3003, ()=> {console.log('Magic Server is running on Port 3003')})
