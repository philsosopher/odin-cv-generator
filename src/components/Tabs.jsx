const Tabs = ({ activeTab, onTabChange }) => {
    const tabs = [
        { id: 'personal-details', label: 'Personal Details' },
        { id: 'work-experience', label: 'Work Experience' },
        { id: 'education', label: 'Education' },
        { id: 'skills', label: 'Skills' },
    ];

    return (
        <div className="tabs">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={activeTab === tab.id ? 'active' : ''}
                    onClick={() => onTabChange(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}

export default Tabs;