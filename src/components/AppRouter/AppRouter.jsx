import {Route, Routes} from 'react-router'
import {routes} from '@/routes'

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
    </Routes>
  )
}

export default AppRouter
