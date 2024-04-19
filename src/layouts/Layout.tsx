import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = (): JSX.Element => {
  return (
    <div className="relative h-screen bg-blue-dark lg:px-8">
      <Navbar styles="fixed top-0 md:max-lg:left-1/2 md:max-lg:translate-x-[-50%] lg:top-8 lg:bottom-8" />
      {/* <Search /> */}
      <Outlet />
    </div>
  );
};

export default Layout;
