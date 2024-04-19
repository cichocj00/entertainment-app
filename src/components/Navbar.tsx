import Logo from '@/assets/logo.svg?react';
import avatar from '@/assets/image-avatar.png';
import clsx from 'clsx';
import { navbarItems } from '@/lib/constants';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ styles }: { styles: string }): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <div
      className={clsx(
        styles,
        'flex w-full max-w-screen-md items-center justify-between rounded-xl bg-blue-semiDark px-4 py-[18px] lg:max-h-full lg:w-[96px] lg:flex-col lg:px-0 lg:py-8',
      )}
    >
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex gap-6 lg:mt-[-350px] lg:flex-col">
        {navbarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link to={item.route} key={item.name}>
              <Icon
                className={clsx(
                  pathname === item.route ? 'fill-white' : '',
                  'size-5 cursor-pointer hover:fill-red md:size-7',
                )}
              />
            </Link>
          );
        })}
      </div>
      <div className="size-7 md:size-10">
        <img src={avatar} alt="avatar" className="w-full" />
      </div>
    </div>
  );
};

export default Navbar;
