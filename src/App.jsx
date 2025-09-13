import {StrictMode} from 'react'
import AppRouter from '@/components/AppRouter'
import {BrowserRouter} from 'react-router'

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </StrictMode>
  )
}

export default App
