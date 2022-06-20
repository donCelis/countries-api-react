import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { DataProvider } from '../context/DataContext'
import NavBar from '../components/common/NavBar'
import Spinner from '../components/common/Spinner'
import ToTop from '../components/common/ToTop'

function App () {
  return (
    <DataProvider>
      <NavBar />
      <main className='container py-5'>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <ToTop />
    </DataProvider>
  )
}

export default App
