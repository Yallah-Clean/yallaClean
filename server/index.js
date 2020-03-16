const express = require('express');
const app = express();
const router = express().router;


app.get('/', function(req , res){
    res.send('Hello from node js server');
})


app.get('/api' , router);

app.listen(3000 , function(){
    console.log('Server is listening now at port 3000');
})
