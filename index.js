const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("This is working, cap!")
})

app.listen(80, function(){
    console.log('Listening on port 3000!')
})

