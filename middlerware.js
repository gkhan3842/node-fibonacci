const error = (req,res,next)=>{
    console.log(req.query.fibNumber + isNaN(req.query.fibNumber))
    if(req.params.fibNumber !== undefined && isNaN(req.params.fibNumber)){
        next("Input must be an integer . Your End poing like http://localhost:3000/api/fib/3")
    }
    if(req.query.fibNumber !== undefined && isNaN(req.query.fibNumber)){
        
        next("Input must be an integer . Your End poing like http://localhost:3000/api/fib/3")
    }
    next();
}
module.exports = error;