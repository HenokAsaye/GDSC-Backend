module.exports = (req,res,next)=>{
    if(req.url === "/middleware" && req.method==="GET"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("let us handle this error")
    }else if(req.url ==="/error" && req.method==="GET"){
        res.end("you are creating your Error")
    }
    else{
      next();
    }
}