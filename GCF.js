function GCF(x,y){
    var a = [];
    var h = Math.min(x,y);
    if(x==0 && y!==0){
        return y;
    }else if(x!==0 && y==0){
        return x;
    }else{
        for(var i =1; i<=h;i++){
            if( x% i == 0 && y % i ==0){
                a.push(i);
            }
        }
    }
    return Math.max(...a);

}
console.log(GCF(0,1));
