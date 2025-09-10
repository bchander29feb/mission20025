import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../globalCom/Footer";
import Header from "../globalCom/Header";

const AppLayout = () => {
  const navigation = useNavigation()
    return (
        <>

       <Header />
       {navigation.state === 'loading' ? <h1> Loading .... </h1> : <Outlet />  }             
       <Footer />
        
        </>
    )

}

export default AppLayout;