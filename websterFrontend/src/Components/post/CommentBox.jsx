import React, { useState, useEffect, useCallback } from "react";
import "./commentBox.css";

import Comment from "./Comment";
import getJwtTokenFromCookie from "../../../utils/cookieData";
const jwtToken = getJwtTokenFromCookie();

const CommentBox = (props) => {
  const [newComment, setNewComment] = useState("");
  const [commentsData, setCommentsData] = useState([]);

  const fetchComments = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/post/getComments/${props.postId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setCommentsData(data.comments);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }, []);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const newCommentHandler = async () => {
    try {
      const newCommentData = {
        content: newComment,
        postID: props.postId,
      };

      const response = await fetch("http://localhost:3000/post/addComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(newCommentData),
      });

      if (response.ok) {
        const newComment = await response.json();

        setCommentsData((prevCommentsData) => [
          newComment,
          ...prevCommentsData,
        ]);

        setNewComment("");
      } else {
        console.error("Error adding comment:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const replyHandler = (newCommentData) => {
    // Find the index of the comment in commentsData
    const commentIndex = commentsData.findIndex(
      (comment) => comment._id === newCommentData._id
    );
  
    if (commentIndex !== -1) {
      // Replace the old comment with the new comment data
      commentsData[commentIndex] = newCommentData;
      setCommentsData([...commentsData]);
    }
  };
  

  return (
    <div className="main_commentBox">
      <div className="comment-input">
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={newCommentHandler}>Add Comment</button>
      </div>

      <div className="comments">
        {commentsData &&
          commentsData.map((commentData) => (
            <Comment
              key={commentData._id}
              commentData={commentData}
              replyHandler={replyHandler}
            />
          ))}
      </div>
    </div>
  );
};

export default CommentBox;
