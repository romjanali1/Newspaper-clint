import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Main/Main'
import Home from './Home/Home'
import About from './About/About'
import Category from './Category/Category'
import SingelNews from './SingelNews/SingelNews'



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
          path: '/category/:id', element: <Category></Category>,
          loader: ({params}) => fetch(`http://localhost:3000/categorynews/${params.id}`)
          
        },
        {
          path:'/news/:id', element: <SingelNews></SingelNews>,
          loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
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
