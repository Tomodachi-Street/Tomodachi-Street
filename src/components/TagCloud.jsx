import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { Center } from '@react-three/drei';

const TagCloud = () => {
  const mountRef = useRef(null);
  const rotationState = useRef({ x: 0, y: 0 }); // Store the persistent rotation state
  const isMouseOver = useRef(false); // Track mouse hover state
  const mousePosition = useRef({ x: 0, y: 0 }); // Store mouse position
  const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile

  useEffect(() => {
    // Check if the screen size is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile || !mountRef.current) return; // Do not render tag cloud on mobile

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Create Scene
    const scene = new THREE.Scene();

    // Create Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 400;

    // Create Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Point Light
    const pointLight = new THREE.PointLight(0xffffff, 2, 1000);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Tags for the Cloud
    const tags = [
      'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'HTML5',
      'CSS3', 'MongoDB', 'SQL', 'REST APIs', 'Tailwind', 'Bootstrap', 'Git', 'Java', 'C++',
      'Python', 'MySQL', 'Azure', 'ThreeJS', 'Postman', 'Spring Boot', 'Spring MVC', 'AWS',
      'Agile', 'VS Code', 'IntelliJ', 'Jira', 'Thymeleaf',
    ];

    // Create Sphere and Add Text Tags
    const radius = 100;

    const fontLoader = new FontLoader();
    fontLoader.load('/helvetiker_regular.typeface.json', (font) => {
      tags.forEach((tag, i) => {
        const phi = Math.acos(-1 + (2 * i) / tags.length);
        const theta = Math.sqrt(tags.length * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        const textGeometry = new TextGeometry(tag, {
          font: font,
          size: 12,
          height: 2,
          bevelEnabled: true,
          bevelThickness: 1,
          bevelSize: 0.5,
          bevelSegments: 2,
        });

        const textMaterial = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: 0xffffff,
          emissiveIntensity: 0.5,
          metalness: 0.5,
          roughness: 0.3,
        });

        const textMesh = new THREE.Mesh(textGeometry, textMaterial);

        textMesh.position.set(x, y, z);

        // Make the text face outwards
        textMesh.lookAt(0, 0, 0);
        textMesh.rotateY(Math.PI);

        scene.add(textMesh);
      });
    });

    const onMouseMove = (event) => {
      const rect = mountRef.current.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      mousePosition.current = { x: mouseX, y: mouseY };
      isMouseOver.current = true;
    };

    const onMouseLeave = () => {
      isMouseOver.current = false;
    };

    mountRef.current.addEventListener('mousemove', onMouseMove);
    mountRef.current.addEventListener('mouseleave', onMouseLeave);

    const animate = () => {
      requestAnimationFrame(animate);

      if (isMouseOver.current) {
        rotationState.current.x += mousePosition.current.y * 0.01;
        rotationState.current.y += mousePosition.current.x * 0.01;
      }

      scene.rotation.x = rotationState.current.x;
      scene.rotation.y = rotationState.current.y;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', onMouseMove);
        mountRef.current.removeEventListener('mouseleave', onMouseLeave);
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isMobile]);

  if (isMobile) {
    return null; // Do not render tag cloud on mobile
  }

  return <div ref={mountRef} style={{ width: '30%', height: '500px', alignItems: Center}} />;
};

export default TagCloud;