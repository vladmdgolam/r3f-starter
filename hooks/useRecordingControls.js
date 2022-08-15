import { button, useControls } from "leva"

import { useRecordVideo } from "./useRecordVideo"

const fps = 60

export const useRecording = ({
  fileName = "video",
  folderName = "Recording",
  size,
}) => {
  const { duration } = useControls(folderName, {
    duration: { value: 5, min: 1, max: 100, step: 1, label: "📹 duration" },
  })
  const { start } = useRecordVideo({ fileName, size, duration, fps })
  useControls(folderName, {
    "📹 rec 🔴": button(start),
  })
}
