import React from 'react';

const ResumePage = () => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <object
                src="/Docs/gn_resume_dev.pdf"
                type="application/pdf"
                width="80%"
                height="100%"
            />
        </div>
    );
};

export default ResumePage;