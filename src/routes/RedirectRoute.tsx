import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useMemo } from "react";

export default function RedirectRoute(props: any) {
    const { user } = useAppContext();
    const isLoggedIn = useMemo(() => {
        return user !== null;
    }, [user]);

    if (isLoggedIn) {
        return <Navigate to="/protected/landing" replace />;
    }
    return props.element;
}