import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from '../Loader';

const MessageScene = () => {
  return (
    <group>
      {/* Ambient light for overall scene brightness */}
      <ambientLight intensity={0.3} />
      
      {/* Main directional light for shadows */}
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.4} />

      {/* Floating envelope base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 2, 0.2]} />
        <meshPhongMaterial 
          color="#915eff"
          opacity={0.7}
          transparent
          shininess={50}
        />
      </mesh>

      {/* Envelope flap */}
      <mesh position={[0, 1, 0]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[3, 1, 0.1]} />
        <meshPhongMaterial 
          color="#915eff"
          opacity={0.8}
          transparent
          shininess={60}
        />
      </mesh>

      {/* Decorative particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh 
          key={i}
          position={[
            Math.sin(i) * 2,
            Math.cos(i) * 2,
            Math.sin(i * 0.5) * 2
          ]}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshPhongMaterial 
            color="#ff5e91"
            opacity={0.6}
            transparent
            shininess={100}
          />
        </mesh>
      ))}

      {/* Message glow effect */}
      <mesh position={[0, 0, 0.2]}>
        <planeGeometry args={[2.5, 1.5]} />
        <meshPhongMaterial 
          color="#ffffff"
          opacity={0.2}
          transparent
          emissive="#915eff"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MessageScene />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas; 