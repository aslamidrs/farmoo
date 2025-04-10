import { useMemo } from "react";
import { useAppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props: any) {
    const { user } = useAppContext();
    const isLoggedIn = useMemo(() => {
        return user !== null;
    }, [user]);
    if (!isLoggedIn) {
        return props.element;
    }
    return <Navigate to="/login" replace />;
    
}