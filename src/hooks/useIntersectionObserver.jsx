import { useEffect, useRef, useState } from 'react'

const useIntersectionObserver = (options) => {
  const ref = useRef(null)
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

  return { ref, isIntersecting }
}

export default useIntersectionObserver

// use the hook to observe the element
/*
const { ref, isIntersecting } = useInterSectionObserver({
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
  triggerOnce: true / false
})
 */
