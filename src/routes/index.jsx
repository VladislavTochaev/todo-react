import { Navigate } from 'react-router'
import Todo from '@/pages/Todo'

export const routes = [
  { path: '/', element: <Todo /> },
  { path: '*', element: <Navigate to="/" replace /> },
]
