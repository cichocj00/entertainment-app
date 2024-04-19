import Logo from '@/assets/logo.svg?react';
import NavHome from '@/assets/icon-nav-home.svg?react';
import NavBookmark from '@/assets/icon-nav-bookmark.svg?react';
import NavMovies from '@/assets/icon-nav-movies.svg?react';
import NavTvSeries from '@/assets/icon-nav-tv-series.svg?react';
import avatar from '@/assets/image-avatar.png';
import clsx from 'clsx';

const Navbar = ({ styles }: { styles: string }): JSX.Element => {
  return (
    <div
      className={clsx(
        styles,
        'flex w-full max-w-screen-md items-center justify-between rounded-xl bg-blue-semiDark px-4 py-[18px] lg:max-h-full lg:w-[96px] lg:flex-col lg:px-0 lg:py-12',
      )}
    >
      <Logo />
      <div className="flex gap-6 lg:mt-[-450px] lg:flex-col">
        <NavHome className=" size-5 cursor-pointer fill-white hover:fill-red md:size-7" />
        <NavMovies className="size-5 cursor-pointer hover:fill-red md:size-7" />
        <NavTvSeries className="size-5 cursor-pointer hover:fill-red md:size-7" />
        <NavBookmark className="size-5 cursor-pointer hover:fill-red md:size-7" />
      </div>
      <div className="size-7 md:size-10">
        <img src={avatar} alt="avatar" className="w-full" />
      </div>
    </div>
  );
};

export default Navbar;
