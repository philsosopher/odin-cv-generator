import { useState } from 'react';
import WorkExperienceItem from './WorkExperienceItem';

const WorkExperienceList = () => {
  const [workExperienceItems, setWorkExperienceItems] = useState([]);

  const addWorkExperienceItem = () => {
    const newItem = {
      id: crypto.randomUUID(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    };
    setWorkExperienceItems([...workExperienceItems, newItem]);
  };

  const updateWorkExperienceItem = (id, updatedItem) => {
    setWorkExperienceItems(workExperienceItems.map((item) => item.id === id ? updatedItem : item));
  };

  const deleteWorkExperienceItem = (id) => {
    setWorkExperienceItems(workExperienceItems.filter((item) => item.id !== id));
  };

  return (
    <div className="work-experience-list">
      {workExperienceItems.map((item) => (
        <WorkExperienceItem
          key={item.id}
          item={item}
          onDelete={deleteWorkExperienceItem}
          onUpdate={updateWorkExperienceItem}
        />
      ))}
      <button className="add-btn" onClick={addWorkExperienceItem}>
        + Add Work Experience
      </button>
      {/* TEMP: Display current array for debugging */}
      <div style={{ marginTop: "2rem", background: "#222", color: "#fff", borderRadius: "8px", padding: "1rem" }}>
        <strong>DEBUG: workExperienceItems array</strong>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            fontSize: "0.95rem",
            background: "#111",
            marginTop: "0.5rem",
            padding: "0.5rem",
            borderRadius: "6px"
          }}
        >
          {JSON.stringify(workExperienceItems, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default WorkExperienceList;