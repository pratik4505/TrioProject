/*import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../../Sass/Popup.scss"

function Popup() {
  const nav = useNavigate();
  const [formdata, setFormdata] = useState({ place: '', startDate: '', endDate: '' });
  const [showPopup, setShowPopup] = useState(false);
  

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = () => {
    console.log('place: ' + formdata.place);
    console.log('Start date: ' + formdata.startDate);
    console.log('End date: ' + formdata.endDate);

    closePopup();
    
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={openPopup}>
        Add Education
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content card">
            <h2 className="card-header">Add your Education</h2>
            <div className="card-body">
              <label htmlFor="School">School:</label>
              <input
                type="text"
                id="place"
                className="form-control"
                value={formdata.School}
                onChange={handleInputChange}
                required
              />
              <br />
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="text"
                id="startDate"
                className="form-control"
                value={formdata.startDate}
                onChange={handleInputChange}
                required
              />
              <br />
              <label htmlFor="endDate">End Date:</label>
              <input
                type="text"
                id="endDate"
                className="form-control"
                value={formdata.endDate}
                onChange={handleInputChange}
                required
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

export default Popup;
*/