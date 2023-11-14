import React from 'react'

export default function AddSkillPopup() {
    const [skill, setSkill] = useState('');

    const handleAboutChange = (e) => {
      setSkill(e.target.value);
    };
  
    const handleSubmit = () => {
      if(skill){
        props.onSubmit(skill);
      }
    };
  
   
  return (
    <div className="popup">
    <div className="popup-content card">
      <h2 className="card-header">Tell about yourself</h2>
      <div className="card-body">
        <label htmlFor="skill">Enter Skill:</label>
        <input
          type="text"
          id="skill"
          className="form-control"
          value={skill}
          onChange={handleAboutChange}
          required
        />
        <br />
       
      </div>
      <div className="card-footer">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-secondary" onClick={()=>props.onCancel()}>
          Cancel
        </button>
      </div>
    </div>
  </div>
  )
}
