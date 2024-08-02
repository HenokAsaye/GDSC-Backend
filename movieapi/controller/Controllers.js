const movies = require('../models/model');
const url = require('url');

async function getMovie(req,res){
    try{
        let parsedurl = url.parse(req.url,true);
        let query = (parsedurl.query);
        let title = (query.s).toLowerCase();
        if(!title){
            res.writeHead(400,{"content-type":"text/plain"});
            res.end(JSON.stringify({message:"missing the search term 's' in your qery"}))
        }else{
            const movie = await movies.findBytitle(title)
            if(movie){
            res.writeHead(200,{"content-type":"application/json"});
            res.end(JSON.stringify(movie))
            }else{
                res.writeHead(404,{"content-type":"application/json"});
                res.end(JSON.stringify({message:"File Not Found"}));
            }
        }    
    }catch(error){
    console.log(error)
}
};
async function getmovieById(req,res,id){
    try{
        const movieid = await movies.findById(id);
        if(!movieid){
            res.writeHead(404,{"content-type":"application/json"});
            res.end(JSON.stringify({message:"File Not Found"}));
        }else{
            res.writeHead(200,{"content-type":"application/json"});
            res.end(JSON.stringify(movieid)) ;
        }
    }catch(error){
        console.log(error)
    }

}

module.exports = {
    getMovie,
    getmovieById
}