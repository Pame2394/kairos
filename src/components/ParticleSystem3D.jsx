import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Crear textura circular para los puntos
const createCircleTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  
  const context = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = canvas.width / 2;
  
  const gradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
  gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
  gradient.addColorStop(0.2, 'rgba(0, 0, 0, 1)');
  gradient.addColorStop(0.8, 'rgba(0, 0, 0, 0.5)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  
  context.fillStyle = gradient;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.fill();
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// Componente de red neuronal con partículas
function NeuralNetwork({ count = 100 }) {
  const pointsRef = useRef();
  const linesRef = useRef();
  const [mouse] = useState(() => new THREE.Vector2());
  const { camera, size } = useThree();
  
  // Crear la textura una sola vez
  const circleTexture = useMemo(() => createCircleTexture(), []);

  // Generar nodos de la red neuronal
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        originalPosition: new THREE.Vector3()
      });
    }
    temp.forEach(p => p.originalPosition.copy(p.position));
    return temp;
  }, [count]);

  // Actualizar posición del mouse en el espacio 3D
  const onMouseMove = (event) => {
    mouse.x = (event.clientX / size.width) * 2 - 1;
    mouse.y = -(event.clientY / size.height) * 2 + 1;
  };

  useMemo(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', onMouseMove);
      return () => window.removeEventListener('mousemove', onMouseMove);
    }
  }, [size]);

  useFrame(() => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array;
    const linePositions = [];
    
    // Calcular posición del mouse en 3D
    const mousePos = new THREE.Vector3(
      mouse.x * 20,
      mouse.y * 20,
      5
    );

    // Actualizar posiciones de partículas
    particles.forEach((particle, i) => {
      // Movimiento base
      particle.position.add(particle.velocity);

      // Límites de rebote
      ['x', 'y', 'z'].forEach(axis => {
        if (Math.abs(particle.position[axis]) > 20) {
          particle.velocity[axis] *= -1;
        }
      });

      // Repulsión del mouse
      const distance = particle.position.distanceTo(mousePos);
      if (distance < 12) {
        const force = (12 - distance) / 12;
        const direction = particle.position.clone().sub(mousePos).normalize();
        particle.position.add(direction.multiplyScalar(force * 1.2));
      }

      // Actualizar posiciones en el buffer
      positions[i * 3] = particle.position.x;
      positions[i * 3 + 1] = particle.position.y;
      positions[i * 3 + 2] = particle.position.z;

      // Crear conexiones entre nodos cercanos
      for (let j = i + 1; j < particles.length; j++) {
        const dist = particle.position.distanceTo(particles[j].position);
        if (dist < 6) {
          linePositions.push(
            particle.position.x, particle.position.y, particle.position.z,
            particles[j].position.x, particles[j].position.y, particles[j].position.z
          );
        }
      }
    });

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Actualizar líneas de conexión
    if (linesRef.current && linePositions.length > 0) {
      linesRef.current.geometry.setFromPoints(
        linePositions.reduce((acc, val, idx) => {
          if (idx % 3 === 0) {
            acc.push(new THREE.Vector3(linePositions[idx], linePositions[idx + 1], linePositions[idx + 2]));
          }
          return acc;
        }, [])
      );
    }
  });

  // Crear geometría de puntos
  const pointsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    
    particles.forEach((particle, i) => {
      positions[i * 3] = particle.position.x;
      positions[i * 3 + 1] = particle.position.y;
      positions[i * 3 + 2] = particle.position.z;
    });
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [particles, count]);

  return (
    <>
      {/* Nodos de la red */}
      <points ref={pointsRef} geometry={pointsGeometry}>
        <pointsMaterial
          size={0.8}
          color="#000000"
          map={circleTexture}
          sizeAttenuation={true}
          transparent={true}
          alphaTest={0.001}
          depthWrite={false}
          opacity={1}
        />
      </points>

      {/* Conexiones entre nodos */}
      <line ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial
          color="#F97316"
          transparent={true}
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </line>

      {/* Luces ambientales */}
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#3B82F6" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#F97316" />
    </>
  );
}

// Componente principal del canvas 3D
const ParticleSystem3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <NeuralNetwork count={120} />
      </Canvas>
    </div>
  );
};

export default ParticleSystem3D;
