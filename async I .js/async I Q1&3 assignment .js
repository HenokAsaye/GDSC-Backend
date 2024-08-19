async function fetchdata(){
    try{
    let y = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const l = await y.json();
    console.log(l);
    }catch(error){
        console.log(error);
    }
};
fetchdata()