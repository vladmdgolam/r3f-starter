import { useEffect } from "react"

const useHotkey = (targetKey, callback, deps = []) => {
  const handleKeyDown = ({ key }) => key === targetKey && callback()

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps])
}

export default useHotkey
