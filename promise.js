var fs = require ('fs');
  function getName(Name){
   return new Promise ((resolve,reject) => {
	if (Name){
 	   resolve(Name); 
	}else
	   reject("nhap ten");
    });
}

  function Read(Name){
   fs.readFile(Name,"input.txt",(err,data) =>{
	if(err) throw err;
	console.log(data);
  });
	return getName(Name);
}
  function write(Name){
   fs.writeFile(Name,data,(err) =>{
	if(err) throw err;
	conlose.log("created");
  })
	return getName(Name);
}
getName('input.txt')
.then((Name) => {
  fs.readFile(Name,"utf8",(err,data) =>{
       if(err) throw err;
	console.log(data);
  })
     return getName(Name);
})
.then((Name) => {
	fs.writeFile(Name,data,(err) =>{
	if(err) throw err;
	console.log("created");
 })
})
getName('input.txt')
var data = "hoang the thach \n";
