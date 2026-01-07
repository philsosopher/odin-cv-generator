import WorkExperienceList from './WorkExperienceList';
import EducationList from './EducationList';

const InputArea = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'personal-details':
        return <div>Personal Details coming soon...</div>;
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

