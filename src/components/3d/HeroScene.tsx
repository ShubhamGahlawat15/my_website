import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { FloatingCyberOrb } from './FloatingCyberOrb';
import { CyberGrid } from './CyberGrid';
import { Particles } from './Particles';
import { TechNodes3D } from './TechNodes3D';
import { Fallback2D } from './Fallback2D';

export const HeroScene: React.FC = () => {
  const [mousePointer, setMousePointer] = useState({ x: 0, y: 0 });
  const [isWebGLEnabled, setIsWebGLEnabled] = useState(true);
  const [isLowPowerMobile, setIsLowPowerMobile] = useState(false);

  useEffect(() => {
    // WebGL support check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setIsWebGLEnabled(false);
      }
    } catch (e) {
      setIsWebGLEnabled(false);
    }

    // Check low power / small mobile screen
    if (window.innerWidth < 640) {
      setIsLowPowerMobile(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePointer({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isWebGLEnabled) {
    return <Fallback2D />;
  }

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] cursor-grab active:cursor-grabbing">
      <Suspense fallback={<Fallback2D />}>
        <Canvas
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={50} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 2.8}
            rotateSpeed={0.4}
          />

          {/* Dynamic 3D Lighting Setup */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.6} color="#38bdf8" />
          <pointLight position={[0, 0, 5]} intensity={1.5} color="#818cf8" />
          <pointLight position={[0, -3, 2]} intensity={0.8} color="#34d399" />

          {/* 3D Scene Elements */}
          <FloatingCyberOrb mousePointer={mousePointer} />
          <CyberGrid />
          <Particles count={isLowPowerMobile ? 350 : 750} />
          {!isLowPowerMobile && <TechNodes3D mousePointer={mousePointer} />}
        </Canvas>
      </Suspense>
    </div>
  );
};
