import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import ErrorPage from './errorPage'
import Root from './routes/root'
import Home from './routes/home/home'
import Destination from './routes/destination/destination'
import Crew from './routes/crew/crew'
import Technology from './routes/technology/technology'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'dest',
        element: <Destination />
      },
      {
        path: 'crew',
        element: <Crew />
      },
      {
        path: 'tech',
        element: <Technology />
      }
    ],
    errorElement: <ErrorPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
