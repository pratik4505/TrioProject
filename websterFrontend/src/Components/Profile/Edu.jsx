import React from "react";


export default function Edu(props){
    return(<div>
         <div className="col-md-3">
          <img
            src="https://via.placeholder.com/150"
            alt="University Logo"
            className="img-fluid"
          />
        </div>
        <div className="col-md-9">
          <h5>{props.place}</h5>
          <p>B.tech</p>
          <p>{props.startDate}</p>
          <p>{props.endDate}</p>
        </div>
        </div>
    )
}