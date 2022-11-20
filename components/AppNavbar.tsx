import Link from "next/link";

const AppNavbar = () => {
    return (
        <div>
            <Link href="/">Home</Link> | <Link href="about">About</Link>
        </div>
    );
}

export default AppNavbar;