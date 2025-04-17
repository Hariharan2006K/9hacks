import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Icosahedron, MeshWobbleMaterial } from '@react-three/drei';

function FloatingBot() {
  return (
    <div style={{ position: 'fixed', top: '10vh', right: '5vw', width: '250px', height: '250px', zIndex: 1 }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Icosahedron args={[1.2, 1]}>
            <MeshWobbleMaterial
              color="#61dafb"
              speed={1}
              factor={0.5}
              wireframe
            />
          </Icosahedron>
        </Float>
      </Canvas>
    </div>
  );
}

export default FloatingBot;
