
import { ReactNode, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeScene from './ThreeScene';

interface ThreeCanvasProps {
  className?: string;
  interactive?: boolean;
  children?: ReactNode;
}

export default function ThreeCanvas({ className = '', interactive = false, children }: ThreeCanvasProps) {
  return (
    <div className={`canvas-container ${interactive ? 'canvas-interactive' : ''} ${className}`}>
      <Canvas 
        shadows 
        dpr={[1, 2]}
        camera={{ position: [0, 0, 15], fov: 45 }}
      >
        <Suspense fallback={null}>
          <ThreeScene />
          {children}
        </Suspense>
        {interactive && <OrbitControls enableZoom={false} enablePan={false} />}
      </Canvas>
    </div>
  );
}
