const clsFib = require('../logiclayer/clsfibonacci');

describe('Test Fib',()=>{
    it("Test Fib Function",()=>{
        let fibLenght=5;
        const objfib = new clsFib(fibLenght);
        const fibresult = objfib.fibCalculate();
        var fibArray =[];
        for(let i = 0 ; i<fibLenght ; i++){
            fibArray.length === 0 ? fibArray.push(0) :
            fibArray.length === 1 ?  fibArray.push(1) : 
            fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2])
        }
        const r1= fibresult.reduce((a,b)=>  a +b  );
        const r2= fibArray.reduce((a,b)=>  a +b  );
        expect(r1).toBe(r2); 
    })
})