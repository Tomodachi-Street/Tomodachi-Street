import React, { useState, useEffect } from 'react';
import '../Styles/Certifications.css';

const Certifications =  ({ sectionRefs }) => {
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        // Create Dynamic List for All Current and Future Certifications
        let userInfo = 'AZ-900 – Azure Fundamentals, Microsoft (Sep 2023 – Present) ||';
        let charArry = userInfo.split('||').filter(Boolean); // Filter out empty strings
        setCertifications(charArry);
    }, []);

    return (
        <div ref={(el) => (sectionRefs.current["Certifications"] = el)} id="Certifications" className="flex flex-col items-start text-gray-100 px-4 py-4">
            <h2 className="text-overlay text-xl font-medium uppercase border-box">Certifications</h2>
            <h3 className="text-overlay text-base mt-4 text-lightgray text-start">
                <ul id="certs">
                    {certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                    ))}
                </ul>
            </h3>
        </div>
    );
};

export default Certifications;