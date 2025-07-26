import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './components/Home/Home';
import Post from './components/Home/Card/Post/Post.jsx';
import About from './components/About/About.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        index:true,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Home></Home>
      },
      {
        path:'/post/:id',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element:<Post></Post>
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
 
     <RouterProvider router={router} />,
  
)
