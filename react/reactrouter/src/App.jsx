import { createBrowserRouter, RouterProvider, useNavigation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import AppLayout from './layout/AppLayout'
import Error from './pages/Error'
import movieLoader from './api/movieapi'

function App() {
 


 const router = createBrowserRouter([

    {
      path: '/',
      element: <AppLayout />,
      errorElement: <Error />,

      children: [
      { path: '/',
      element : <Home />,
      loader: movieLoader,
      
    },
    { 
      path: 'about',
      element : <About />
    },
    { 
      path: 'contact',
      element : <Contact />
    },
    { 
      path: 'service',
      element : <Service />
    },
      ]

    }

 ])

 
  return <RouterProvider router={router} />
 
}

export default App
