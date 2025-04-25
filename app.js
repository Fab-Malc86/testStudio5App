const express = require('express')

const app = express()

const port = process.env.PORT || 3000

// Import delle rotte
const routeComm = require('./routes/commerciale')
const routeProd = require('./routes/produzione')

// app.set('views', './views')
app.set('view engine', 'ejs')

app.use(routeComm)
app.use(routeProd)



app.listen(port, () => console.log(`server in ascolto sulla porta ${port}`))