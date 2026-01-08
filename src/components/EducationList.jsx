import EducationItem from './EducationItem';

const EducationList = ({ items, onAdd, onUpdate, onDelete }) => {
  return (
    <div className="education-list">
      {items.map((item) => (
        <EducationItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
      <button className="add-btn" onClick={onAdd}>
        + Add Education
      </button>
    </div>
  );
};

export default EducationList;

