import useVisible from '../../hooks/useVisible'

const ToTop = () => {
  const isVisiable = useVisible()

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`to-top ${isVisiable ? 'visible' : ''}`}
      onClick={handleClick}
    >
      ☝️
    </div>
  )
}

export default ToTop
