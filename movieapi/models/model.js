const movies = require('../data/moviedata.json');

function findBytitle(title){
    return new Promise((resolve,reject)=>{
        const movie = movies.find((p)=> p.title ===title);
        resolve(movie)
    })
}

function findById(id){
    return new Promise((resolve,reject)=>{
        const moviesId = movies.find((i)=> i.id===id);
        resolve(moviesId)
    });
}

module.exports = {
    findBytitle,
    findById
}