import { useState } from 'react';
import Tabs from './Tabs';
import InputArea from './InputArea';

const EditSection = ({ cvDetails, setCvDetails }) => {
    const [activeTab, setActiveTab] = useState('personal-details');

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const handlePersonalDetailsUpdate = (updatedDetails) => {
        setCvDetails(prev => ({ ...prev, personalDetails: updatedDetails }));
    };

    const handleWorkExperienceUpdate = (id, updatedItem) => {
        setCvDetails(prev => ({
            ...prev,
            workExperience: prev.workExperience.map((item) => item.id === id ? updatedItem : item)
        }));
    };

    const handleAddWorkExperience = () => {
        const newWorkExperienceItem = {
            id: crypto.randomUUID(),
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            location: '',
            description: '',
        };
        setCvDetails(prev => ({
            ...prev,
            workExperience: [...prev.workExperience, newWorkExperienceItem]
        }));
    };

    const handleDeleteWorkExperience = (workExperienceId) => {
        setCvDetails(prev => ({
            ...prev,
            workExperience: prev.workExperience.filter((workExperience) => workExperience.id !== workExperienceId)
        }));
    };

    const handleUpdateEducation = (id, updatedItem) => {
        setCvDetails(prev => ({
            ...prev,
            education: prev.education.map((item) => item.id === id ? updatedItem : item)
        }));
    };

    const handleAddEducation = () => {
        const newEducationItem = {
            id: crypto.randomUUID(),
            institute: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
            grade: '',
        };
        setCvDetails(prev => ({
            ...prev,
            education: [...prev.education, newEducationItem]
        }));
    };

    const handleDeleteEducation = (educationItemId) => {
        setCvDetails(prev => ({
            ...prev,
            education: prev.education.filter((educationItem) => educationItem.id !== educationItemId)
        }));
    };

    const handleUpdateSkills = (skillCategory, id, updatedSkill) => {
        setCvDetails(prev => ({
            ...prev,
            skills: {
                ...prev.skills,
                [skillCategory]: prev.skills[skillCategory].map((skill) => skill.id === id ? updatedSkill : skill)
            }
        }));
    };

    const handleAddSkills = (skillCategory, skillName) => {
        const newSkillItem = {
            id: crypto.randomUUID(),
            name: skillName,
        };
        setCvDetails(prev => ({
            ...prev,
            skills: {
                ...prev.skills,
                [skillCategory]: [...prev.skills[skillCategory], newSkillItem]
            }
        }));
    };

    const handleDeleteSkills = (skillCategory, skillItemId) => {
        setCvDetails(prev => ({
            ...prev,
            skills: {
                ...prev.skills,
                [skillCategory]: prev.skills[skillCategory].filter((skillItem) => skillItem.id !== skillItemId)
            }
        }));
    };

    return (
        <div className="edit-section">
            <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
            <InputArea 
                activeTab={activeTab}
                personalDetails={cvDetails.personalDetails}
                workExperience={cvDetails.workExperience}
                education={cvDetails.education}
                skills={cvDetails.skills}
                updatePersonalDetails={handlePersonalDetailsUpdate}
                updateWorkExperience={handleWorkExperienceUpdate}
                addWorkExperience={handleAddWorkExperience}
                deleteWorkExperience={handleDeleteWorkExperience}
                updateEducation={handleUpdateEducation}
                addEducation={handleAddEducation}
                deleteEducation={handleDeleteEducation}
                updateSkills={handleUpdateSkills}
                addSkills={handleAddSkills}
                deleteSkills={handleDeleteSkills}
            />
        </div>
    );
}

export default EditSection;