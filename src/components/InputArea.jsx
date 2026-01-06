import WorkExperienceList from './WorkExperienceList';
import EducationList from './EducationList';

const InputArea = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'work-experience':
        return <WorkExperienceList />;
      case 'education':
        return <EducationList />;
      case 'projects':
        return <div>Projects coming soon...</div>;
      case 'skills':
        return <div>Skills coming soon...</div>;
      case 'achievements':
        return <div>Achievements coming soon...</div>;
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

