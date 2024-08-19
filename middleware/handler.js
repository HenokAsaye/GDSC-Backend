module.exports = (req,res,middlewares)=>{
    let index = 0

    const next = (err)=>{
        if(err){
            return middlewares[middlewares.length-1](err,req,res,next);
        }else if(index > middlewares.length){
            return;
        }
        const middleware = middlewares[index];
        index++;
        try{
            if(middleware.length === 3){
                middleware(req,res,next);
            }else if(middleware.length ==4){
                next();
            }
        }catch(err){
                next(err)
            }
     
    }
 
     next();
}
    