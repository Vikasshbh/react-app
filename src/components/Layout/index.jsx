import Header from "../Header"
import Footer from "../footer/Footer"
import { Outlet } from "react-router-dom"

const Layout = ({children}) => {
    return (
        <>
            <Header/>
           <Outlet/>
           <Footer/> 
        </>
    )
}

export default Layout