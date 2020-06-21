var express = require('express');
var router = express.Router();

var users = [
  {
    email:"abc@gmail.com",
    password:"password"
  }
] 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to backend server!!");
});

/* Authentication Check */
router.post('/login',function(req,res){
     let result = users.find(user => user.email == req.body.email);
     if(result){
       if(result.password == req.body.password){
         res.status(200).send({
           message:"Successful Login!!"
         })
       }
       else{
          res.status(401).send({
            message:"Password Incorrect!!"
          })
     }
    }
    else{
        res.status(401).send({
          message:"User not found!!"
        })
  }
})
module.exports = router;
