import React,{ useState } from 'react';
import Edu from './Edu';
import "../../Sass/Popup.scss"
function EducationContainer(props) {
  console.log(props)
  console.log(props.education)
  const add=props.education
  console.log(add,'kk')
    const [squares1,setSquares1]=React.useState(add)
    console.log(squares1,"here")
    const [formdata, setFormdata] = useState({ place: '', 
    startDate: '', 
    endDate: '' 
  }
  );
  const [showPopup, setShowPopup] = useState(false);
  

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = () => {
    props.onDataUpdate(formdata)
    closePopup();
    
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

    const squareElements1 = add.map(square => (
        <Edu 
        place={square.place} 
        startDate={square.startDate}
        endDate={square.endDate}
         />
    ))
  return (
    <div className="container mt-3">
      <div className='education-header-profile'>
      <h1>Education</h1>
      
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
                id="place"
                className="form-control"
                value={formdata.School}
                onChange={handleInputChange}
                required
              />
              <br />
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="text"
                id="startDate"
                className="form-control"
                value={formdata.startDate}
                onChange={handleInputChange}
                required
              />
              <br />
              <label htmlFor="endDate">End Date:</label>
              <input
                type="text"
                id="endDate"
                className="form-control"
                value={formdata.endDate}
                onChange={handleInputChange}
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
      <div className="row scrolling">
        {squareElements1}
      
      </div>
    </div>
  );
}

export default EducationContainer;
