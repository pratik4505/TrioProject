import React from "react";

export default function Exp(props){
    return(
        <div>
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
          <h5>{props.title}</h5>
          <p>Company Name</p>
          <p>Location</p>
          <p>{props.startDate} - {props.endDate}</p>
          <p>{props.description}</p>
        </div>
        </div>
    )
}