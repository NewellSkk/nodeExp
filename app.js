const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')



const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const port = 8000
const app = express()

//CONFIGURE TEMPLATING ENGINE
app.set('view engine','pug')
//CONFIGURE VIEWS FOLDER PATH
app.set('views','views')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))//serving statically

app.use('/admin',adminData.routes)

app.use(shopRoutes)
 
app.use((req,res,next)=>{
    res.status(404).render("404",{pageTitle:"Page Not Found"})
});
app.listen(8000,()=>{console.log(`server1 listening on port ${port}`)})