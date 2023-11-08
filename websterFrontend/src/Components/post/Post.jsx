import React from "react";
import "./post.css";
import PostHeader from "./PostHeader";
import CommentBox from "./CommentBox";
import LikeBox from "./LikeBox";

const baseUrl = "http://localhost:3000";

const Post = (props) => {
  const [commentOnOff, setCommentOnOff] = React.useState(false);
  const [likesOnOff, setLikesOnOff] = React.useState(false);

  const commentHandler = () => {
    setCommentOnOff((value) => !value);
  };
  const likesHandler = () => {
    setLikesOnOff((value) => !value);
  };

  return (
    <div className="complete_post">
      {!likesOnOff && <div className="fake" />}
      {likesOnOff && <LikeBox />}
      <div className="post-container">
        <PostHeader
          imageUrl={props.postData.profileImageUrl}
          name={props.postData.name}
          id={props.postData.ownerId}
          industry={props.postData.industry}
        />
        <div className="post-content">{props.postData.content}</div>

        {props.postData.postImageUrl && (
          <img
            className="post-image"
            src={`${baseUrl}${props.postData.postImageUrl}`}
            alt="Post Image"
          />
        )}

        {props.postData.videoUrl && (
          <div className="post-video">
            <video controls style={{ width: "100%" }}>
              <source
                src={`${baseUrl}${props.postData.videoUrl}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <div className="like-comment">
          <button
            onClick={likesHandler}
            className={`like-button ${props.postData.hasLiked ? "liked" : ""}`}
          >
            {props.postData.hasLiked
              ? `Likes (${props.postData.likeCount})`
              : `Like (${props.postData.likeCount})`}
          </button>
          <button className="comment-button" onClick={commentHandler}>
            Comment ({props.postData.commentCount})
          </button>
        </div>

        <div className="post-date">{props.postData.createdAt}</div>
      </div>
      {!commentOnOff && <div className="fake" />}
      {commentOnOff && <CommentBox postId={props.postData._id} />}
    </div>
  );
};

export default Post;
