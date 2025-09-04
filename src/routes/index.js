import App from '@/App'
import {Navigate} from 'react-router'

export const routes = [
  {path: '/', element: <App />},
  {path: '*', element: <Navigate to='/' replace />},
]