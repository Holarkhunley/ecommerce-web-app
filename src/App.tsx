
import ReactDOM from 'react-dom/client'
import './style.css'
import Layout from './layout.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Errorpage from './Errorpage.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Products from './pages/productitems.tsx';
import Productdata from './pages/productdetails.tsx'
import {CartProvider} from './cartcontext.tsx'
import CartPage from './pages/cart.tsx'
import Mainpage from './main.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<Errorpage />,
    children: [
      {
        index:true,
        element:<Mainpage />
      },
      {
        path:"/:category",
        element:<Products />
      },
      {
        path:"/productdata/:id",
        element:<Productdata />
      },
      {
        path: "cart",
        element: <CartPage />
      }
    ]
  },
]);


function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

const rootElement = document.getElementById('root');  // Try to find the root element

if (rootElement) {  // If the element exists...
  ReactDOM.createRoot(rootElement).render(<CartProvider><App /></CartProvider>);  // Render your app
} else {
  console.error("Root element not found.");  // Log an error if root is not found
}