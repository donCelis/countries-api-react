import '../styles/App.css'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { DataProvider } from '../context/DataContext'

function App () {
  return (
    <DataProvider>
      <NavBar />
      <div className='App container py-5'>
        <Suspense fallback={<div>loading suspense...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </DataProvider>
  )
}

export default App
