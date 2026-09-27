import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import { Float, Sphere, MeshDistortMaterial, Wireframe } from '@react-three/drei';

interface FloatingCyberOrbProps {
  mousePointer: { x: number; y: number };
}

export const FloatingCyberOrb: React.FC<FloatingCyberOrbProps> = ({ mousePointer }) => {
  const outerGroupRef = useRef<Group>(null);
  const innerMeshRef = useRef<Mesh>(null);
  const ringRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (outerGroupRef.current) {
      // Mouse interaction target tracking with lerp
      const targetX = mousePointer.x * 0.8;
      const targetY = mousePointer.y * 0.8;
      
      outerGroupRef.current.rotation.y += delta * 0.2;
      outerGroupRef.current.rotation.x += (targetY - outerGroupRef.current.rotation.x) * 0.05;
      outerGroupRef.current.rotation.z += (targetX - outerGroupRef.current.rotation.z) * 0.05;
    }

    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y -= delta * 0.3;
      innerMeshRef.current.rotation.x += delta * 0.15;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.25;
      ringRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
      <group ref={outerGroupRef}>
        {/* Core Distorted Glowing Cyber Sphere */}
        <mesh ref={innerMeshRef} scale={1.4}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#38bdf8"
            roughness={0.2}
            metalness={0.8}
            distort={0.35}
            speed={2.5}
            emissive="#0284c7"
            emissiveIntensity={0.6}
            wireframe={false}
          />
        </mesh>

        {/* Outer Wireframe Geodesic Shell */}
        <Sphere args={[1.9, 16, 16]}>
          <meshStandardMaterial
            color="#818cf8"
            wireframe
            transparent
            opacity={0.35}
            emissive="#4f46e5"
            emissiveIntensity={0.4}
          />
        </Sphere>

        {/* Cyber Orbital Ring 1 */}
        <group ref={ringRef} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
          <mesh>
            <torusGeometry args={[2.5, 0.03, 16, 100]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#38bdf8"
              emissiveIntensity={0.8}
              transparent
              opacity={0.7}
            />
          </mesh>

          {/* Node sphere on ring */}
          <mesh position={[2.5, 0, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
          <mesh position={[-2.5, 0, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#818cf8" />
          </mesh>
        </group>

        {/* Cyber Orbital Ring 2 (Perpendicular) */}
        <group rotation={[-Math.PI / 4, 0, Math.PI / 3]}>
          <mesh>
            <torusGeometry args={[2.8, 0.02, 16, 100]} />
            <meshStandardMaterial
              color="#34d399"
              emissive="#34d399"
              emissiveIntensity={0.6}
              transparent
              opacity={0.5}
            />
          </mesh>
        </group>
      </group>
    </Float>
  );
};
