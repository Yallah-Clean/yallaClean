var router = require('express').Router();
 
var signInRouter = require('./signIn');


router.use('/signIn', signInRouter);

router.get('/test', (req, res) => {

  res.json({
    "start": "Now"
  })
})

module.exports = router;