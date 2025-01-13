import React, { useRef, useEffect } from 'react';
import Bubble from '../components/Bubble';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';
import ShortcutIcon from '@mui/icons-material/ArrowOutward';
import '../Styles/Education.css';

const Education = ({ sectionRefs }) => {
    return (
        <div ref={(el) => (sectionRefs.current["Education"] = el)} id="Education" className="flex flex-col justify-center items-start text-gray-100 px-4 py-4">
            <h2 className="text-xl font-medium mt-2 uppercase border-box">Education</h2>
            <div className="text-start my-4">
                <p className="text-sm text-gray-400">2018-2023</p>
                <h2 className="">
                    <Tooltip title="University Link">
                        <Link
                            href="https://www.byui.edu"
                            target="_blank"
                            rel="noopener"
                            underline="none"
                        >
                            <p className="text-gray-100">Bachelor of Science - Software Engineering
                                <ShortcutIcon fontSize="small" sx={{
                                    color: 'white',
                                    '&:hover': { color: 'lightgray' }
                                }} />
                            </p>
                        </Link>
                    </Tooltip>
                    <div className="text-start text-lightgray">
                        Brigham Young University - Idaho
                    </div>
                    <div className="text-start text-lightgray italic-script">
                        GPA 3.97, Magna Cum Laude
                    </div>
                    <div className="mt-2 mb-2 flex flex-wrap">
                        <Bubble text="Java" />
                        <Bubble text="Python" />
                        <Bubble text="C++" />
                        <Bubble text="SQL" />
                        <Bubble text="MySQL" />
                        <Bubble text="Postman" />
                        <Bubble text="Object Oriented Programming" />
                        <Bubble text="Data Structures and Algorithms" />
                        <Bubble text="Machine Learning" />
                    </div>
                </h2>
            </div>
        </div>
    );
};

export default Education;