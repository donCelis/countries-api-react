import { motion } from 'framer-motion'

const AnimationComp = () => {
  const variants = {
    run: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 0.5
      }
    },
    stop: {
      scale: [1, 1, 1],
      transition: {
        duration: 10
      }
    }
  }

  return (
    <motion.p
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%'
      }}
      initial='stop'
      animate='run'
      variants={variants}
    >
      animation
    </motion.p>
  )
}

export default AnimationComp
