const WorkExperienceItem = ({ item, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleUpdate = (e) => {
    const updatedItem = { ...item, [e.target.name]: e.target.value };
    onUpdate(item.id, updatedItem);
  }

  return (
    <div className="work-experience-item">
      <div className="work-experience-header">
        <h3>Work Experience</h3>
        <button
          className="delete-btn"
          onClick={handleDelete}
          aria-label="Delete work experience"
        >
          ×
        </button>
      </div>

      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company Name"
          value={item.company}
          onChange={handleUpdate}
        />
      </div>

      <div className="form-group">
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          name="position"
          placeholder="Job Title"
          value={item.position}
          onChange={handleUpdate}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            id="startDate"
            name="startDate"
            placeholder="MM/YYYY"
            value={item.startDate}
            onChange={handleUpdate}
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            id="endDate"
            name="endDate"
            placeholder="MM/YYYY or Present"
            value={item.endDate}
            onChange={handleUpdate}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="City, Country"
          value={item.location}
          onChange={handleUpdate}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          placeholder="Describe your responsibilities and achievements..."
          value={item.description}
          onChange={handleUpdate}
        />
      </div>
    </div>
  );
};

export default WorkExperienceItem;