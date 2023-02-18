import { useEffect, useRef } from 'react'

export const useClickOutside = (SetStateHandler: () => void) => {
  const domNode = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let handler = (event: MouseEvent) => {
      if (!domNode.current?.contains(event.target as Node)) {
        SetStateHandler()
      }
    }
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])
  return domNode
}
