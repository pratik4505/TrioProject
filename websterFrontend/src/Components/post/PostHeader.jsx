


import React from 'react';
import './postHeader.scss'; 
const baseUrl = 'http://localhost:3000';
const PostHeader = (props) => {
  return (
    <div className="post-header-container">
      <div className="left">
       {props.imageUrl&&<img src={`${baseUrl}${props.imageUrl}`} alt="Profile" className="profile-image" />}
      </div>
      <div className="right">
        <div className="name">{props.name}</div>
        
        <div className="industry">{props.industry}</div>
      </div>
    </div>
  );
};

export default PostHeader;
