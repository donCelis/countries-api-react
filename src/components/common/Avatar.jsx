
const Avatar = ({ img, ...props }) => {
  return (
    <div {...props}>
      <figure
        style={{ width: '40px', margin: 0, cursor: 'pointer' }}
      >
        <img className='img-fluid rounded-circle border border-light' src={img} alt='avatar' />
      </figure>
    </div>
  )
}

export default Avatar
