import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

interface PolarVisualizationProps {
  // Props can be added here
}

export const PolarVisualization: React.FC<PolarVisualizationProps> = () => {
  const cockpitRef = useRef<THREE.Group>(null);
  const planeRef = useRef<THREE.Group>(null);
  const elementsRef = useRef<THREE.Points>(null);

  const planeModel = useLoader(GLTFLoader, '/models/fighter_plane.glb');

  useFrame((_, delta) => {
    if (cockpitRef.current) cockpitRef.current.rotation.y += delta * 0.05;
    if (planeRef.current) planeRef.current.rotation.y += delta * 0.1;
    if (elementsRef.current) elementsRef.current.rotation.y -= delta * 0.02;
  });

  const elements = useMemo(() => {
    const positions = new Float32Array(1500);
    for (let i = 0; i < 1500; i += 3) {
      const distance = THREE.MathUtils.randFloat(3, 6);
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      positions[i] = distance * Math.sin(theta) * Math.cos(phi);
      positions[i + 1] = distance * Math.sin(theta) * Math.sin(phi);
      positions[i + 2] = distance * Math.cos(theta);
    }
    return positions;
  }, []);

  return (
    <group ref={cockpitRef}>
      {/* Fighter Plane Model */}
      <group ref={planeRef} scale={0.5}>
        <primitive object={planeModel.scene} />
      </group>

      {/* Company Elements Overview */}
      <points ref={elementsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[elements, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.04} color="#ffffff" transparent opacity={0.7} />
      </points>

      {/* Connection Lines (Representing control links) */}
      <line>
        <bufferGeometry
          attach="geometry"
          attributes={{
            position: new THREE.BufferAttribute(new Float32Array([0, 0, 0, 2, 0, 0]), 3),
          }}
        />
        <lineBasicMaterial attach="material" color="#22c55e" />
      </line>

      {/* Realistic Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
    </group>
  );
};
