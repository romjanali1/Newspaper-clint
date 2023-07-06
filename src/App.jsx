import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Main/Main'
import Home from './Home/Home'
import About from './About/About'



function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/', element: <Home></Home>
          
        },
        {
          path: '/home', element: <Home></Home>
          
        },
        {
          path: '/about', element: <About></About>
          
        },
        {
          path: '/', element: <Home></Home>
          
        }

      ]
    }

  ])

  return (
    <div>
       <RouterProvider router={router} />
    </div>
    
  )
}

export default App
