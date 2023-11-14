import fs from 'fs/promises';
const User=require('../../models/user');
export async function getUserProfile(req, res) {
    try {
      const openerId=req.userId;
      const ownerId=req.params.ownerId;
  
      
      const userProfile = await User.findById(ownerId)
        .select('userName summary industry about location connections imageUrl experience moreSections skills education')
        .exec();
  
      if (!userProfile) {
        return res.status(404).json({ message: 'User not found' });
      }
  
     
      const isOwner = openerId === ownerId;
  
      
      const isConnection = userProfile.connections.includes(openerId);
  
    
      const modifiedSkills = new Map(
        Array.from(userProfile.skills, ([skillId, skill]) => [
            skillId,
            {
                skill: skill.skill,
                endorsementCount: skill.endorses.length,
                hasEndorsed: skill.endorses.some(endorsement => endorsement.endorsedBy.equals(openerId)),
            },
        ])
    );
    
  
    
      const connectionCount = userProfile.connections.length;
  
     
      const responseData = {
        isOwner,
        isConnection,
        userName: userProfile.userName,
        summary: userProfile.summary,
        industry: userProfile.industry,
        about: userProfile.about,
        location: userProfile.location,
        connectionCount,
        imageUrl: userProfile.imageUrl,
        experience: userProfile.experience,
        moreSections: userProfile.moreSections,
        skills: modifiedSkills,
        education: userProfile.education
      };
  
      res.status(200).json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while fetching the user profile' });
    }
}

export async function postDetails (req, res) {
  try {
    const { userName, summary, location, industry } = req.body;
    const userId = req.userId; 

   
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

   
    user.userName = userName || user.userName;
    user.summary = summary || user.summary;
    user.location = location || user.location;
    user.industry = industry || user.industry;

    
    const updatedUser = await user.save();

    
    res.status(200).json({
      message: 'User details updated successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating user details' });
  }
}

