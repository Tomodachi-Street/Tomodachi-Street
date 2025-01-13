import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';
import ShortcutIcon from '@mui/icons-material/ArrowOutward';
import Bubble from '../components/Bubble';
import '../Styles/Experience.css';

const Experience = React.forwardRef((props, ref) => (
    <div ref={ref} id="Experience" className="min-h-screen flex flex-col items-start text-gray-100 px-4 py-4">
        <h2 className="text-xl font-medium mt-2 uppercase py-4 border-box">Experience</h2>
        <div className="text-start my-4">
            <p className="text-sm text-gray-400">Feburary 2024 - Present</p>
            <h2 className="pb-4">
                <Tooltip title="Company Link">
                    <Link
                        href="https://discord.gg/fB2VQyjWP2"
                        target="_blank"
                        rel="noopener"
                        underline="none"
                    >
                        <p className="text-gray-100">CTO | Founder - Tomodachi Street
                            <ShortcutIcon fontSize="small" sx={{
                                color: 'white',
                                '&:hover': { color: 'lightgray' }
                            }} />
                        </p>
                    </Link>
                </Tooltip>
            </h2>
            <div className="text-start text-lightgray">
                Built and scaled a thriving community in the DMV, growing membership to 100+ and
                hosting dynamic events. Spearheaded the development of automated workflows,
                secure MongoDB infrastructure, and a messaging platform integration that boosted
                regional connections by 40%. Designed immersive AV experiences, driving engagement
                and enhancing attendee satisfaction.
            </div>

            <div className="mt-2 mb-2 flex flex-wrap">
                <Bubble text="Java" />
                <Bubble text="MySQL" />
                <Bubble text="JavaScript" />
                <Bubble text="MongoDB" />
                <Bubble text="RESTful APIs" />
                <Bubble text="Microservices" />
                <Bubble text="Authorization" />
                <Bubble text="Authentication" />
                <Bubble text="Data Visualization" />
                <Bubble text="Java Discord API (JDA)" />
                <Bubble text="Springboot" />
                <Bubble text="Spring Frameworks" />
                <Bubble text="HTML" />
            </div>
        </div>

        <div className="text-start my-4">
            <p className="text-sm text-gray-400">May 2023 - January 2024</p>
            <h2 className="pb-4">
                <Tooltip title="Company Link">
                    <Link
                        href="https://animealliance.org"
                        target="_blank"
                        rel="noopener"
                        underline="none"
                    >
                        <p className="text-gray-100">Event Staff - Anime Alliance
                            <ShortcutIcon fontSize="small" sx={{
                                color: 'white',
                                '&:hover': { color: 'lightgray' }
                            }} />
                        </p>
                    </Link>
                </Tooltip>
            </h2>

            <div className="text-start text-lightgray">
                Played a key role in organizing events for 500+ attendees by setting up
                engaging decorations and AV equipment. Ensured safety and security by
                monitoring gaming stations, enforcing entry restrictions, and addressing
                attendee concerns. Supported efficient event operations, including setup and
                teardown, to deliver seamless experiences.
            </div>

            <div className="mt-2 mb-2 flex flex-wrap">
                <Bubble text="Communication" />
                <Bubble text="Customer Service" />
                <Bubble text="Leadership" />
                <Bubble text="Security" />
                <Bubble text="Organization" />
                <Bubble text="Planning" />
            </div>
        </div>

        <div className="text-start my-4">
            <p className="text-sm text-gray-400">January 2023 - April 2023</p>
            <h2 className="pb-4">
                <Tooltip title="Company Link">
                    <Link
                        href="https://www.ibexcontrols.com"
                        target="_blank"
                        rel="noopener"
                        underline="none"
                    >
                        <p className="text-gray-100">Team Lead | Software Engineer - IBEX Controls
                            <ShortcutIcon fontSize="small" sx={{
                                color: 'white',
                                '&:hover': { color: 'lightgray' }
                            }} />
                        </p>
                    </Link>
                </Tooltip>
            </h2>
            <div className="text-start text-lightgray">
                Led a team of four in developing a 508A UL-compliant web application for
                electrical panels, resolving technical challenges like SSL issues across
                browsers. Conducted code reviews to ensure quality and compliance, reducing
                delays and streamlining development. Fostered collaboration, aligned with
                client needs, and translated complex requirements into actionable solutions,
                delivering the project on schedule.
            </div>

            <div className="mt-2 mb-2 flex flex-wrap">
                <Bubble text="JavaScript" />
                <Bubble text="SSL" />
                <Bubble text="Object Oriented Programming" />
                <Bubble text="Containerization" />
                <Bubble text="Leadership" />
                <Bubble text="Delegation" />
                <Bubble text="JIRA" />
                <Bubble text="CI/CD Pipelines" />
                <Bubble text="HTML" />
            </div>
        </div>

        <div className="text-start my-4">
            <p className="text-sm text-gray-400">October 2021 - April 2022</p>
            <h2 className="pb-4">
                <Tooltip title="Company Link">
                    <Link
                        href="https://www.byui.edu"
                        target="_blank"
                        rel="noopener"
                        underline="none"
                    >
                        <p className="text-gray-100">Team Lead | Software Engineer - BYU-Idaho
                            <ShortcutIcon fontSize="small" sx={{
                                color: 'white',
                                '&:hover': { color: 'lightgray' }
                            }} />
                        </p>
                    </Link>
                </Tooltip>
            </h2>
            <div className="text-start text-lightgray">
                Led a team of six to deliver mobile and web applications,
                increasing user engagement by 30% and efficiency by 23%. Optimized SQL
                databases and enhanced UI/UX design, boosting app performance and positioning
                products at the forefront of mobile technology. Facilitated Agile Scrum
                processes, conducted peer code reviews, and mentored team members, ensuring
                high-quality deliverables that exceeded expectations.
            </div>

            <div className="mt-2 mb-2 flex flex-wrap">
                <Bubble text="SQLite" />
                <Bubble text="Software Requirements Specification (SRS)" />
                <Bubble text="Software Design Document (SDD)" />
                <Bubble text="UI Templates" />
                <Bubble text="CSS" />
                <Bubble text="PHP" />
                <Bubble text="SQL Server" />
                <Bubble text="Android App Development" />
                <Bubble text="Python" />
            </div>
        </div>

        <div className="text-start my-4">
            <p className="text-sm text-gray-400">September 2016 - Present</p>
            <h2 className="pb-4">
                <Tooltip title="Company Link">
                    <Link
                        href="https://www.servicesource.org"
                        target="_blank"
                        rel="noopener"
                        underline="none"
                    >
                        <p className="text-gray-100">General Clerk II - Service Source
                            <ShortcutIcon fontSize="small" sx={{
                                color: 'white',
                                '&:hover': { color: 'lightgray' }
                            }} />
                        </p>
                    </Link>
                </Tooltip>
            </h2>
            <div className="text-start text-lightgray">
                Streamlined mailroom operations and expedited customer service,
                boosting efficiency by 30%. Mastered QA reporting and advanced
                clerical duties while ensuring IT issue resolution for seamless
                office functionality. Delivered consistent improvements to operational
                processes and support systems.
            </div>

            <div className="mt-2 mb-2 flex flex-wrap">
                <Bubble text="Mail Room Operations" />
                <Bubble text="Quality Assurance Reports" />
                <Bubble text="IT Troubleshooting" />
                <Bubble text="Documentation" />
                <Bubble text="Operational Support" />
                <Bubble text="Clerical Work" />
                <Bubble text="Customer Service" />
                <Bubble text="WITS Software" />
                <Bubble text="UPS Worldship" />
            </div>
        </div>
    </div>
));

export default Experience;