
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, OrbitControls, Float, Sphere } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function FloatingText() {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Text3D
        ref={textRef}
        font="/fonts/inter_bold.json"
        size={1.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[-5, 0, 0]}
      >
        EMPOWER
        <meshStandardMaterial color="#9b87f5" metalness={0.5} roughness={0.2} />
      </Text3D>
    </Float>
  );
}

function ParticleField() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 20, 
      (Math.random() - 0.5) * 10, 
      (Math.random() - 0.5) * 10
    ],
    color: [
      "#9b87f5", // Lavender
      "#43c6ac", // Teal
      "#e8a8a1"  // Rose Gold
    ][Math.floor(Math.random() * 3)]
  }));

  return (
    <>
      {particles.map((particle, i) => (
        <Sphere key={i} args={[0.1, 8, 8]} position={particle.position as [number, number, number]}>
          <meshStandardMaterial 
            color={particle.color} 
            emissive={particle.color} 
            emissiveIntensity={0.5} 
            toneMapped={false} 
          />
        </Sphere>
      ))}
    </>
  );
}

export default function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <FloatingText />
          <ParticleField />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center p-8 bg-background/70 backdrop-blur-md rounded-lg max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-lavender via-teal to-rose-gold bg-clip-text text-transparent">
          Personal Brand & Digital Empowerment
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/80">
          Mentoring students and empowering women to build their digital presence.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-lavender hover:bg-lavender/80">
            <a href="https://chat.whatsapp.com/example" target="_blank" rel="noopener noreferrer">
              Join WhatsApp Community
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-teal text-teal hover:bg-teal/10">
            <Link to="/circle">
              Join Women's Circle
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-rose-gold hover:bg-rose-gold/80">
            <Link to="/webinars">
              Register for Webinars
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