export async function postAbout (req, res){
  try {
    const userId = req.userId;
    const { about } = req.body;

    // Update the user's "About" section
    await User.findByIdAndUpdate(userId, { about });

    res.status(200).json({ message: 'About updated successfully' });
  } catch (error) {
    console.error('Error updating about:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export  async function postEducation(req, res)  {
  try {
    const userId = req.userId;
    const educationId = req.params.educationId;

    const user = await User.findById(userId).select('education');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

   
    const existingEducation = user.education.get(educationId);

      let response;

    if (existingEducation) {
      
      if (existingEducation.imageUrl) {
        await fs.unlink(existingEducation.imageUrl);
      }
      existingEducation.imageUrl = req.files['image'][0].path;
      existingEducation.place = req.body.place;
      existingEducation.degree = req.body.degree;
      existingEducation.startDate = req.body.startDate;
      existingEducation.endDate = req.body.endDate;
      response = { [educationId]: existingEducation };
    } else {
      
      user.education.set(educationId, {
        imageUrl: req.files['image'][0].path,
        place: req.body.place,
        degree: req.body.degree,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
      });
      response = { [educationId]: user.education[educationId] };
    }

    await user.save();

    res.status(200).json(response);
  } catch (error) {
  
    res.status(500).json({ message: 'Internal server error' });
  }
};

export async function postExperience(req, res) {
  try {
    const userId = req.userId;
    const experienceId = req.params.experienceId;

    const user = await User.findById(userId).select('experience');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const existingExperience = user.experience.get(experienceId);

    const clearImage = async filePath => {
      filePath = path.join(__dirname, '..', filePath);
     await fs.unlink(filePath, err => console.log(err));
    };

    let response;

    if (existingExperience) {
   
      if (existingExperience.imageUrl) {
        clearImage(existingExperience.imageUrl);
      }
      
      

    
      existingExperience.imageUrl = req.files['image'][0].path;
      existingExperience.title = req.body.title;
      existingExperience.description = req.body.description;
      existingExperience.startDate = req.body.startDate;
      existingExperience.endDate = req.body.endDate;
      response = { [experienceId]: existingExperience };
    } else {
    
      user.experience.set(experienceId, {
        imageUrl: req.files['image'][0].path,
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
      });
      response = { [experienceId]: user.experience[experienceId] };
    }

    await user.save();

    res.status(200).json(response);
  } catch (error) {
    console.error('An error occurred while updating experience details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export async function addSkill  (req, res) {
  try {
    const userId = req.userId; // Assuming you have middleware to extract user ID from the token
    const { skillId, skill } = req.body;

    // Find the user by ID
    const user = await User.findById(userId).select('skills');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the skills map with the new skill
    user.skills.set(skillId, {
      skill,
      endorses: [],
    });

    // Save the updated user object
    await user.save();

    res.status(200).json({ message: 'Skill added successfully' });
  } catch (error) {
    console.error('An error occurred while adding skill:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function deleteSkill (req, res)  {
  try {
    const userId = req.userId; // Assuming you have middleware to extract user ID from the token
    const { key } = req.params;

    // Find the user by ID
    const user = await User.findById(userId).select('skills');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove the skill with the specified key from the skills map
    user.skills.delete(key);

    // Save the updated user object
    await user.save();

    res.status(200).json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error('An error occurred while deleting skill:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


export async function endorse(req, res)  {
  try {
    const userId = req.userId; // Assuming you have middleware to extract user ID from the token
    const { ownerId, key, isEndorsed, recommendation } = req.body;

    // Find the owner user by ID
    const owner = await User.findById(ownerId).select('skills');

    if (!owner) {
      return res.status(404).json({ message: 'Owner user not found' });
    }

    // Find the skill in the owner's skills map
    const ownerSkill = owner.skills.get(key);

    if (!ownerSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    // Update the endorsements based on the action
    if (isEndorsed) {
      // If endorsing, add a new endorsement object
      ownerSkill.endorses.push({
        endorsedBy: userId,
        recommendation,
      });
    } else {
      // If unendorsing, remove the endorsement object with the matching endorsedBy
      ownerSkill.endorses = ownerSkill.endorses.filter(
        (endorsement) => endorsement.endorsedBy !== userId
      );
    }

    // Update the skill in the owner's skills map
    owner.skills.set(key, ownerSkill);

    // Save the updated owner user object
    await owner.save();

    res.status(200).json({ message: 'Endorsement updated successfully' });
  } catch (error) {
    console.error('An error occurred while updating endorsement:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export async function addProfileImage (req, res)  {
  try {
    // If the file is not present, return an error
    if (!req.file) {
      return res.status(400).json({ message: 'No profile image file provided' });
    }

    // Get the file path
    const imagePath =  req.files['image'][0].path;

    // You may save this imagePath in your database if needed
    const userId = req.userId; // Assuming you have userId in your request, adjust it based on your authentication mechanism

    // Update the user's imageUrl with the new profile image path
    const user = await User.findById(userId).select('imageUrl');

    

    user.imageUrl = imagePath;
    await user.save();

    
   
    res.status(200).json({ imageUrl :imagePath});
  } catch (error) {
    console.error('An error occurred while uploading the profile image:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function addSection (req, res) {
  try {
    const userId = req.userId;
    const { id, data } = req.body;

    // Find the user by userId
    const user = await User.findById(userId).select('moreSections');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Add the new section to moreSections map
    user.moreSections.set(id, data);

    // Save the user with the updated moreSections
    await user.save();

    res.status(200).json({ message: 'Section added successfully' });
  } catch (error) {
    console.error('An error occurred while adding section:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function deleteSection(req, res) {
 
    const userId = req.userId; 
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const keyToDelete = req.params.key;
      delete user.moreSections[keyToDelete];
  
      await user.save();
  
      res.status(200).json({ message: 'Section deleted successfully' });
    } catch (error) {
      console.error('Error deleting section:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  

}