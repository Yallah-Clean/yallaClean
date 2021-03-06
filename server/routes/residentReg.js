var router = require('express').Router();
var Resident = require('../model/residentReg');
var errorLog = require('chalk').red;

router
.get('/' , (req, res) => {
    //res.json({'message': 'hello from clinic router'});
    
    Resident.find((err, result)=>{
        if(err) console.log(error);
        res.json(result);
    })
})
.post('/', (req ,res) => {
   // console.log(body({"body":"hello"}))
   var doc =  req.body;
   Resident.create(doc,(err, result)=> {
       if(err) console.log(errorLog(err));
       res.json(result);
   })
})
.put('/:id', (req, res) =>{
    var doc =  req.body;
    var id = req.params.id;
    Resident.findByIdAndUpdate(id, doc ,(err, result)=> {
       if(err) console.log(errorLog(err));
       res.json(result);
   })
})
.delete('/:id', (req, res)=>{
    var id= req.params.id;
    Resident.findOneAndRemove({_id:id}, (err, result)=> {
        if(err) console.log(errorLog(err))
        res.json(result);
    })
})


module.exports = router;