import React, { useEffect } from 'react';
import * as THREE from 'three';

const EarthGlobe = () => {
  
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('globe-container').appendChild(renderer.domElement);
    // Chargement de la texture de la Terre
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('globe.jpeg'); 
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const globe = new THREE.Mesh(geometry, material);

  
    scene.add(globe);
   
    
    camera.position.z = 10;
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Faites tourner la sphère
      globe.rotation.y += 0.005;
      
      renderer.render(scene, camera);
    };
    
    animate();
  }, []);
  
  return (
    <div id="globe-container" />
  );
};

export default EarthGlobe;
