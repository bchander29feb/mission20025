import { memo } from 'react';
import Header from '../global/Header';
import Footer from '../global/Footer'
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    
    <>

      <Header />
      <Outlet />
      <Footer />
    
    
    </>

  );
};

export default memo(AppLayout);