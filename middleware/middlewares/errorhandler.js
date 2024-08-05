module.exports = (err,req,res,next)=>{
    console.log(err.stack)
    res.writeHead(500,{"content-type":"text/plain"});
    res.end("There is a Server Problem")
}