function fetchdata(){
    let y =fetch("https://jsonplaceholder.typicode.com/todos/1");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let k= true;
            
            if(k){
                resolve(y);
            }else{
                reject("An Error is happened!");
            }
        },1000);
    })
}
function changetojson(Data){
    const data = Data.json();
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let k= true;
            
            if(k){
                resolve(data);
            }else{
                reject("An Error is happened!");
            }
        },1000);
    })
}

fetchdata()
    .then(Data=> {
      return  changetojson(Data);
    })
    .then(data => {
      console.log(data); 
    })
    .catch(error => {
      console.log(error);
    });

