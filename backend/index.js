// app.js or index.js
const express = require('express');
const mongoose = require('mongoose');
const visitorRouter = require('./routes/visitor');
const cors=require("cors")
const app = express();


app.use(cors())
mongoose.connect('mongodb+srv://nkumawat34:nkumawat34@cluster0.6msxxm4.mongodb.net/Portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', visitorRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
