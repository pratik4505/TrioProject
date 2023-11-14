import React from 'react'
import "../../sass/Popup.scss"
export default function AboutForm(props) {
    const [about, setAbout] = useState(data.about);

    const handleAboutChange = (e) => {
      setAbout(e.target.value);
    };
  
    const handleSubmit = () => {
      props.aboutHandler(about);
    };
  
    const closePopup = () => {
      cancel();
    };
  return (
    <div className="popup">
    <div className="popup-content card">
      <h2 className="card-header">Tell about yourself</h2>
      <div className="card-body">
        <label htmlFor="About">About:</label>
        <textarea
          type="text"
          id="About"
          className="form-control"
          value={about}
          onChange={handleAboutChange}
          required
        />
        <br />
       
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
  )
}
