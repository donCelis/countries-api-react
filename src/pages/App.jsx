import '../styles/App.css'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Spinner from '../components/Spinner'

function App () {
  return (
    <>
      <NavBar />
      <div className='App container py-5'>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  )
}

export default App
