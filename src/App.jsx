
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Footer from "./components/Footer/Footer";

import { Home,Add,Gigs,gig, myGigs,Message,Messages,Orders} from './pages/index';

import './app.scss';


function App() {

  const Layout = () =>{
    return (
      <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/gigs",
          element:<Gigs />
        },
        {
          path:"/gig/:id",
          element:<Home />
        },
        {
          path:"/Orders",
          element:<Orders />
        },
        {
          path:"/mygigs",
          element:<myGigs />
        },
        {
          path:"/add",
          element:<Add />
        },
        {
          path:"/messages",
          element:<Messages />
        },
        {
          path:"/message/:id",
          element:<Message />
        }
      ]
    },
  ]);
  

  return (
    <div>
      
     
      <RouterProvider router={router} />
    </div>
  )
}

export default App
