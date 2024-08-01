document.getElementById('button').addEventListener('click', startTimer);
function startTimer(){
    const input = document.getElementById("timerInput")
    let time = parseInt(input.value);

    if(time <=0 || isNaN(time)){
        alert("please Enter the valid input");
        return;
    } 
    const display = document.getElementById("timerDisplay");
    display.textContent = time;
    let interval = setInterval(()=>{
        time--;
        display.textContent = time;

        if(time<=0){
            clearInterval(interval);
            alert("Time is Up!")
        }
    },1000)
}

