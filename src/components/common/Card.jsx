import { motion } from 'framer-motion'

const hover = {
  y: -10,
  transition: {
    duration: 0.2
  }
}

const Card = ({ flags, name }) => (
  <motion.article whileHover={hover} className='card'>
    <img loading='lazy' className='card-img-top' src={flags?.svg} alt={name?.common} />
    <div className='card-body'>
      <p className='card-title'>{name?.common}</p>
    </div>
  </motion.article>
)

export default Card
