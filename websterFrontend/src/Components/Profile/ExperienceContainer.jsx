import React from 'react';
import Experience from './ExperiencePopup';
function ExperienceContainer() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <div className="company-logo">
            <img
              src="https://via.placeholder.com/150"
              alt="Company Logo"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-9">
          <h5>Job Title</h5>
          <p>Company Name</p>
          <p>Location</p>
          <p>Start Date - End Date</p>
          <p>Job Description</p>
        </div>
        <Experience className="minor"/>
      </div>
    </div>
  );
}

export default ExperienceContainer;
