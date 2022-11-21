import { ReactNode } from "react";
import AppFooter from "../components/AppFooter";
import AppNavbar from "../components/AppNavbar"

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <>
            <AppNavbar/>
            {children}
            <AppFooter/>
        </>
    );
}

export default Layout;