import { useFrame } from "@react-three/fiber"
import loadMP4Module, { isWebCodecsSupported } from "mp4-wasm"
import { useEffect, useRef, useState } from "react"
import { Clock } from "three"
import { downloadFile, getISO8601Date } from "../helpers"

export const useRecordVideo = ({
  fileName = "video",
  size = { width: 1920, height: 1080 },
  duration = 10,
  fps = 60,
}) => {
  const { width, height } = size

  const [encoder, setEncoder] = useState(null)
  const [clock] = useState(new Clock(false))
  const frames = useRef([])

  useEffect(() => {
    if (isWebCodecsSupported())
      loadMP4Module().then(({ createWebCodecsEncoder }) => {
        const e = new createWebCodecsEncoder({ width, height, fps })
        setEncoder(e)
      })
    return () => setEncoder(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height, fps])

  // Start encoding loop
  const start = () => clock.start()

  useFrame(({ gl }) => {
    if (clock.running) {
      const currentPlayhead = clock.getElapsedTime()
      if (clock.running && currentPlayhead < duration) {
        // eslint-disable-next-line no-undef
        createImageBitmap(gl.domElement).then((bitmap) =>
          frames.current.push(bitmap)
        )
      } else {
        clock.stop()
        clock.elapsedTime = 0
        finishRecording()
      }
    }
  })

  const finishRecording = async () => {
    for (let frame of frames.current) {
      await encoder.addFrame(frame)
    }

    const buf = await encoder.end()
    // eslint-disable-next-line no-undef
    const blob = new Blob([buf])

    for (let frame of frames.current) frame.close()
    frames.current = []

    downloadFile(`${fileName} ${getISO8601Date()}.mp4`, blob)
  }

  return { start }
}
