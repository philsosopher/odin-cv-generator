import WorkExperienceList from './WorkExperienceList';
import EducationList from './EducationList';
import PersonalDetails from './PersonalDetails';

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
        return <div>Skills coming soon...</div>;
      default:
        return <WorkExperienceList />;
    }
  };

  return (
    <div className="input-area">
      {renderContent()}
    </div>
  );
};

export default InputArea;

