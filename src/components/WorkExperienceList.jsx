import WorkExperienceItem from './WorkExperienceItem';

const WorkExperienceList = ({ items, onAdd, onUpdate, onDelete }) => {
  return (
    <div className="work-experience-list">
      {items.map((item) => (
        <WorkExperienceItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
      <button className="add-btn" onClick={onAdd}>
        + Add Work Experience
      </button>
    </div>
  );
};

export default WorkExperienceList;