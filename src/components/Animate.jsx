import { motion } from 'framer-motion'

const fadeId = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

const Animate = ({ children }) => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={fadeId}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default Animate
