"use strict"

const express= require('express')
const app=express()

require('dotenv').config()
const PORT = process.env.PORT || 8000

/*-----------------------------------------------------------------*/
//? Read json data 
app.use(express.json())   //body icindeki json verileri alabiliyor hale geldi

//? Read text data 
app.use(express.text())   //body icindeki text verileri alabiliyor hale geldi


//? Read Form data
app.use(express.urlencoded({extended:true}))


//? statik dosyalara erisim saglar
app.use('/img', express.static('./public/images'))



app.all('/', (req, res)=>{
    
    res.send({
        received:true,
        body:req.body})
})


app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));