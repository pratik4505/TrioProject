import React, { useState } from 'react';
import "../../Sass/Popup.scss"

function Experience() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = () => {
    console.log('Title: ' + formData.title);
    console.log('Description: ' + formData.description);
    console.log('Start Date: ' + formData.startDate);
    console.log('End Date: ' + formData.endDate);
    closePopup();
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={openPopup}>
        Add experience
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content card">
            <h2 className="card-header">Enter Experience details</h2>
            <div className="card-body">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
              <br />
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                className="form-control"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
              />
              <br />
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                className="form-control"
                value={formData.startDate}
                onChange={handleInputChange}
              />
              <br />
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                className="form-control"
                value={formData.endDate}
                onChange={handleInputChange}
              />
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
      )}
    </div>
  );
}

export default Experience;
