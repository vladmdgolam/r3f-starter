import { useFrame } from "@react-three/fiber"
import { useContext } from "react"
import { MathUtils } from "three"

import AppContext from "./AppConext"

export const useMouseRotation = (group) => {
  const { selected } = useContext(AppContext)
  useFrame((state, delta) => {
    if (!selected) {
      const rotationY = MathUtils.damp(
        group.current.rotation.y,
        (-state.mouse.x * Math.PI) / 100,
        2.75,
        delta
      )

      group.current.rotation.y = rotationY
    }
  })
}
