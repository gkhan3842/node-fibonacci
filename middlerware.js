const error = (req,res,next)=>{
    if(isNaN(req.params.id)){
        next("Input must be an integer . Your End poing like http://localhost:3000/api/fib/3")
    }
    next();
}
module.exports = error;