import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const CyberGrid: React.FC = () => {
  const gridRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (gridRef.current) {
      gridRef.current.position.z = (gridRef.current.position.z + delta * 0.5) % 1;
    }
  });

  return (
    <group position={[0, -3, 0]}>
      {/* 3D Floor Grid */}
      <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[60, 60, 40, 40]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Horizon Fog Glow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, -15]}>
        <planeGeometry args={[60, 20]} />
        <meshBasicMaterial
          color="#05070e"
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
};
