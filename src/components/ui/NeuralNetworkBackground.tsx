"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  /** 0 = violet, 1 = accent (neon green / teal) */
  hue: number
}

const PALETTE = {
  dark: {
    bg: null as string | null, // transparent — sits over page bg
    violet: "139, 124, 246", // #8b7cf6
    accent: "43, 255, 136", // neon green #2bff88
    line: "139, 124, 246",
    lineAlpha: 0.5,
    nodeAlpha: 0.9,
  },
  light: {
    bg: null,
    violet: "109, 92, 214", // #6d5cd6
    accent: "58, 169, 154", // teal #3aa99a
    line: "109, 92, 214",
    lineAlpha: 0.35,
    nodeAlpha: 0.75,
  },
}

export function NeuralNetworkBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const themeRef = useRef(resolvedTheme)
  themeRef.current = resolvedTheme

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let nodes: Node[] = []
    let raf = 0

    const LINK_DIST = 150

    function seed() {
      // density scales with area, capped for perf
      const count = Math.min(72, Math.floor((width * height) / 22000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 1,
        hue: Math.random() < 0.25 ? 1 : 0,
      }))
    }

    function resize() {
      width = canvas!.clientWidth
      height = canvas!.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    function draw() {
      const p = themeRef.current === "light" ? PALETTE.light : PALETTE.dark
      ctx!.clearRect(0, 0, width, height)

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * p.lineAlpha
            ctx!.strokeStyle = `rgba(${p.line}, ${alpha})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const color = n.hue === 1 ? p.accent : p.violet
        ctx!.fillStyle = `rgba(${color}, ${p.nodeAlpha})`
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    function step() {
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }
      draw()
      raf = requestAnimationFrame(step)
    }

    resize()
    window.addEventListener("resize", resize)
    raf = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  )
}
