
const Post = require('../../models/post');
const User = require('../../models/user');
const Company = require('../../models/company');

// Define storage locations for images and videos


// Endpoint for adding a post
exports.addPost=async (req, res) => {
  try {
    const { type, ownerId, content } = req.body;

    let imageUrl = undefined;
    let videoUrl = undefined;
   
   
    if(req.files){
        if (req.files['image']) {
            imageUrl = req.files['image'][0].path;
          }
      
          
          if (req.files['video']) {
            videoUrl = req.files['video'][0].path;
          }
      
    }

    // Create a new post
    const newPost = new Post({
      content: content,
      type: type,
      userId: type === 'user' ? ownerId : undefined,
      companyId: type === 'company' ? ownerId : undefined,
      imageUrl: imageUrl,
      videoUrl: videoUrl,
    });

    // Save the new post to the database
    const savedPost = await newPost.save();

    // Update the user or company with the post ID
    if (type === 'user') {
      // Update the user's posts array
      const user = await User.findByIdAndUpdate(ownerId, {
        $push: { posts: savedPost._id },
      });

      return res.status(200).json({ message: 'Post added successfully' });
    } else if (type === 'company') {
      // Update the company's posts array
      const company = await Company.findByIdAndUpdate(ownerId, {
        $push: { posts: savedPost._id },
      });

      return res.status(200).json({ message: 'Post added successfully' });
    } else {
      return res.status(400).json({ message: 'Invalid type specified' });
    }
  } catch (error) {
    
    return res.status(500).json({ message: 'An error occurred while adding the post' });
  }
};


exports.getPost=async (req,res)=>{

    try {
        const postId = req.params.postId;
        const loggedInUserId = req.userId;
    
        // Find the post by its ID
        const post = await Post.findById(postId);
    
        if (!post) {
          return res.status(404).json({ message: 'Post not found' });
        }
    
        // Initialize variables to store user or company details
        let ownerIdData = null;
        let imageUrl = undefined;
        let industry = undefined;
        let name = undefined;
    
        if (post.type === 'user' && post.userId) {
          // If the post type is 'user', fetch user details
          const user = await User.findById(post.userId).select('_id imageUrl industry userName');
          if (user) {
            ownerIdData = user._id;
            imageUrl = user.imageUrl;
            industry = user.industry;
            name = user.userName;
          }
        } else if (post.type === 'company' && post.companyId) {
          // If the post type is 'company', fetch company details
          const company = await Company.findById(post.companyId).select('_id companyLogo industry name');
          if (company) {
            ownerIdData = company._id;
            imageUrl = company.companyLogo;
            industry = company.industry;
            name = company.name;
          }
        }
    
        // Calculate the like count for the post
        const likeCount = post.likedBy.length;
    
        // Calculate the comment count for the post
        const commentCount = post.comments.length;
    
        const user = await User.findById(loggedInUserId);

        
        

        
        let likeType = undefined;

        let hasLiked=false;
        
        if(user){
            hasLiked = user.likedPosts.some((likedPost) => {
                if(likedPost.postId.toString() === postId){
                    likeType=likedPost.likeType;
                    return true;
                }
                
            });
        }

        
        
        
    
        // Construct the response object
        const responseData = {
            postImageUrl: post.imageUrl || undefined,
            videoUrl: post.videoUrl || undefined,
            type: post.type,
            ownerId: ownerIdData,
            likeCount: likeCount,
            commentCount: commentCount,
            hasLiked: hasLiked,
            likeType: likeType,
            profileImageUrl: imageUrl || undefined, // Alias the imageUrl field to profileImageUrl
            name: name,
            industry: industry,
            createdAt: post.createdAt,
            content: post.content,
            _id:post._id
          };
          
        res.status(200).json(responseData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching the post' });
      }
    

};