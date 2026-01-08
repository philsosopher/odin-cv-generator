import { useState } from 'react';
import EditSection from './EditSection';
import PreviewSection from './PreviewSection';
import { SAMPLE_CV_DATA, EMPTY_CV_DATA } from '../data/sampleData';

const MainSection = () => {

    const [cvDetails, setCvDetails] = useState(EMPTY_CV_DATA);

    const loadSampleData = () => {
        setCvDetails(SAMPLE_CV_DATA);
    };

    const resetData = () => {
        setCvDetails(EMPTY_CV_DATA);
    };

    return (
        <>
            <div className="action-buttons">
                <button className="demo-btn" onClick={loadSampleData}>
                    Load Demo Data
                </button>
                <button className="reset-btn" onClick={resetData}>
                    Reset
                </button>
            </div>
            <div className="main-section">
                <EditSection cvDetails={cvDetails} setCvDetails={setCvDetails} />
                <PreviewSection cvDetails={cvDetails} />
            </div>
        </>
    );
}

export default MainSection;