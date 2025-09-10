import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Movie from './pages/Movie'
import Error from './pages/Error'
import AppLayout from './layout/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import getmoive from './api/getmoive'

function App() {

  
      const router = createBrowserRouter([


        {       
          path : '/',
          element : <AppLayout />,
          errorElement :<Error />,

          children: [

            {
            path: '/',
            element :<Home />
          },
          {
            path: 'about',
            element :<About />
          },
          {
            path: 'service',
            element :<Service />
          },
          {
            path : 'contact',
            element : <Contact />
          },
          {
            path : 'movie',
            element : <Movie />,
            loader: getmoive
          }

          ]

        },
          


      ])

      return <RouterProvider router ={router} />

}

export default App
