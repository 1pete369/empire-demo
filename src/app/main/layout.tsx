"use client"

import { usePathname } from "next/navigation";
import Navbar from "../components/mainPageComponents/Navbar";

export default function Layout({children} : { children : React.ReactNode}){

    const pathName = usePathname()

    const canNavbarSet = pathName.includes("/profile") || pathName.includes('/getstarted')

    return <>
        {
            !canNavbarSet &&
            <Navbar />
        }
        {children}
    </>
}