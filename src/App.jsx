import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Header from './pages/Header';
import Radio from './components/Radio';

const App = () => {
  const [nav, setNav] = useState('About');
  const sectionRefs = useRef({});
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll for header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHeaderVisible(false); // Hide header when scrolling down
      } else {
        setHeaderVisible(true); // Show header when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // IntersectionObserver to update active navigation item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNav(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-full">
      <div className={`header-container ${isHeaderVisible ? 'visible' : 'hidden'}`}>
        <Header activeSection={nav} />
      </div>

      {/* Main content container */}
      <div className="content">
        <div className="radio-container-wrapper">
          <Radio nav={nav} />
        </div>

        <div className="sections-container">
          {['About', 'Events', 'Gallery', 'Contact'].map((section) => (
            <section
              key={section}
              id={section}
              ref={(el) => (sectionRefs.current[section] = el)}
              className="section"
            >
              <h1>{section}</h1>
              <p>
                {`This is the ${section} section. Add more content here to customize
                the page.`}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;