import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PolarVisualization: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central sphere representing POLARIO */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* POLAR elements as orbiting spheres */}
      {[
        { color: '#ff6b6b', position: [3, 0, 0] as [number, number, number], label: 'P' }, // People
        { color: '#4ecdc4', position: [0, 3, 0] as [number, number, number], label: 'O' }, // Objects
        { color: '#45b7d1', position: [-3, 0, 0] as [number, number, number], label: 'L' }, // Locations
        { color: '#96ceb4', position: [0, -3, 0] as [number, number, number], label: 'A' }, // Actions
        { color: '#ffd93d', position: [2, 2, 0] as [number, number, number], label: 'R' }, // Risks
      ].map((element, index) => (
        <group key={index} position={element.position}>
          <mesh>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial
              color={element.color}
              metalness={0.5}
              roughness={0.3}
              transparent
              opacity={0.8}
            />
          </mesh>
          {/* Add connecting lines */}
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes.position"
                count={2}
                array={new Float32Array([
                  0, 0, 0,
                  ...element.position,
                ])}
                itemSize={3}
                args={[new Float32Array([0, 0, 0, ...element.position]), 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#ffffff" opacity={0.3} transparent />
          </line>
        </group>
      ))}
    </group>
  );
};

export default PolarVisualization; 