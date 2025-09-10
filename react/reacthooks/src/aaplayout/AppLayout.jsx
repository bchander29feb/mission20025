import { Outlet } from "react-router-dom"
import Footer from "../globalcom/Footer"
import Header from "../globalcom/Heade"

const AppLayout = () => {

    return (

            <>

                <Header />
                    <Outlet />
                <Footer />

            </>
    )

}

export default AppLayout