function GCF(x,y){
    while(y!== 0){
        var r = x%y;
        x=y;
        y=r;
    }
    return x;
};
console.log(GCF(0,10));