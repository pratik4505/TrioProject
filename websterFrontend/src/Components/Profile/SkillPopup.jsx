import React, { useState } from 'react';
import "../../Sass/Popup.scss"

function SkillPopup() {
  const [skill, setSkill] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = () => {
    console.log('Skill: ' + skill);
    closePopup();
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={openPopup}>
        Add Skill
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content card">
            <h2 className="card-header">Add a Skill</h2>
            <div className="card-body">
              <label htmlFor="skill">Skill:</label>
              <input
                type="text"
                id="skill"
                className="form-control"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
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

export default SkillPopup;
