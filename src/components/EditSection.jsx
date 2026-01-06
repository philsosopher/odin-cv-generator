import { useState } from 'react';
import Tabs from './Tabs';
import InputArea from './InputArea';

const EditSection = () => {
    const [activeTab, setActiveTab] = useState('work-experience');

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="edit-section">
            <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
            <InputArea activeTab={activeTab} />
        </div>
    );
}

export default EditSection;