const http = require('http')
const url = require('url');
const path = require('path');
const {getMovie,getmovieById}  =require('./controller/Controllers')

const port = 3000;

let server = http.createServer((req,res)=>{

    let parsedurl = url.parse(req.url,true);
    let pathname = parsedurl.pathname
    if(pathname==='/movies/search' && req.method==='GET'){
        getMovie(req,res)
    }else if (req.url.match(/\/movies\/([0-9]+)/) && req.method === "GET"){
        let id = req.url.split('/')[2];
        getmovieById(req,res,id)

    }else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Not Found" }));
    }
})


server.listen(port ,(err)=>{
if(err){
    console.log(err);
}else{
    console.log(`server is listening on ${port}`);
}
})