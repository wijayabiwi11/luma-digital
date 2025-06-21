"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FrameComponent } from "./FrameComponent"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

const GRID_SIZE = 12
const CELL_SIZE = 60 // pixels per grid cell

interface Frame {
  id: number
  video: string
  defaultPos: { x: number; y: number; w: number; h: number }
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
}

const initialFrames: Frame[] = [
  {
    id: 1,
    video: "/placeholder.jpg",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "/placeholder.svg",
    edgeHorizontal: "/placeholder.svg",
    edgeVertical: "/placeholder.svg",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
  },
  {
    id: 2,
    video: "/placeholder.jpg",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "/placeholder.svg",
    edgeHorizontal: "/placeholder.svg",
    edgeVertical: "/placeholder.svg",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
  },
  {
    id: 3,
    video: "/placeholder.jpg",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner: "/placeholder.svg",
    edgeHorizontal: "/placeholder.svg",
    edgeVertical: "/placeholder.svg",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
  },
  {
    id: 4,
    video: "/placeholder.jpg",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "/placeholder.svg",
    edgeHorizontal: "/placeholder.svg",
    edgeVertical: "/placeholder.svg",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
  },
  {
    id: 5,
    video: "/placeholder.jpg",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "/placeholder.svg",
    edgeHorizontal: "/placeholder.svg",
    edgeVertical: "/placeholder.svg",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
  },
  {
    id: 6,
    video: "/placeholder.jpg",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: "/placeholder.svg",
    edgeHorizontal: "/placeholder.svg",
    edgeVertical: "/placeholder.svg",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
  },
  {
    id: 7,
    video: "/placeholder.jpg",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    corner: "/placeholder.svg",
    edgeHorizontal: "/placeholder.svg",
    edgeVertical: "/placeholder.svg",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
  },
  {
    id: 8,
    video: "/placeholder.jpg",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    corner: "/placeholder.svg",
    edgeHorizontal: "/placeholder.svg",
    edgeVertical: "/placeholder.svg",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
  },
  {
    id: 9,
    video: "/placeholder.jpg",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    corner: "/placeholder.svg",
    edgeHorizontal: "/placeholder.svg",
    edgeVertical: "/placeholder.svg",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
  },
]

export default function DynamicFrameLayout() {
  const [frames, setFrames] = useState<Frame[]>(initialFrames)
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)
  const [hoverSize, setHoverSize] = useState(6)
  const [gapSize, setGapSize] = useState(4)
  const [showControls, setShowControls] = useState(false)

  const getRowSizes = () => {
    if (hovered === null) {
      return "4fr 4fr 4fr"
    }
    const { row } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getColSizes = () => {
    if (hovered === null) {
      return "4fr 4fr 4fr"
    }
    const { col } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom"
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right"
    return `${vertical} ${horizontal}`
  }

  const updateFrameProperty = (id: number, property: keyof Frame, value: number) => {
    setFrames(frames.map((frame) => (frame.id === id ? { ...frame, [property]: value } : frame)))
  }

  const toggleControls = () => {
    setShowControls(!showControls)
  }

  return (
    <div className="relative w-full h-full">
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateRows: getRowSizes(),
          gridTemplateColumns: getColSizes(),
          gap: `${gapSize}px`,
        }}
      >
        {frames.map((frame) => {
          const row = Math.floor(frame.defaultPos.y / 4)
          const col = Math.floor(frame.defaultPos.x / 4)
          const isHoveredCell = hovered?.row === row && hovered?.col === col

          return (
            <motion.div
              key={frame.id}
              className="relative"
              onHoverStart={() => setHovered({ row, col })}
              onHoverEnd={() => setHovered(null)}
              style={{
                transformOrigin: getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y),
              }}
            >
              <FrameComponent
                video={frame.video}
                width="100%"
                height="100%"
                corner={frame.corner}
                edgeHorizontal={frame.edgeHorizontal}
                edgeVertical={frame.edgeVertical}
                mediaSize={frame.mediaSize}
                borderThickness={frame.borderThickness}
                borderSize={frame.borderSize}
                onMediaSizeChange={(value) => updateFrameProperty(frame.id, "mediaSize", value)}
                onBorderThicknessChange={(value) => updateFrameProperty(frame.id, "borderThickness", value)}
                onBorderSizeChange={(value) => updateFrameProperty(frame.id, "borderSize", value)}
                showControls={showControls}
                label={`Frame ${frame.id}`}
              />
            </motion.div>
          )
        })}
      </div>

      <Button
        onClick={toggleControls}
        className="fixed bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white z-50"
      >
        {showControls ? "Hide Controls" : "Show Controls"}
      </Button>
    </div>
  )
}
