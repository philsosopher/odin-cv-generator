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
          {JSON.stringify(items, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default WorkExperienceList;