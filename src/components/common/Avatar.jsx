import { forwardRef } from 'react'

const Avatar = forwardRef(({ img, ...props }, ref) => (
  <div ref={ref} {...props}>
    <figure
      style={{ width: '40px', margin: 0, cursor: 'pointer' }}
    >
      <img className='img-fluid rounded-circle border border-light' src={img} alt='avatar' />
    </figure>
  </div>
))

export default Avatar
