import { throttle } from 'lodash-es'
import { useEffect, useState } from 'react'

const useViewport = () => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }, [])

  const onResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    const onResizeThrottled = throttle(onResize, 100)
    window.addEventListener('resize', onResizeThrottled)

    return () => {
      window.removeEventListener('resize', onResizeThrottled)
    }
  }, [])

  return { width, height }
}

export default useViewport
