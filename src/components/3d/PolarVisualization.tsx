import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PolarVisualizationProps {
  // Props can be added here
}

export const PolarVisualization: React.FC<PolarVisualizationProps> = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Create refs for elements
  const sphereRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Animation loop
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.2;
    if (sphereRef.current) sphereRef.current.rotation.y += delta * 0.4;
    if (ringRef.current) ringRef.current.rotation.z += delta * 0.3;
    if (particlesRef.current) particlesRef.current.rotation.y -= delta * 0.1;
  });

  // Particle system
  const particles = useMemo(() => {
    const positions = new Float32Array(3000);
    for (let i = 0; i < 3000; i += 3) {
      const distance = THREE.MathUtils.randFloat(2.5, 5);
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      positions[i] = distance * Math.sin(theta) * Math.cos(phi);
      positions[i + 1] = distance * Math.sin(theta) * Math.sin(phi);
      positions[i + 2] = distance * Math.cos(theta);
    }
    return positions;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Central Sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#0ea5e9" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Orbiting Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.03, 16, 100]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.6} />
      </mesh>

      {/* Particle Field */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.8} />
      </points>

      {/* Connection Line */}
      <line>
        <bufferGeometry
          attach="geometry"
          attributes={{
            position: new THREE.BufferAttribute(new Float32Array([0, 0, 0, 2, 0, 0]), 3),
          }}
        />
        <lineBasicMaterial attach="material" color="#f97316" />
      </line>

      {/* Ambient Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
    </group>
  );
};
