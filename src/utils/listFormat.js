const listFormat = (list = []) => {
  const options = {
    style: 'long',
    type: 'unit'
  }
  const formatter = new Intl.ListFormat('en', options)
  return formatter.format(list)
}

export default listFormat
