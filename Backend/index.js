
require('dotenv' ).config();
const express=require('express');
const mongoose = require('mongoose');
const HttpError = require('./models/http-error');
const googleAuth=require('./routes/auth/google_auth');
const authRoutes = require('./routes/auth/auth');
const postRoutes=require('./routes/posts/post');
const commentRoutes=require('./routes/posts/comments');
const app =express();
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');
const jobRoutes = require('./routes/job/jobRoutes');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'image') {
      cb(null, path.join(__dirname, 'public', 'images'));
    } else if (file.fieldname === 'video') {
      cb(null, path.join(__dirname, 'public', 'videos'));
    }
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    (file.fieldname === 'image' && (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg')) ||
    (file.fieldname === 'video' && (file.mimetype === 'video/mp4' || file.mimetype === 'video/mpeg'))
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter }).fields([
  { name: 'image', maxCount: 1 }, // Max one image file
  { name: 'video', maxCount: 1 }, // Max one video file
]);


app.use(cookieParser());

app.use(cors());
//app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(upload);
app.use('/public', express.static(path.join(__dirname, 'public')));



// app.use((req,res,next)=>{
//     //these just set headers , do not send response
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Origin','GET,POST,PUT,DELETE,PATCH');
//     res.setHeader('Access-Control-Allow-Origin','Content-Type, Authorization ');
//     next();
// });


app.use(googleAuth);
app.use(authRoutes);
app.use(postRoutes);
app.use(commentRoutes);
app.use(jobRoutes);



app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
  });
  
  app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500);
    if(error.data){
      res.json({ message: error.message || 'An unknown error occurred!',data:error.data });
    }
    else{
    res.json({ message: error.message || 'An unknown error occurred!' });

    }

  });

  mongoose
  .connect(
    process.env.DATABASE_URI
  )
  .then(result => {
    app.listen(3000);
  })
  .catch(err => console.log(err));