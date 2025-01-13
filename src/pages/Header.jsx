import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import Resume from '../assets/26014_Derrick_Eberlein.pdf';
import '../Styles/Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-content">
                <h1>Derrick Eberlein</h1>
                <h2>Software Engineer</h2>
                <h3 className="brush-script">
                    Turning intrusive thoughts into reality.
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Tooltip title="GitHub">
                        <Link
                            href="https://github.com/reverendtrivium/"
                            rel="noopener"
                            target="_blank"
                            underline="none"
                        >
                            <IconButton aria-label="GitHub">
                                <GitHubIcon sx={{ color: 'white', '&:hover': { color: 'lightgray' } }} />
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip title="LinkedIn">
                        <Link
                            href="https://www.linkedin.com/in/derrickeberlein/"
                            rel="noopener"
                            target="_blank"
                            underline="none"
                        >
                            <IconButton aria-label="LinkedIn">
                                <LinkedInIcon sx={{ color: 'white', '&:hover': { color: 'lightgray' } }} />
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Instagram">
                        <Link
                            href="https://www.instagram.com/mx.cyberagent/"
                            rel="noopener"
                            target="_blank"
                            underline="none"
                        >
                            <IconButton aria-label="Instagram">
                                <InstagramIcon sx={{ color: 'white', '&:hover': { color: 'lightgray' } }} />
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Email Me">
                        <Link
                            href="mailto:derrickeberlein@gmail.com"
                            target="_blank"
                            rel="noopener"
                            underline="none"
                        >
                            <IconButton aria-label="Email">
                                <EmailIcon sx={{ color: 'white', '&:hover': { color: 'lightgray' } }} />
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Download Resume">
                        <Link
                            href={Resume}
                            target="_blank"
                        >
                            <IconButton onClick={() => {}} aria-label="Download Resume">
                                <DownloadIcon sx={{ color: 'white', '&:hover': { color: 'lightgray' } }} />
                            </IconButton>
                        </Link>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default Header;