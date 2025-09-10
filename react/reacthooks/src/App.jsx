import UseState from "./hooks/useState";
import './App.css'
import UseReducer from "./hooks/UserReducer";
import UseEffect from "./hooks/UseEffect";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./aaplayout/AppLayout";
import About from './compoents/About'
import Home from './compoents/Home'
import { ContextApi } from "./hooks/usecontext";
import './hooks/style.module.css'

const App  = () => {

 const router = createBrowserRouter([

   {
      path : '/',
      element : <AppLayout />,
      children: [

            {path: '/',
            element: <Home />},
      
               { path: 'about',
               element: <About />}

      ]
      
   },


 ])


  return(

   <ContextApi >
            <RouterProvider router={router} />
   </ContextApi>
  )
   
   

} 


export default App;