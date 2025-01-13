import React from 'react';
import '../Styles/Achievements.css';

const Achievements =  ({ sectionRefs }) => {
    return (
        <div ref={(el) => (sectionRefs.current["Achievements"] = el)} id="Achievements" className="flex flex-col justify-center items-start text-gray-100 px-4 py-4">
            <h2 className="text-overlay text-xl font-medium uppercase border-box">Achievements</h2>
            <h3 className="text-overlay text-base mt-4 text-lightgray text-start">
                <ul>
                    <li><strong>Service Excellence Award</strong> – Recognized for outstanding work and exceptional performance, demonstrating a commitment to
                    high-quality software development in a trading systems environment</li>
                    <br></br>
                    <li><strong>Employee of the Year</strong> – Recognized for outstanding work, exceptional
                    performance, and dedication to my job, reflecting strong organizational skills and team collaboration in mission-critical projects</li>
                </ul>
            </h3>
        </div>
    );
};

export default Achievements;