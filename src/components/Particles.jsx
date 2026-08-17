import { Points, PointMaterial } from "@react-three/drei"
import { useMemo } from "react"
import * as THREE from "three"

function Particles() {
  const positions = useMemo(() => {
    const count = 700
    const data = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i += 3) {
      const radius = 2.8 + Math.random() * 2.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(
        2 * Math.random() - 1,
      )

      data[i] =
        radius *
        Math.sin(phi) *
        Math.cos(theta)

      data[i + 1] =
        radius *
        Math.sin(phi) *
        Math.sin(theta)

      data[i + 2] =
        radius * Math.cos(phi)
    }

    return data
  }, [])

  return (
    <Points
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#67e8f9"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  )
}

export default Particles