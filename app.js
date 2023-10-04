const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const errorController =  require('./controllers/error')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const port = 8000
const app = express()

//CONFIGURE TEMPLATING ENGINE
app.set('view engine','ejs')
//CONFIGURE VIEWS FOLDER PATH
app.set('views','views')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))//serving statically

app.use('/admin',adminRoutes)

app.use('/',shopRoutes)
 
app.use(errorController.get404);

app.listen(8000,()=>{console.log(`server1 listening on port ${port}`)})