import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, Sphere } from '@react-three/drei';
import { Group } from 'three';

interface TechNodesProps {
  mousePointer: { x: number; y: number };
}

const techItems = [
  { name: 'React.js', pos: [-3.2, 1.8, -0.5], color: '#38bdf8' },
  { name: 'Node.js', pos: [3.2, 1.5, -0.8], color: '#34d399' },
  { name: 'Python', pos: [-2.8, -1.8, 0.5], color: '#f59e0b' },
  { name: 'JavaScript', pos: [2.9, -1.6, 0.2], color: '#facc15' },
  { name: 'MySQL', pos: [-3.5, -0.2, -1.2], color: '#818cf8' },
  { name: 'MongoDB', pos: [3.4, 0.1, -1.0], color: '#10b981' },
];

export const TechNodes3D: React.FC<TechNodesProps> = ({ mousePointer }) => {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {techItems.map((tech, idx) => (
        <Float
          key={tech.name}
          speed={1.5 + idx * 0.3}
          rotationIntensity={0.5}
          floatIntensity={1}
          position={tech.pos as [number, number, number]}
        >
          <group scale={0.75}>
            {/* Glowing Tech Sphere Node */}
            <Sphere args={[0.3, 16, 16]}>
              <meshStandardMaterial
                color={tech.color}
                emissive={tech.color}
                emissiveIntensity={0.6}
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>

            {/* Wireframe Halo */}
            <Sphere args={[0.42, 12, 12]}>
              <meshBasicMaterial color={tech.color} wireframe transparent opacity={0.3} />
            </Sphere>

            {/* Label */}
            <Text
              position={[0, -0.5, 0]}
              fontSize={0.24}
              color="#f8fafc"
              font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-g.woff"
              anchorX="center"
              anchorY="middle"
            >
              {tech.name}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
};
