
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useIsMobile } from '@/hooks/use-mobile';

interface FloatingObjectProps {
  position: [number, number, number];
  color: string;
  size?: number;
  rotationSpeed?: number;
  floatSpeed?: number;
  floatDistance?: number;
  shape?: 'sphere' | 'cube' | 'torus';
}

function FloatingObject({
  position,
  color,
  size = 1,
  rotationSpeed = 0.01,
  floatSpeed = 0.5,
  floatDistance = 0.5,
  shape = 'sphere'
}: FloatingObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(Math.random() * 100);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Update time reference for floating animation
    time.current += 0.01 * floatSpeed;
    
    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(time.current) * floatDistance;
    
    // Rotation animation
    meshRef.current.rotation.x += rotationSpeed * 0.5;
    meshRef.current.rotation.y += rotationSpeed;
  });
  
  let geometry;
  
  switch (shape) {
    case 'cube':
      geometry = <boxGeometry args={[size, size, size]} />;
      break;
    case 'torus':
      geometry = <torusGeometry args={[size, size * 0.3, 16, 32]} />;
      break;
    case 'sphere':
    default:
      geometry = <sphereGeometry args={[size, 32, 32]} />;
      break;
  }
  
  return (
    <mesh ref={meshRef} position={position} castShadow>
      {geometry}
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.2} />
    </mesh>
  );
}

export default function ThreeScene() {
  const isMobile = useIsMobile();
  const { camera } = useThree();
  
  useEffect(() => {
    // Position the camera
    camera.position.z = 15;
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      
      {/* Lavender objects */}
      <FloatingObject 
        position={[-5, 2, -5]} 
        color="#9b87f5" 
        size={isMobile ? 0.7 : 1.2} 
        shape="sphere" 
        floatSpeed={0.7} 
      />
      <FloatingObject 
        position={[5, -3, -7]} 
        color="#b39dff" 
        size={isMobile ? 0.8 : 1.5} 
        shape="torus"
        rotationSpeed={0.02}
      />
      
      {/* Teal objects */}
      <FloatingObject 
        position={[7, 4, -10]} 
        color="#43c6ac" 
        size={isMobile ? 0.6 : 1.0} 
        shape="cube"
        floatDistance={0.7}
      />
      <FloatingObject 
        position={[-7, -2, -8]} 
        color="#66d4be" 
        size={isMobile ? 0.5 : 0.9} 
        shape="sphere"
      />
      
      {/* Rose gold objects */}
      <FloatingObject 
        position={[0, 5, -12]} 
        color="#e8a8a1" 
        size={isMobile ? 0.7 : 1.3} 
        shape="torus"
        floatSpeed={0.4}
      />
      <FloatingObject 
        position={[-4, -4, -6]} 
        color="#f2b8b3" 
        size={isMobile ? 0.6 : 1.1} 
        shape="cube"
        rotationSpeed={0.015}
      />
    </>
  );
}
