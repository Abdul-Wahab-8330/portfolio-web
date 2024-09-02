import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const { scene } = useGLTF('./desktop_pc/gaming_desktop_pc.glb');

  return (
    <>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={10} />
      <directionalLight 
        position={[0, 10, 5]}  // Position it above the model
        intensity={1}        // Adjust intensity to ensure visibility
        castShadow             // Enable shadows
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <primitive 
        object={scene} 
        scale={isMobile? 0.7 : 0.75} 
        position={ isMobile? [0, -2.9, -2.2] : [0, -3.75, -1.5]} 
        rotation={[-0.01, -0.2, -0.1]} 
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',
      handleMediaQueryChange);
      return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);
  return (
    <Canvas 
      frameloop="demand" 
      shadows 
      camera={{ position: [20, 3, 5], fov: 25 }} 
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
