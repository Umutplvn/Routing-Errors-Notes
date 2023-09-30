const express= require('express')
const app=express()

require('dotenv').config()
const PORT = process.env.PORT || 8000


/*-------------------------------------------------------------*

//! Usage of Router()

app.get("/", (req, res)=>{
    res.send("Welcome")
})

app.get("/about", (req, res)=>res.send("home"))

const router= express.Router()
router.get("/", (req, res)=> {res.send("Home Page")})
router.get("/about", (req, res)=> {res.send("About Page")})

Bu verileri routes klasorunde ayri bir dosyaya tasidik

app.use(require("./routes/"))

/*-------------------------------------------------------------*/

//! To call from another module

app.use("/user", require('./routes/user'))

app.listen(PORT, ()=> console.log("Running: http://127.0.0.1:" + PORT))

/*-------------------------------------------------------------*/







/*-------------------------------------------------------------*/