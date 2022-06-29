export function Card ({
  flags,
  name
}) {
  return (
    <article className='card'>
      <img loading='lazy' className='card-img-top' src={flags?.svg} alt={name?.common} />
      <div className='card-body'>
        <p className='card-title'>{name?.common}</p>
      </div>
    </article>
  )
}
