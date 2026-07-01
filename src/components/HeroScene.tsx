import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const count = 1800

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.025
      ref.current.rotation.x += delta * 0.008
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#38BDF8"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function NeuralNode({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.15
    }
  })
  return (
    <Sphere ref={ref} args={[0.06, 16, 16]} position={position}>
      <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={2} toneMapped={false} />
    </Sphere>
  )
}

function NeuralNetwork() {
  const group = useRef<THREE.Group>(null)
  const nodes = useMemo(() => {
    const pts: [number, number, number][] = []
    const layers = [4, 6, 6, 3]
    layers.forEach((n, li) => {
      for (let i = 0; i < n; i++) {
        const x = (li - (layers.length - 1) / 2) * 1.6
        const y = (i - (n - 1) / 2) * 0.7
        pts.push([x, y, 0])
      }
    })
    return pts
  }, [])

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.06
  })

  return (
    <group ref={group} position={[2.6, 0, -1]} scale={0.85}>
      {nodes.map((p, i) => (
        <NeuralNode key={i} position={p} />
      ))}
    </group>
  )
}

function FloatingCore() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15
      ref.current.rotation.y += delta * 0.2
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.3
    }
  })
  return (
    <Sphere ref={ref} args={[1.1, 64, 64]} position={[-2.6, 0, -1]}>
      <MeshDistortMaterial
        color="#2563EB"
        attach="material"
        distort={0.45}
        speed={2}
        roughness={0.15}
        metalness={0.7}
        emissive="#2563EB"
        emissiveIntensity={0.4}
      />
    </Sphere>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 9], fov: 55 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#38BDF8" />
        <pointLight position={[-5, -5, 5]} intensity={0.8} color="#00E5FF" />
        <ParticleField />
        <FloatingCore />
        <NeuralNetwork />
      </Canvas>
    </div>
  )
}
