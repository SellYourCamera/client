import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import DMOdel from '../assets/3dModel/ActionCamera.glb'

const ThreeDModel = () => {
  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();

    // Set up Three.js camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5); // Adjust camera position to avoid being inside the model

    // Set up Three.js renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add basic lighting to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Load the 3D model
    const loader = new GLTFLoader();
    loader.load(DMOdel, (gltf) => {
      const model = gltf.scene;
      scene.add(model);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      // Add any animations or interactions here
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return null;
};

export default ThreeDModel;
