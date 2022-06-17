import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { DataProvider } from '../context/DataContext'
import NavBar from '../components/common/NavBar'
import Spinner from '../components/common/Spinner'

function App () {
  return (
    <DataProvider>
      <NavBar />
      <div className='container py-5'>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>
    </DataProvider>
  )
}

export default App
