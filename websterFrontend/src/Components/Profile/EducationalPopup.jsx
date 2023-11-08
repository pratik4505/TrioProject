import React, { useState } from 'react';
import "../../Sass/Popup.scss"

function Popup() {
  const [School, setSchool] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate,setEndDate]=useState('')
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = () => {
    console.log('Username: ' + School);
    console.log('Start date: ' + startDate);
    console.log('End date:' + endDate)
    closePopup();
  };

  return (
    <div >
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
                id="School"
                className="form-control"
                value={School}
                onChange={(e) => setSchool(e.target.value)}
                required
              />
              <br />
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="text"
                id="startDate"
                className="form-control"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
              <br />
              <label htmlFor="endDate">End Date:</label>
              <input
                type="text"
                id="endDate"
                className="form-control"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
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
