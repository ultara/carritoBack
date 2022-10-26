const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

// BB DD
mongoose.connect(process.env.DB_URL ,{
    useUnifiedTopology: true
});

const db = mongoose.connection
db.on('error',(error)=> console.log(error));
db.once('open',()=> console.log('Conectado a BB.DD'))


//Import Routes
const itemsRoutes = require('./routes/items')
const imgRoutes = require('./routes/img')

//Middleware
app.use(cors())
app.use(express.json())

app.use('/items', itemsRoutes)
app.use('/img', imgRoutes)

// Rutas
app.get('/',(req, res) =>{
    res.send('Home!');
})
// Items

// Start
app.listen('3000');