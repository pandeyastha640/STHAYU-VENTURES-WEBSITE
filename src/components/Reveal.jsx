import { useEffect, useRef } from "react"
import gsap from "gsap"

function Reveal({
  children,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 45,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true,
        },
      },
    )

    return () => {
      animation.kill()
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  )
}

export default Reveal