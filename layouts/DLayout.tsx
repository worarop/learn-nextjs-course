import { type } from "os";
import { ReactNode } from "react";
import AppFooter from "../components/AppFooter";
import AppNavbar from "../components/AppNavbar"

type LayoutProps = {
    children: ReactNode
}

const DLayout = ({children}: LayoutProps) => {
    return (
        <>
            <h1>DashBoard Layout</h1>
            {children}
        </>
    );
}

export default DLayout;