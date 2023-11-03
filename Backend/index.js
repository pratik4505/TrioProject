

const express=require('express');
const mongoose = require('mongoose');
const HttpError = require('./models/http-error');
const app =express();
const authRoute=require('./routes/auth');

app.use(express.json());

app.use((req,res,next)=>{
    //these just set headers , do not send response
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Origin','GET,POST,PUT,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Origin','Content-Type, Authorization ');
    next();
});



app.use(authRoute);


app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
  });
  
  app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
  });

  mongoose
  .connect(
    'mongodb+srv://pratik4505pn:<password>@cluster0.0rkt5ow.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err));