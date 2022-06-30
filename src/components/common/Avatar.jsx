const Avatar = ({ img }) => {
  return (
    <figure
      style={{ width: '40px', margin: 0, cursor: 'pointer' }}
    >
      <img className='img-fluid rounded-circle border border-light' src={img} alt='avatar' />
    </figure>
  )
}

export default Avatar
