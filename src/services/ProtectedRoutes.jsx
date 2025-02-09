import { Outlet, Navigate } from "react-router";
import { useAuth } from "./AuthProvider";

function ProtectedRoutes({ redirectTo = "/" }) {
    const { user } = useAuth();

    return user ? <Outlet /> : <Navigate to={redirectTo} replace />;
}

export default ProtectedRoutes;