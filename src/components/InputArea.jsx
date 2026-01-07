import WorkExperienceList from './WorkExperienceList';
import EducationList from './EducationList';
import PersonalDetails from './PersonalDetails';

const InputArea = ({ activeTab, personalDetails, onPersonalDetailsUpdate }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'personal-details':
        return (
          <PersonalDetails
            personalDetails={personalDetails}
            onUpdate={onPersonalDetailsUpdate}
          />
        );
      case 'work-experience':
        return <WorkExperienceList />;
      case 'education':
        return <EducationList />;
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

