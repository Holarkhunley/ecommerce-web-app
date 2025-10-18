import AdminPage from "./AdminPage";
import Dashboard from "./adminPages/Dashboard";
import ProductForm from "./adminPages/Products";
import ClientInfo from "./adminPages/Customers";
import CustomerOrders from "./adminPages/Orders";
import Inventory from "./adminPages/Inventory";
import Transactionss from "./adminPages/Transactions";
import TrafficChart from "./adminPages/traffic-and-Conversion";
import ManageUser from "./adminPages/ManageUser";
import SupplierForm from "./adminPages/SuppliersForm";
import NotificationsPage from "./adminPages/NotificationsPage";

const adminRoutes = [
  {
    path: "/admin",
    element: <AdminPage />,
    children: [
      { index: true, element: <Dashboard  /> },       // /admin
      { path: "product", element: <ProductForm /> }, // /admin/addproduct
      { path: "customer", element: <ClientInfo /> } ,
      { path: "suppliers", element: <SupplierForm /> } ,
      { path: "orders", element: <CustomerOrders /> },
      { path: "inventory", element: <Inventory /> }, 
      { path: "transactions", element: <Transactionss /> },
      {path:"traffic&conversion",element:<TrafficChart />},
      {path:"manageuser",element:<ManageUser />},
      {path:"notifications",element:<NotificationsPage />}
    ]
  }
];
export default adminRoutes