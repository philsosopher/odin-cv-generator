import WorkExperienceList from './WorkExperienceList';
import EducationList from './EducationList';
import PersonalDetails from './PersonalDetails';
import Skills from './Skills';

const InputArea = ({ 
  activeTab, 
  personalDetails,
  workExperience,
  education,
  skills,
  updatePersonalDetails,
  updateWorkExperience,
  addWorkExperience,
  deleteWorkExperience,
  updateEducation,
  addEducation,
  deleteEducation,
  updateSkills,
  addSkills,
  deleteSkills
}) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'personal-details':
        return (
          <PersonalDetails
            personalDetails={personalDetails}
            onUpdate={updatePersonalDetails}
          />
        );
      case 'work-experience':
        return (
          <WorkExperienceList 
            items={workExperience}
            onAdd={addWorkExperience}
            onUpdate={updateWorkExperience}
            onDelete={deleteWorkExperience}
          />
        );
      case 'education':
        return (
          <EducationList 
            items={education}
            onAdd={addEducation}
            onUpdate={updateEducation}
            onDelete={deleteEducation}
          />
        );
      case 'skills':
        return (
          <Skills 
            skills={skills}
            onAdd={addSkills}
            onDelete={deleteSkills}
          />
        );
      default:
        return <PersonalDetails personalDetails={personalDetails} onUpdate={updatePersonalDetails} />;
    }
  };

  return (
    <div className="input-area">
      {renderContent()}
    </div>
  );
};

export default InputArea;

