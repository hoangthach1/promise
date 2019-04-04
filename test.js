var fs = require('fs');

 function getName(name) {
    return new Promise((resolve,reject )=> {
        
            if(name){
                resolve(name);
            }else{
                reject("nhap ten");
            }
        
        
    });
}

function write(name){
    fs.writeFile(name,data,(err)=>{
        if(err) throw err;
        console.log("created !");
    })
    return getName(name);
}
function append(name){
    fs.appendFile(name,data2,(err)=>{
        if(err) throw err;
    })
    return getName(name);
}
function read(name){
    fs.readFile(name,"input.txt",(err,data)=>{
        if(err) throw err;
        console.log(data);
    })
    return getName(name);
}
 getName('teste.txt')
 .then((name) => {
     fs.writeFile(name,data,(err)=>{
         if(err) throw err;
         console.log("created !");
     })
     return getName(name);
 })
 .then((name) => {
     console.log("1");
     fs.appendFile(name,data2,(err)=>{
         if(err) throw err;
     })
     return getName(name);
 })
 .then((name) => {
     console.log("2");
     fs.readFile(name,"utf8",(err,data)=>{
         if(err) throw err;
         console.log(data);
     })
 })
 getName('input.txt')
var data = "ngo van duy \n";
var data2 = "hoang the thach \n";
