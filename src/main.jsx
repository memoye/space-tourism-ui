import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import ErrorPage from './errorPage'
import Root from './routes/root'
import Home from './routes/home/home'
import Destination, { DestinationCard } from './routes/destination/destination'
import Crew from './routes/crew/crew'
import Technology from './routes/technology/technology'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: 'dest',
            element: <Destination />,
            children: [
              {
                path: '/dest/:name',
                element: <DestinationCard />,
                errorElement: <div>Opps</div>
              },
            ]
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

      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
