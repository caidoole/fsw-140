const express = require('express');
const server = express();
require('dotenv').config();
const expressJwt = require('express-jwt');

server.use(express.json());
server.use('/auth', require('./routers/authRouter.js'))
server.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
server.use('/api/user', require('./routers/authRouter.js'))
server.use('/api/card', require('./routers/cardRouter.js'))

server.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "Unauthorized Error") {
        res.status(err.status);
    }
    return res.send({ errMsg: err.message })
})

//Open Up and Listen from Port 3003
server.listen(3003, () => { console.log('Magic Server is running on Port 3003') })
