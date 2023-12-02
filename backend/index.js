const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/users');
const cors = require('cors');


// middleware 
app.use(cors());

//routes
app.use('/api/users', userRoutes);



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });


app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });