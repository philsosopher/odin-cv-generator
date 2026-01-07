const PersonalDetails = ({ personalDetails, onUpdate }) => {
  const handleUpdate = (e) => {
    const updatedDetails = { ...personalDetails, [e.target.name]: e.target.value };
    onUpdate(updatedDetails);
  };

  return (
    <div className="personal-details">
      <div className="personal-details-header">
        <h3>Personal Details</h3>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="John"
            value={personalDetails.firstName}
            onChange={handleUpdate}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            value={personalDetails.lastName}
            onChange={handleUpdate}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="john.doe@example.com"
            value={personalDetails.email}
            onChange={handleUpdate}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="+1 (555) 123-4567"
            value={personalDetails.phone}
            onChange={handleUpdate}
          />
        </div>
      </div>

      <div className="form-group">
        <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>Social Links</h4>
      </div>

      <div className="form-group">
        <label>LinkedIn</label>
        <input
          type="url"
          name="linkedin"
          placeholder="https://linkedin.com/in/johndoe"
          value={personalDetails.linkedin}
          onChange={handleUpdate}
        />
      </div>

      <div className="form-group">
        <label>GitHub</label>
        <input
          type="url"
          name="github"
          placeholder="https://github.com/johndoe"
          value={personalDetails.github}
          onChange={handleUpdate}
        />
      </div>

      {/* TEMP: Display current object for debugging */}
      <div style={{ marginTop: "2rem", background: "#222", color: "#fff", borderRadius: "8px", padding: "1rem" }}>
        <strong>DEBUG: personalDetails object</strong>
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
          {JSON.stringify(personalDetails, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default PersonalDetails;

