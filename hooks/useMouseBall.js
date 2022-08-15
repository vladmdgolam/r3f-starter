import { useSphere } from "@react-three/cannon"
import { useFrame } from "@react-three/fiber"

const useMouseBall = (props) => {
  const [, { position }] = useSphere(() => ({
    type: "Kinematic",
    args: [0.5],
    ...props,
  }))
  useFrame(({ mouse: { x, y }, viewport: { height, width } }) =>
    position.set((x * width) / 2, (y * height) / 2, 0)
  )
}

export default useMouseBall
