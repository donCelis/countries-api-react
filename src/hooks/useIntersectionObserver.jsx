import { useEffect, useState } from 'react'

const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(ref.current)

    return () => {
      observer.unobserve(ref.current)
    }
  }, [ref, options])

  return isIntersecting
}

export default useIntersectionObserver
