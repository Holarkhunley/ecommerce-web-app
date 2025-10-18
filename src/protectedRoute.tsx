import { Navigate } from "react-router-dom";
import { AuthContext} from "./AuthContext";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext);

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }


  // Logged in AND admin → show the page
  return children;
}

export default ProtectedRoute;