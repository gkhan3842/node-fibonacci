class clsFibonacci{
    constructor(fibLenght){
        this.fibLenght = fibLenght;
    }
    fibCalculate = ()=> {
       var fibArray =[];
       for(let i = 0 ; i<this.fibLenght ; i++){
        fibArray.length === 0 ? fibArray.push(0) :
        fibArray.length === 1 ?  fibArray.push(1) : 
        fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2])
       }
       return fibArray
    }
    
}
module.exports = clsFibonacci;
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34