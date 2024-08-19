function readFile(callback){
  setTimeout(()=>{
    console.log("Read File");
    callback(null,"file");
  },1000);
 
}
function parseFile(file,callback){
  setTimeout(()=>{
    console.log("paresedfile!");
    callback(null,"paresedfile!"+file);
  },1000);
 
}
function processFile(file,callback){
  setTimeout(()=>{
    console.log("This file is processed!")
    callback(null,"This file is processed!"+file);
  },1000)
  
}
function saveFile(file,callback){
  setTimeout(()=>{
    console.log("This file is processed and saved!");
    callback(null,"This file is processedand saved!"+file);
  },1000)
  
}
readFile((err,file)=>{
  if(err){
    console.error("There is an Error!")
  }else{
    parseFile(file,(err,ParsedFile)=>{
      if(err){
        console.error("There is an Error!");
      }else{
        processFile(ParsedFile,(err,processedFile)=>{
          if(err){
            console.error("There is an Error!");
          }else{
            saveFile(processedFile,(err,savediFile)=>{
              if(err){
                console.error("There is an Error!");
              }else{
                console.log("Done!");
              }
             
            })
          }
        })
        
      }
    })
  }
})