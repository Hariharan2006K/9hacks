import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

function ThreeCanvas() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.4} />
        <directionalLight position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        <Sphere visible args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Canvas>
    </div>
  );
}

export default ThreeCanvas;
