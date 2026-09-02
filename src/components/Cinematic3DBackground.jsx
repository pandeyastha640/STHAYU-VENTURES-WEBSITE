import { useEffect, useRef } from "react"

export default function Cinematic3DBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    // Interactive 3D Particles with depth
    const particleCount = 40
    const particles = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.4,
        y: (Math.random() - 0.5) * height * 1.4,
        z: Math.random() * 600 + 100,
        vz: -0.5 - Math.random() * 0.5,
        size: Math.random() * 2 + 1.2,
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2
      const fov = 350

      const projected = []

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.z += p.vz
        if (p.z <= 10) {
          p.z = 700
          p.x = (Math.random() - 0.5) * width * 1.4
          p.y = (Math.random() - 0.5) * height * 1.4
        }

        const scale = fov / (fov + p.z)
        const x2d = cx + p.x * scale
        const y2d = cy + p.y * scale
        const alpha = Math.min(1, Math.max(0, (1 - p.z / 700) * 0.4))

        projected.push({ x: x2d, y: y2d, scale, alpha, z: p.z })

        // Draw particle
        ctx.beginPath()
        ctx.arc(x2d, y2d, p.size * scale, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212, 185, 130, ${alpha})`
        ctx.fill()
      }

      // Draw subtle connecting lines
      ctx.lineWidth = 0.75
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i]
          const p2 = projected[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const zDiff = Math.abs(p1.z - p2.z)

          if (dist < 120 && zDiff < 160) {
            const lineAlpha = (1 - dist / 120) * Math.min(p1.alpha, p2.alpha) * 0.35
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.x ? p1.y : 0)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(212, 185, 130, ${lineAlpha})`
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Dark Luxury Canvas Base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Atmospheric Soft Gradient Meshes */}
      <div className="absolute -top-32 -left-20 h-[550px] w-[550px] rounded-full bg-[#d4b982]/[0.03] blur-[160px]" />
      <div className="absolute top-1/4 right-0 h-[650px] w-[650px] rounded-full bg-[#d4b982]/[0.02] blur-[170px]" />
      <div className="absolute bottom-10 left-1/3 h-[500px] w-[500px] rounded-full bg-white/[0.015] blur-[150px]" />

      {/* Blueprint Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 85%)",
        }}
      />

      {/* Dynamic 3D Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-40"
      />
    </div>
  )
}
