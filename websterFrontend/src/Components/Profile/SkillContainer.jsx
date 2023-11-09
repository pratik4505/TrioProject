import React from 'react';
import SkillPopup from './SkillPopup';
function SkillContainer() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <div className="skill-icon">
          <img
            src="https://via.placeholder.com/150"
            alt="University Logo"
            className="img-fluid"
          />
            <i className="fas fa-code"></i>
          </div>
        </div>
        <div className="col-md-9">
          <h5>Skill Name</h5>
          <p>Skill Description</p>
          <p>Endorsements: 5</p>
        </div>
        <SkillPopup/>
      </div>
     
    </div>
  );
}

export default SkillContainer;
