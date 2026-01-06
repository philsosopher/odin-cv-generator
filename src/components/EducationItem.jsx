const EducationItem = ({ item, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleUpdate = (e) => {
    const updatedItem = { ...item, [e.target.name]: e.target.value };
    onUpdate(item.id, updatedItem);
  }

  return (
    <div className="education-item">
      <div className="education-header">
        <h3>Education</h3>
        <button
          className="delete-btn"
          onClick={handleDelete}
          aria-label="Delete education"
        >
          ×
        </button>
      </div>

      <div className="form-group">
        <label>Institute</label>
        <input
          type="text"
          name="institute"
          placeholder="Name of Institute"
          value={item.institute}
          onChange={handleUpdate}
        />
      </div>

      <div className="form-group">
        <label>Degree</label>
        <input
          type="text"
          name="degree"
          placeholder="Degree or Course Name"
          value={item.degree}
          onChange={handleUpdate}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="text"
            name="startDate"
            placeholder="MM/YYYY"
            value={item.startDate}
            onChange={handleUpdate}
          />
        </div>

        <div className="form-group">
          <label>End Date</label>
          <input
            type="text"
            name="endDate"
            placeholder="MM/YYYY or Present"
            value={item.endDate}
            onChange={handleUpdate}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="City, Country"
            value={item.location}
            onChange={handleUpdate}
          />
        </div>

        <div className="form-group">
          <label>Grade/CGPA</label>
          <input
            type="text"
            name="grade"
            placeholder="e.g., 3.8 GPA or 85%"
            value={item.grade}
            onChange={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationItem;

