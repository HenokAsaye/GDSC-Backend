document.getElementById('button').addEventListener('click',(event)=>{
    event.preventDefault();
    const input = document.getElementById('searchvalue').value;
    Searchmovies(input);
})
async function Searchmovies(input){
    const apikey = '62728a';
    const data =  await fetch(`https://www.omdbapi.com/?s=${input}&apikey=${apikey}`);
    const output = await data.json();
    display(output.Search);
}

function display(result){
    const resultdiv = document.getElementById('results');
    resultdiv.innerHTML = '';
    if(result){
        result.forEach(movie => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('movie');
            resultElement.innerHTML = `
                <img src="${movie.Poster}" alt="Poster">
                <h3>Title: ${movie.Title}</h3>
                <p>Type: ${movie.Type}</p>
                <p>Release: ${movie.Year}</p>
                <p>id: ${movie.imdbID}</p> `;
            resultdiv.appendChild(resultElement);
        });
       
    }else{
        resultdiv.innerHTML = 'No movies found';
    }
}