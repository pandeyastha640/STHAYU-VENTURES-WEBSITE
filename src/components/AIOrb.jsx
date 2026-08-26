import { Canvas, useFrame } from "@react-three/fiber"
import {
  Float,
  Line,
  OrbitControls,
  Sphere,
} from "@react-three/drei"
import { useMemo, useRef } from "react"
import * as THREE from "three"
import Particles from "./Particles"

function NeuralNetwork() {
  const group = useRef()

  const nodes = useMemo(() => {
    const points = []

    for (let i = 0; i < 42; i++) {
      const radius = 1.25 + Math.random() * 0.75
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(
        2 * Math.random() - 1,
      )

      points.push(
        new THREE.Vector3(
          radius *
            Math.sin(phi) *
            Math.cos(theta),

          radius *
            Math.sin(phi) *
            Math.sin(theta),

          radius * Math.cos(phi),
        ),
      )
    }

    return points
  }, [])

  useFrame((state, delta) => {
    if (!group.current) return

    group.current.rotation.y += delta * 0.12

    group.current.rotation.x =
      Math.sin(
        state.clock.elapsedTime * 0.3,
      ) * 0.08
  })

  return (
    <group ref={group}>

      {/* Neural Nodes */}

      {nodes.map((position, index) => (
        <Sphere
          key={index}
          args={[0.035, 12, 12]}
          position={position}
        >
          <meshBasicMaterial
            color={
              index % 3 === 0
                ? "#67e8f9"
                : "#3b82f6"
            }
          />
        </Sphere>
      ))}

      {/* Neural Connections */}

      {nodes.map((start, index) => {
        const connections = nodes
          .map((end, endIndex) => ({
            end,
            endIndex,
            distance:
              start.distanceTo(end),
          }))
          .filter(
            ({ endIndex, distance }) =>
              endIndex !== index &&
              distance < 0.9,
          )
          .slice(0, 2)

        return connections.map(
          ({ end, endIndex }) => (
            <Line
              key={`${index}-${endIndex}`}
              points={[start, end]}
              color="#22d3ee"
              transparent
              opacity={0.18}
              lineWidth={0.7}
            />
          ),
        )
      })}

      {/* Central AI Core */}

      <Sphere
        args={[0.72, 64, 64]}
      >
        <meshStandardMaterial
          color="#0891b2"
          emissive="#22d3ee"
          emissiveIntensity={3}
          metalness={0.9}
          roughness={0.15}
        />
      </Sphere>

      {/* Core Wireframe */}

      <Sphere
        args={[0.9, 32, 32]}
      >
        <meshBasicMaterial
          color="#67e8f9"
          wireframe
          transparent
          opacity={0.18}
        />
      </Sphere>

      {/* Inner Glow Ring */}

      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <torusGeometry
          args={[
            1.15,
            0.012,
            16,
            128,
          ]}
        />

        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Outer Energy Ring */}

      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <torusGeometry
          args={[
            1.65,
            0.008,
            16,
            128,
          ]}
        />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Angled Energy Ring */}

      <mesh
        rotation={[
          0.5,
          0.8,
          0,
        ]}
      >
        <torusGeometry
          args={[
            1.9,
            0.006,
            16,
            128,
          ]}
        />

        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.25}
        />
      </mesh>

    </group>
  )
}

function AIOrb() {
  return (
    <div className="h-full w-full relative">

      <Canvas
        camera={{
          position: [0, 0, 4.8],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >

        {/* Ambient Lighting */}

        <ambientLight
          intensity={0.35}
        />

        {/* Cyan Light */}

        <pointLight
          position={[3, 3, 3]}
          intensity={18}
          color="#22d3ee"
        />

        {/* Blue Light */}

        <pointLight
          position={[-3, -2, 2]}
          intensity={10}
          color="#2563eb"
        />

        {/* Floating Particle Field */}

        <Particles />

        {/* Main AI Network */}

        <Float
          speed={1.2}
          rotationIntensity={0.2}
          floatIntensity={0.45}
        >
          <NeuralNetwork />
        </Float>

        {/* Interaction */}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.35}
        />

      </Canvas>

    </div>
  )
}

export default AIOrb