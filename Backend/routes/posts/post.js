const express = require("express");
const router = express.Router();

const postController=require('../../controllers/posts/post');
const isAuth=require('../../controllers/auth/is-auth');




router.post('/addPost',isAuth,postController.addPost);

router.get('/getPost/:postId',postController.getPost);

module.exports = router;