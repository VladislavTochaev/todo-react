import { Navigate } from 'react-router'
import MainPage from '@/pages/MainPage'

export const routes = [
  { path: '/', element: <MainPage /> },
  { path: '*', element: <Navigate to="/" replace /> },
]
