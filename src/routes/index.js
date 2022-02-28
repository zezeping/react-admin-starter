import { Navigate } from 'react-router-dom'
import Home from '../views/home'
import NotFound from '../views/404'
import Login from '../views/login'
import Settings from '../views/settings'
import SettingsDefault from '../views/settings/default'
import Menus from '../views/settings/menus'
import Roles from '../views/settings/roles'

export default defineRoutes([
  { path: '404', element: <NotFound /> },
  { path: 'login', element: <Login /> },
  { path: 'home', element: <Home /> },
  { path: 'settings', element: <Settings />,
    children: [
      { index: true, element: <SettingsDefault /> },
      { path: 'menus', element: <Menus /> },
      { path: 'roles', element: <Roles /> },
      { path: '*', element: <Navigate replace to="" /> },
    ]
  },
  { path: '/', extract: true, element: <Navigate replace to="/home" /> },
  { path: '*', element: <Navigate replace to="/404" /> },
])

export function defineRoutes(routes) {
  const iterateUseRoute = (route) => {
    //if (route.children) {
    //  route.children = route.children.map(route => iterateUseRoute(route))
    //}
    //route.component = route.component
    return route
  }
  return routes.map(route => iterateUseRoute(route))
}