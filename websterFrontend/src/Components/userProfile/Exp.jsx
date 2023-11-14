import React from "react";

const baseUrl = "http://localhost:3000";

export default function Exp(props) {
  function update() {
    props.onUpdate(props.key);
  }

  const end = props.data.endDate ? props.data.endDate : "- present";

  return (
    <div>
      <div className="col-md-3">
        <img
          src={`${baseUrl}${props.data.imageUrl}`}
          alt="Company Logo"
          className="img-fluid"
        />
      </div>
      <div className="col-md-9">
        <h5>{props.data.title}</h5>
        <p>{props.data.description}</p>
        <p>{props.data.startDate}</p>
        <p>{end}</p>
      </div>
      <button onClick={update} />
    </div>
  );
}
