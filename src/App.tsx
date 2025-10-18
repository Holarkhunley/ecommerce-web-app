import ReactDOM from "react-dom/client";
import "./style.css";
import Layout from "./layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "./Errorpage.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Products from "./pages/productitems.tsx";
import Productdata from "./pages/productdetails.tsx";
import { CartProvider } from "./cartcontext.tsx";
import { AuthProvider } from "./AuthContext.tsx";
import CartPage from "./pages/cart.tsx";
import Mainpage from "./main.tsx";
import LoginForm from "./pages/login-page.tsx";
import SignUpPage from "./pages/signup-page.tsx";
import AdminPage from "./Admin/AdminPage.tsx";
import Help from "./pages/help-page.tsx";
import Faq from "./pages/faq-page.tsx";
import Wishlist from "./pages/wishlist.tsx";
import DailyDeals from "./pages/daily-deals.tsx";
import NewArrivals from "./pages/new-arrivals.tsx";
import BestSeller from "./pages/best-seller.tsx";
import adminRoutes from "./Admin/adminRoutes";
import CheckOutForm from "./pages/checkOutForm.tsx";
import ProfilePage from "./pages/profile.tsx";
import ProtectedRoute from "./protectedRoute.tsx";
import AdminRoute from "./AdminRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Mainpage />,
      },
      {
        path: "/:category",
        element: <Products />,
      },
      {
        path: "/productdata/:id",
        element: <Productdata />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "faqs",
        element: <Faq />,
      },
      {
        path: "dailydeals",
        element: <DailyDeals />,
      },
      {
        path: "newarrivals",
        element: <NewArrivals />,
      },
      {
        path: "bestseller",
        element: <BestSeller />,
      },
      {
        path: "profilee",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },

  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminPage />
      </AdminRoute>
    ),
  },
  ...adminRoutes,

  {
    path: "/checkOutForm",
    element: (
      <ProtectedRoute>
        <CheckOutForm />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

const rootElement = document.getElementById("root"); // Try to find the root element

if (rootElement) {
  // If the element exists...
  ReactDOM.createRoot(rootElement).render(<App />); // Render your app
} else {
  console.error("Root element not found."); // Log an error if root is not found
}
