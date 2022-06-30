import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

// Router
import Paths from './routes'

// contextProvider
import { AuthProvider } from './context/AuthContext'
import { HelmetProvider } from 'react-helmet-async'

const app = document.getElementById('app')
const container = createRoot(app)

container.render(
  <AuthProvider>
    <HelmetProvider>
      <BrowserRouter>
        <Paths />
      </BrowserRouter>
    </HelmetProvider>
  </AuthProvider>
)
