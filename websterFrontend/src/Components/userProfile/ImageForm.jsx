import React, { useState } from 'react';
import "../../sass/Popup.scss";

const baseUrl = "http://localhost:3000";
export default function ImageForm(props) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch(`${baseUrl}/profile/addProfileImage`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${props.jwtToken}`,
        },
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        props.imageHandler(responseData.imageUrl);
      } else {
        console.error("Failed to upload profile image");
      }
    } catch (error) {
      console.error("An error occurred while uploading profile image:", error);
    }
    props.cancel();
  };

  const closePopup = () => {
    props.cancel();
  };

  return (
    <div className="popup">
      <div className="popup-content card">
        <h2 className="card-header">Update Profile Image</h2>
        <div className="card-body">
          <label htmlFor="imageInput">Select Image:</label>
          <input
            type="file"
            id="imageInput"
            className="form-control"
            onChange={handleImageChange}
          />
          <br />
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn btn-secondary" onClick={closePopup}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
