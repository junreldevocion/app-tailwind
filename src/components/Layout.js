
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

export default function Layout({ header, children}) {
    const [toggle, setToggle] = useState(false);
    const hasWindow = typeof window !== 'undefined';

    useEffect(() => {
        if (hasWindow) {
            const myWidth  = window.innerWidth;
            setToggle(false);
            if (myWidth <= 640) {
                setToggle(true);
            }

        }
    }, [hasWindow])

    return (
        <div className="text-gray-700 w-full h-screen flex font-roboto md:pr-8">
            <Sidebar toggle={toggle} />
            <main className="bg-primary-light w-full">
                <Navbar toggle={toggle} setToggle={setToggle} />
                <header className="p-8 font-semibold text-2xl text-primary">
                    <h1>{header}</h1>
                </header>
                {children}
            </main>
        </div>
    )
}