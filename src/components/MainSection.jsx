import { useState } from 'react';
import EditSection from './EditSection';
import PreviewSection from './PreviewSection';

const MainSection = () => {

    const [cvDetails, setCvDetails] = useState({
        personalDetails: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            linkedin: '',
            github: '',
        },
        workExperience: [],
        education: [],
        skills: {
            languages: [],
            frameworksAndTools: [],
        }
    });


    return (
        <div className="main-section">
            <EditSection cvDetails={cvDetails} setCvDetails={setCvDetails} />
            <PreviewSection cvDetails={cvDetails} />
        </div>
    );
}

export default MainSection;