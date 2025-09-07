import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles'
import { BrowserRouter } from 'react-router'
import AppRouter from '@/components/AppRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
)
