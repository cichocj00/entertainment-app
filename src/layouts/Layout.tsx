import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import { Outlet } from 'react-router-dom';

const Layout = (): JSX.Element => {
  return (
    <div className="relative h-screen bg-blue-dark px-4 md:px-6 lg:px-8">
      <Navbar styles="fixed top-0 left-0 md:max-lg:left-1/2 md:max-lg:translate-x-[-50%] md:top-6 lg:top-8 lg:bottom-8 lg:left-8" />
      <Search styles={'pt-[100px] md:pt-[132px] lg:pt-[57px]'} />
      <Outlet />
    </div>
  );
};

export default Layout;
