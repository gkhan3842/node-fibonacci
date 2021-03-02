const express = require('express');
const route = express.Router();
const errmw = require('../middlerware');
const clsFib = require('../logiclayer/clsfibonacci');

route.get("/fibbyparam/:fibNumber",errmw,(req,res,next)=>{
    console.log(req.params.fibNumber)
    var objFib = new clsFib(req.params.fibNumber);
    res.status(200).send(objFib.fibCalculate());
    res.end();
})
route.get("/fibbyquery/",errmw,(req,res,next)=>{
    var objFib = new clsFib(req.query.fibNumber);
    res.status(200).send(objFib.fibCalculate());
    res.end();
})
module.exports = route;