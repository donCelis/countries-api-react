import { useEffect, useState } from 'react'

const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 900)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`to-top ${isVisible ? 'visible' : ''}`}
      onClick={handleClick}
    >
      ☝️
    </div>
  )
}

export default ToTop
