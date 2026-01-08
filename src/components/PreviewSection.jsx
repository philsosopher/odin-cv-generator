const PreviewSection = ({ cvDetails }) => {
    const { personalDetails, workExperience, education, skills } = cvDetails;

    return (
        <div className="preview-section">
            <div className="resume-preview">
                {/* Header Section */}
                <header className="resume-header">
                    <h1 className="resume-name">
                        {personalDetails.firstName && personalDetails.lastName
                            ? `${personalDetails.firstName} ${personalDetails.lastName}`.toUpperCase()
                            : 'YOUR NAME'}
                    </h1>
                    <div className="resume-contact">
                        {personalDetails.phone && <span>{personalDetails.phone}</span>}
                        {personalDetails.email && <span>{personalDetails.email}</span>}
                        {personalDetails.linkedin && (
                            <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        )}
                        {personalDetails.github && (
                            <a href={personalDetails.github} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        )}
                    </div>
                </header>

                {/* Education Section */}
                {education && education.length > 0 && (
                    <section className="resume-section">
                        <h2 className="resume-section-title">EDUCATION</h2>
                        <div className="resume-section-content">
                            {education.map((edu) => (
                                <div key={edu.id} className="resume-item">
                                    <div className="resume-item-header">
                                        <div>
                                            <strong>{edu.institute || 'Institute Name'}</strong>
                                            {edu.location && <span className="resume-location"> - {edu.location}</span>}
                                        </div>
                                        <div className="resume-dates">
                                            {edu.startDate && edu.endDate 
                                                ? `${edu.startDate} - ${edu.endDate}`
                                                : 'Dates'}
                                        </div>
                                    </div>
                                    <div className="resume-item-subheader">
                                        {edu.degree && <em>{edu.degree}</em>}
                                        {edu.grade && <span> - GPA: {edu.grade}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Work Experience Section */}
                {workExperience && workExperience.length > 0 && (
                    <section className="resume-section">
                        <h2 className="resume-section-title">PROFESSIONAL EXPERIENCE</h2>
                        <div className="resume-section-content">
                            {workExperience.map((work) => (
                                <div key={work.id} className="resume-item">
                                    <div className="resume-item-header">
                                        <div>
                                            <strong>{work.company || 'Company Name'}</strong>
                                            {work.location && <span className="resume-location"> - {work.location}</span>}
                                        </div>
                                        <div className="resume-dates">
                                            {work.startDate && work.endDate 
                                                ? `${work.startDate} - ${work.endDate}`
                                                : 'Dates'}
                                        </div>
                                    </div>
                                    <div className="resume-item-subheader">
                                        {work.position && <em>{work.position}</em>}
                                    </div>
                                    {work.description && (
                                        <div className="resume-description">
                                            {work.description.split('\n').map((line, index) => (
                                                line.trim() && <div key={index}>• {line.trim()}</div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Skills Section */}
                {skills && (skills.languages?.length > 0 || skills.frameworksAndTools?.length > 0) && (
                    <section className="resume-section">
                        <h2 className="resume-section-title">SKILLS</h2>
                        <div className="resume-section-content">
                            {skills.languages?.length > 0 && (
                                <div className="resume-skills-row">
                                    <strong>Languages:</strong> {skills.languages.map(s => s.name).join(', ')}
                                </div>
                            )}
                            {skills.frameworksAndTools?.length > 0 && (
                                <div className="resume-skills-row">
                                    <strong>Frameworks & Tools:</strong> {skills.frameworksAndTools.map(s => s.name).join(', ')}
                                </div>
                            )}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}

export default PreviewSection;