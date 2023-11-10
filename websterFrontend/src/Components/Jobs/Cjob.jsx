import React from 'react';
import './cjob.scss'; 

const Job = ({ jobTitle, company, location, hasApplied, imageUrl, industry, description, skillsRequired }) => {
  const handleApply = () => {
    
  };

  return (
    <div className="job-container">
      <div className="job-header">
        <img className="job-image" src={`http://localhost:3000/${imageUrl}`} alt="Job" />
        <div className="job-title">{jobTitle}</div>
      </div>
      <div className="job-details">
        <div className="job-info">
          <div className="job-company">{company}</div>
          <div className="job-location">{location}</div>
        </div>
        <div className="job-industry">{industry}</div>
      </div>
      <div className="job-description">{description}</div>
      <div className="job-skills">
        Skills Required: {skillsRequired.join(', ')}
      </div>
      <button
        className={`apply-button ${hasApplied ? 'applied' : ''}`}
        onClick={handleApply}
        disabled={hasApplied}
      >
        {hasApplied ? 'Applied' : 'Apply Now'}
      </button>
    </div>
  );
};

export default Job;
