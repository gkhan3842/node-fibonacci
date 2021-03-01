const express = require('express');
const route = express.Router();
const errmw = require('../middlerware');
const clsFib = require('../logiclayer/clsfibonacci');

route.get("/:id",errmw,(req,res,next)=>{
    var objFib = new clsFib(req.params.id);
    res.status(200).send(objFib.fibCalculate());
    res.end();
})

module.exports = route;