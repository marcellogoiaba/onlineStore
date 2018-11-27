const express = require('express');
const passport = require('passport');
const app = express();
const cors = require('cors');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./api/routes/users');
const productRoutes = require('./api/routes/products');

mongoose.connect("mongodb://localhost:27017/templateApp", { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',  () => {
  console.log('connected with mongodb');
});
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/users', userRoutes);
app.use('/products', productRoutes);



const port = 3000 
app.listen(port, () =>{
  console.log('Server app started on port', port);
})
