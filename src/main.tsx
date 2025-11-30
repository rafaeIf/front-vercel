import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import EditarProdutos from './routes/EditarProdutos/index.jsx'
import Error from './routes/Error/index.jsx'
import './globals.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:   <Error/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/produtos",
          element: <Produtos/>,
        },
        {
          path: "/produtos/editar/:id",
          element: <EditarProdutos/>,
        }
      ]
    }
  ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
