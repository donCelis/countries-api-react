import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// Router
import Paths from './routes'

// contextProvider
import { AuthProvider } from './context/AuthContext'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <>
    <AuthProvider>
      <BrowserRouter>
        <Paths />
      </BrowserRouter>
    </AuthProvider>
  </>
)
