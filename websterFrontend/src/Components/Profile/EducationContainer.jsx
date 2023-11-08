import React from 'react';
import Popup from './EducationalPopup';
function EducationContainer() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <img
            src="https://via.placeholder.com/150"
            alt="University Logo"
            className="img-fluid"
          />
        </div>
        <div className="col-md-9">
          <h5>University Name</h5>
          <p>Degree Name</p>
          <p>Field Of Study</p>
          <p>Graduation Year</p>
        </div>
         <Popup/>
      </div>
    </div>
  );
}

export default EducationContainer;
