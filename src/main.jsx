import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Routes/Root.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomeComponent from './components/pages/HomeComponent.jsx'

const Router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          path: '/', element:<HomeComponent/>
        },
        {
          path: '/products', element:<HomeComponent/>
        },
  
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={Router}/>
  </StrictMode>,
)
