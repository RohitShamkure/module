const express=require('express');
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.urlencoded({extended:false}));

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.listen(4000,function(){
    console.log('server is running on 4000');
});
