require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://Varuos:BFk2wrpQsQWjnZ4N@ecommerce.qgwidon.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce";

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
