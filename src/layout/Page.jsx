import { Helmet } from 'react-helmet-async'

const Page = ({ children, title = '', name = '' }) => {
  return (
    <>
      <Helmet>
        <title>{`${title} | Countries`}</title>
      </Helmet>
      <section className={name}>
        {children}
      </section>
    </>
  )
}

export default Page
