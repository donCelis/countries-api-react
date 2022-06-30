import { AnimatePresence, motion } from 'framer-motion'
import useVisible from '../../hooks/useVisible'

const ToTop = () => {
  const isVisible = useVisible()

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const squareVariants = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 300
      }
    }
  }

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          initial='hidden'
          animate={isVisible ? 'visible' : 'hidden'}
          exit='hidden'
          variants={squareVariants}
          onClick={handleClick}
          className='to-top'
        >
          ☝️
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ToTop
