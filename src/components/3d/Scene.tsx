import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import PolarVisualization from './PolarVisualization';

const Scene: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ background: '#000000' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <PolarVisualization />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={15}
        />
      </Suspense>
    </Canvas>
  );
};

export default Scene; 