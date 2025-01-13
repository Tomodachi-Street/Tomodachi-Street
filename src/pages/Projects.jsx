import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link'; // Add this import
import ShortcutIcon from '@mui/icons-material/ArrowOutward';
import Bubble from '../components/Bubble';
import '../Styles/Projects.css';


const Projects =  ({ sectionRefs }) => {
  return (
    <div ref={(el) => (sectionRefs.current["Projects"] = el)} id="Projects" className="min-h-screen flex flex-col justify-center items-start text-gray-100 px-4 py-4">
      <h2 className="text-xl font-medium mt-2 uppercase border-box">Projects</h2>
      <div className="text-start my-4">
        <p className="text-sm text-gray-400">2024</p>
        <h2 className="pb-4">
          <Tooltip title="Project Link">
            <Link
              href="https://github.com/ReverendTrivium/Tomodachi-Street"
              target="_blank"
              rel="noopener"
              underline="none"
            >
              <p className="text-gray-100">Event Management Web Application
                <ShortcutIcon fontSize="small" sx={{
                  color: 'white',
                  '&:hover': { color: 'lightgray' }
                }} />
              </p>
            </Link>
          </Tooltip>
        </h2>
        <div className="text-start text-lightgray">
          Designed and developed a responsive event management application using the
          Java Spring Framework, improving event creation, editing, and listing capabilities.
          Simplified workflows with a user-friendly interface and secure processes for managing
          event details.
        </div>
        <div className="mt-2 mb-2 flex flex-wrap">
          <Bubble text="Java Spring Framework" />
          <Bubble text="MySQL Server 8" />
          <Bubble text="Thymeleaf" />
          <Bubble text="Bootstrap 5" />
          <Bubble text="RESTful API's" />
          <Bubble text="Microservices" />
          <Bubble text="API Architecture" />
          <Bubble text="Git" />
        </div>

        <br></br>
        <h2 className="pb-4">
          <Tooltip title="Project Link">
            <Link
              href="https://github.com/ReverendTrivium/RedactedBot"
              target="_blank"
              rel="noopener"
              underline="none"
            >
              <p className="text-gray-100">Server Management Bot (Discord)
                <ShortcutIcon fontSize="small" sx={{
                  color: 'white',
                  '&:hover': { color: 'lightgray' }
                }} />
              </p>
            </Link>
          </Tooltip>
        </h2>
        <div className="text-start text-lightgray">
          Built a robust Discord server management bot with Java and JDA, automating moderation,
          content handling, and dynamic blacklist enforcement. Integrated Reddit and Google APIs
          for media fetching and search functionality, enhancing server engagement.
        </div>
        <div className="mt-2 mb-2 flex flex-wrap">
          <Bubble text="Java" />
          <Bubble text="Java Discord API (JDA)" />
          <Bubble text="MongoDB" />
          <Bubble text="Reddit API" />
          <Bubble text="Google Custom Search API" />
          <Bubble text="ScheduledExecutorService" />
          <Bubble text="Regular Expressions (REGEX)" />
          <Bubble text="Dotenv" />
        </div>

      </div>
      <div className="text-start my-4">
        <p className="text-sm text-gray-400">2023</p>
        <h2 className="">
          <Tooltip title="Project Link">
            <Link
              href="https://github.com/ReverendTrivium/Inventory"
              target="_blank"
              rel="noopener"
              underline="none"
            >
              <p className="text-gray-100">Inventory - An Inventory Management and Grocery List Android App.
                <ShortcutIcon fontSize="small" sx={{
                  color: 'white',
                  '&:hover': { color: 'lightgray' }
                }} />
              </p>

            </Link>
          </Tooltip>
          <div className="text-start text-lightgray">
            Developed an innovative inventory management and grocery list app,
            enabling users to track household inventory and avoid duplicate purchases.
            Seamlessly integrates inventory monitoring with grocery list functionality
            for smarter shopping decisions.
          </div>
          <div className="mt-2 mb-2 flex flex-wrap">
            <Bubble text="AndroidX" />
            <Bubble text="Material Search Bar" />
            <Bubble text="SQLite" />
            <Bubble text="SQLiteAssetHelper" />
            <Bubble text="Android Flow Layout" />
          </div>
        </h2>
      </div>
    </div>
  );
};

export default Projects;