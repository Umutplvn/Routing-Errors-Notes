"use strict"

const express= require('express')
const app=express()

require('dotenv').config()
const PORT = process.env.PORT || 8000

/*-----------------------------------------------------------------*

app.get('/user/:id', (req, res) => {

    const id = req.params.id ?? 0
    if(isNaN(id)){
        res.statusCode=400
        throw new Error("Id is not a number", {cause:'params.id='+id})
    }else{
        res.send({
            error:false,
            id:id})
    }
})


/*-----------------------------------------------------------------*/

//!ASYNC 

const asyncFunction = async () => {
    throw new Error('Created error in async-func')
}

//? Control with catch(next)
app.get('/async', async (req, res, next) => {
    await asyncFunction().catch(next) // Pass to errorHandler()
})



// express-async-handler
// $ npm i express-async-handler

const asyncHandler = require('express-async-handler')

// app.get('/async', asyncHandler(async (req, res, next) => {
//     res.errorStatusCode = 400
//     throw new Error('Created error in async-func')
// }))

// /* ------------------------------------------------------- */
// //? use(errorHandler) kodlamanın en sonunda yer almalı.
// const errorHandler = (err, req, res, next) => {

//     const statusCode = res.errorStatusCode ?? 500

//     console.log('errorHandler runned')

//     res.status(statusCode).send({ 
//         error: true, // special data
//         message: err.message, // Error string Message
//         cause: err.cause, // Error optional cause
//         // stack: err.stack // Error Details.
//     })
// }
// //? for run errorHandler call in use.
// //? It must be at last middleware.
// app.use(errorHandler)

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));