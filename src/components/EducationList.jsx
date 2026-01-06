import { useState } from 'react';
import EducationItem from './EducationItem';

const EducationList = () => {
  const [educationItems, setEducationItems] = useState([]);

  const addEducationItem = () => {
    const newItem = {
      id: crypto.randomUUID(),
      institute: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
      grade: '',
    };
    setEducationItems([...educationItems, newItem]);
  };

  const updateEducationItem = (id, updatedItem) => {
    setEducationItems(educationItems.map((item) => item.id === id ? updatedItem : item));
  };

  const deleteEducationItem = (id) => {
    setEducationItems(educationItems.filter((item) => item.id !== id));
  };

  return (
    <div className="education-list">
      {educationItems.map((item) => (
        <EducationItem
          key={item.id}
          item={item}
          onDelete={deleteEducationItem}
          onUpdate={updateEducationItem}
        />
      ))}
      <button className="add-btn" onClick={addEducationItem}>
        + Add Education
      </button>
      {/* TEMP: Display current array for debugging */}
      <div style={{ marginTop: "2rem", background: "#222", color: "#fff", borderRadius: "8px", padding: "1rem" }}>
        <strong>DEBUG: educationItems array</strong>
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
          {JSON.stringify(educationItems, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default EducationList;

