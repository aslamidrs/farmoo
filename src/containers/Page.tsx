import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import NavbarContainer from "./Navbar";

export default function PageContainer() {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <Outlet />
            <NavbarContainer navigate={navigate} />
        </div>
    )
}