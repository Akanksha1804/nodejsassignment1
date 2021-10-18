const express = require('express')
const app = express()
const port = 3000

var os = require('os');
var fs = require('fs');
const path = require('path');

result=[];

fs.readdir("../",function(err,files){
    if(err) throw err;
    
    for(var i=0;i<files.length;i++){
        obj={}
        obj["filename"] = files[i];
        obj["file extension"] = path.extname(files[i]);
        if(obj["file extension"] == ''){
            obj["file extension"] = "folder";
        }
        result.push(obj);
    }
    console.log(result);
});

app.get("/",function(req,res){
    res.send(result);
})

app.listen(3000)