import { useState } from 'react';
import Tabs from './Tabs';
import InputArea from './InputArea';

const EditSection = () => {
    const [activeTab, setActiveTab] = useState('personal-details');
    
    // Personal details state (single object)
    const [personalDetails, setPersonalDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
    });

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const handlePersonalDetailsUpdate = (updatedDetails) => {
        setPersonalDetails(updatedDetails);
    };

    return (
        <div className="edit-section">
            <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
            <InputArea 
                activeTab={activeTab}
                personalDetails={personalDetails}
                onPersonalDetailsUpdate={handlePersonalDetailsUpdate}
            />
        </div>
    );
}

export default EditSection;