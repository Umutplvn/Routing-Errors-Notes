"use strict";

const router = require('express').Router()

const routeControl = (req, res, next) =>{
    const {password}=req.query

    if(password=="deneme"){
        next()
    }else{
        res.send("Wrong username or password")
    }
}


router.use(routeControl)    // Bu asamayi gecerse alt kodlarin kontrolune gecilebilir

router.get("/", (req, res)=>{res.send("User Page")})
router.get("/login", (req, res)=>{res.send("Login Page")})
router.get("/logout", (req, res)=>{res.send("Logout Page")})
router.get("/register", (req, res)=>{res.send("Register Page")})

module.exports = router