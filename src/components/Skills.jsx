import { useState } from 'react';

const Skills = ({ skills, onAdd, onDelete }) => {
  const [languageInput, setLanguageInput] = useState('');
  const [frameworkInput, setFrameworkInput] = useState('');

  const handleAddLanguage = () => {
    if (languageInput.trim()) {
      onAdd('languages', languageInput.trim());
      setLanguageInput('');
    }
  };

  const handleAddFramework = () => {
    if (frameworkInput.trim()) {
      onAdd('frameworksAndTools', frameworkInput.trim());
      setFrameworkInput('');
    }
  };

  const handleKeyPress = (e, addFunction) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addFunction();
    }
  };

  return (
    <div className="skills">
      <div className="skills-header">
        <h3>Skills</h3>
      </div>

      {/* Languages Section */}
      <div className="skills-category">
        <h4>Languages</h4>
        <div className="skills-input-group">
          <input
            type="text"
            placeholder="e.g., JavaScript, Python, Java"
            value={languageInput}
            onChange={(e) => setLanguageInput(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, handleAddLanguage)}
          />
          <button 
            className="add-skill-btn" 
            onClick={handleAddLanguage}
            type="button"
          >
            Add
          </button>
        </div>
        <div className="skills-tags">
          {skills.languages && skills.languages.map((skill) => (
            <div key={skill.id} className="skill-tag">
              <span>{skill.name}</span>
              <button
                className="remove-skill-btn"
                onClick={() => onDelete('languages', skill.id)}
                aria-label={`Remove ${skill.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks & Tools Section */}
      <div className="skills-category">
        <h4>Frameworks & Tools</h4>
        <div className="skills-input-group">
          <input
            type="text"
            placeholder="e.g., React, Node.js, Docker"
            value={frameworkInput}
            onChange={(e) => setFrameworkInput(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, handleAddFramework)}
          />
          <button 
            className="add-skill-btn" 
            onClick={handleAddFramework}
            type="button"
          >
            Add
          </button>
        </div>
        <div className="skills-tags">
          {skills.frameworksAndTools && skills.frameworksAndTools.map((skill) => (
            <div key={skill.id} className="skill-tag">
              <span>{skill.name}</span>
              <button
                className="remove-skill-btn"
                onClick={() => onDelete('frameworksAndTools', skill.id)}
                aria-label={`Remove ${skill.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* TEMP: Display current object for debugging */}
      <div style={{ marginTop: "2rem", background: "#222", color: "#fff", borderRadius: "8px", padding: "1rem" }}>
        <strong>DEBUG: skills object</strong>
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
          {JSON.stringify(skills, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Skills;

