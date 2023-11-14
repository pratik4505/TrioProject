import React, { useState, useEffect,useContext} from "react";
import "../../sass/ProfileDesign.scss";
import AboutForm from "./AboutForm";
import DetailForm from "./DetailForm";
import getJwtTokenFromCookie from "../../utils/cookieData";
import EducationContainer from "./EducationContainer";
import ExperienceContainer from "./ExperienceContainer";
import AddSkillPopup from "./AddSkillPopup";
import {v4 as uuidv4} from "uuid";
import ImageForm from "./ImageForm";
import SectionPopup from "./SectionPopup";
import GlobalContext from "../../context/GlobalContext";

let jwtToken;

const baseUrl = "http://localhost:3000";
export default function UserProfile(props) {
  const [profileData, setProfileData] = useState(null);
  const [detailPopup, setDetailPopup] = useState(false);
  const [aboutPopup, setAboutPopup] = useState(false);
  const [skillPopup, setSkillPopup] = useState(false);
  const [imagePopup, setImagePopup] = useState(false);
  const [sectionPopup, setSectionPopup] = useState(false);

  const gloContext=useContext(GlobalContext);


  const initialLoad = async () => {
    try {
      const { ownerId } = props;

      const response = await fetch(
        `${baseUrl}/profile/getUserProfile/${ownerId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
      } else {
        console.error("Failed to fetch user profile data");
      }
    } catch (error) {
      console.error(
        "An error occurred while fetching user profile data:",
        error
      );
    }
  };

  useEffect(() => {
    jwtToken = getJwtTokenFromCookie();
    initialLoad();
  }, []);


  const detailFinish = async (data) => {
    setDetailPopup(false);
    setProfileData((prevData) => ({
      ...prevData,
      userName: data.userName,
      summary: data.summary,
      industry: data.industry,
      location: data.location,
    }));

    try {
      const response = await fetch(`${baseUrl}/profile/postDetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Details updated successfully");
      } else {
        console.error("Failed to update details");
      }
    } catch (error) {
      console.error("An error occurred while updating details:", error);
    }
  };

  const aboutFinish = async (data) => {
    setAboutPopup(false);
    setProfileData((prevData) => ({
      ...prevData,
      about: data.about,
    }));

    try {
      const response = await fetch(`${baseUrl}/profile/postAbout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("About updated successfully");
      } else {
        console.error("Failed to update about");
      }
    } catch (error) {
      console.error("An error occurred while updating about:", error);
    }
  };

  const expUpdater = (exp) => {
    setProfileData((prev) => {
      return { ...prev, experience: exp };
    });
  };
  const eduUpdater = (edu) => {
    setProfileData((prev) => {
      return { ...prev, eduaction: edu };
    });
  };

  const onDeleteSkill = async (key) => {
    // Remove the skill from the local state
    const updatedSkills = { ...profileData.skills };
    delete updatedSkills[key];
    setProfileData((prevData) => ({ ...prevData, skills: updatedSkills }));

    try {
      // Send the key to the server to delete the skill
      const response = await fetch(`${baseUrl}/profile/deleteSkill/${key}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (response.ok) {
        console.log("Skill deleted successfully");
      } else {
        console.error("Failed to delete skill");
      }
    } catch (error) {
      console.error("An error occurred while deleting skill:", error);
    }
  };

  const onEndorse = async (key, isEndorsed, recommendation) => {
    // Update the local state based on the endorsement action
    const updatedSkills = { ...profileData.skills };
    const skill = updatedSkills[key];

    if (isEndorsed) {
      // If endorsing, increase endorsementCount by one and set hasEndorsed to true
      skill.endorsementCount += 1;
      skill.hasEndorsed = true;
    } else {
      // If unendorsing, decrease endorsementCount by one and set hasEndorsed to false
      skill.endorsementCount -= 1;
      skill.hasEndorsed = false;
    }

    // Update the local state with the modified skill
    setProfileData((prevData) => ({
      ...prevData,
      skills: {
        ...prevData.skills,
        [key]: skill,
      },
    }));

    try {
      // Send the endorsement data to the server
      const response = await fetch(`${baseUrl}/profile/endorse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({
          ownerId: props.ownerId,
          key,
          isEndorsed,
          recommendation,
        }),
      });

      if (response.ok) {
        console.log("Endorsement updated successfully");

        gloContext.socket.emit("endorsement",{to:props.ownerId,skill:skill.skill,recommendation});

      } else {
        console.error("Failed to update endorsement");
      }
    } catch (error) {
      console.error("An error occurred while updating endorsement:", error);
    }
  };

  const onAddSkill = async (value) => {
    // Generate a new UUID for the skill
    const skillId = uuidv4();

    // Create a new skill object
    const newSkill = {
      skill: value,
      endorsementCount: 0,
      hasEndorsed: false,
    };

    // Update the profileData with the new skill
    setProfileData((prevData) => ({
      ...prevData,
      skills: {
        ...prevData.skills,
        [skillId]: newSkill,
      },
    }));

    // Make a POST request to update the skill on the server
    try {
      const response = await fetch(`${baseUrl}/profile/addSkill`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ skillId, skill: value }),
      });

      if (response.ok) {
        console.log("Skill added successfully");
      } else {
        console.error("Failed to add skill");
      }
    } catch (error) {
      console.error("An error occurred while adding skill:", error);
    }

    // Close the skill popup
    setSkillPopup(false);
  };

  const SectionAdder = async (data) => {
    const id = uuid();
  
    // Add the new section to profileData.moreSections
    setProfileData((prevData) => ({
      ...prevData,
      moreSections: [
        ...(prevData.moreSections || []),
        { id, data },
      ],
    }));
  
    // Send the id and data to the 'profile/addSection' endpoint
    try {
      const response = await fetch(`${baseUrl}/profile/addSection`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ id, data }),
      });
  
      if (response.ok) {
        console.log('Section added successfully');
      } else {
        console.error('Failed to add section');
      }
    } catch (error) {
      console.error('An error occurred while adding section:', error);
    }
  };
  

  const sectionDelete = async (e) => {
    const key = e.target.id;
  
    
    const updatedSections = { ...profileData.moreSections };
    delete updatedSections[key];

    setProfileData((prevData) => ({
      ...prevData,
      moreSections: updatedSections,
    }));
   
  
    try {
      // Make a delete request to the server
      await fetch(`/profile/deleteSection/${key}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
      });
  
      console.log(`Section with key ${key} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting section:', error);
    }
  };
  
  
  
  
  
  

  return (
    profileData && (
      <div className="full-body">
        <div className="info">
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-picture">
                  <img
                    src={`${baseUrl}${profileData.imageUrl}`}
                    alt="Profile Picture"
                    className="img-fluid rounded-circle"
                  />
                </div>
                {profile.isOwner &&imagePopup&& (
                  <button onClick={() => setImagePopup(true)}>
                    Update image
                  </button>
                )}
                {profile.isOwner && imagePopup&&(
                  <ImageForm
                    jwtToken={jwtToken}
                    onCancel={() => setImagePopup(false)}
                    imageHandler={(url) =>
                      setProfileData((prev) => ({
                        ...prev,
                        imageUrl: `${baseUrl}/${url}`,
                      }))
                    }
                  />
                )}
              </div>

              <div className="col-md-8">
                {profile.isOwner && (
                  <button onClick={setDetailPopup(true)}> update details</button>
                )}
                <h1>{profileData.userName}</h1>
                <p>{profileData.summary}</p>
                <p>{`${profileData.industry}`}</p>
                <p>{profileData.location}</p>
                <p>{`${profileData.connectionCount} connections`}</p>
              </div>
              {detailPopup && (
                <DetailForm
                  deatilHandler={detailFinish}
                  data={{
                    userName: profileData.userName,
                    summary: profileData.summary,
                    industry: profileData.industry,
                    location: profileData.location,
                  }}
                  cancel={()=>setDetailPopup(false)}
                />
              )}
            </div>

            <hr></hr>

            <div className="row mt-4">
              {profile.isOwner && (
                <button onClick={() => setAboutPopup(true)}>
                  update About
                </button>
              )}
              <div className="col-md-12">
                <h2>About</h2>

                <p>{profileData.about}</p>
              </div>
              {aboutPopup && (
                <AboutForm
                  aboutHandler={aboutFinish}
                  data={profileData.about}
                  cancel={() => setAboutPopup(false)}
                />
              )}
            </div>

            <hr></hr>

            <EducationContainer
              data={profileData.education}
              jwtToken={jwtToken}
              isOwner={profileData.isOwner}
              eduUpdater={eduUpdater}
            />

            <hr></hr>

            <ExperienceContainer
              data={profileData.experience}
              jwtToken={jwtToken}
              isOwner={profileData.isOwner}
              expUpdater={expUpdater}
            />

            <hr></hr>

            <div className="container mt-3">
              <div className="experience-header-profile">
                <h1>Skills</h1>
                {profile.isOwner && (
                  <button onClick={() => setSkillPopup(true)} className="add">
                    Add skill{" "}
                  </button>
                )}
                {skillPopup && (
                  <AddSkillPopup
                    onCancel={() => setSkillPopup(false)}
                    onSubmit={onAddSkill}
                  />
                )}
                {Object.entries(profileData.skills).map(([key, value]) => (
                  <Skill
                    key={key}
                    data={value}
                    onEndorse={onEndorse}
                    onDelete={onDeleteSkill}
                    isOwner={profileData.isOwner}
                    isConnection={profileData.isConnection}
                  />
                ))}
              </div>
            </div>

            <hr></hr>

            <div className="subcontainer">
              <button className="add" />
              {profileData.moreSections &&
                Object.entries(profileData.moreSections).map(([key, value]) => (
                  <div id={key} className="container mt-3">
                    <h2>{value.title}</h2>
                    <div className="experience-header-profile">
                      {value.description}
                    </div>
                    <button id={key} onClick={sectionDelete}>Delete section</button>
                  </div>
                ))}
              {profileData.isOwner&&<button onClick={()=>setSectionPopup(true)} >Add section</button>}
              {sectionPopup&&<SectionPopup onCancel={()=>setSectionPopup(false)} onSubmit={SectionAdder} />}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
