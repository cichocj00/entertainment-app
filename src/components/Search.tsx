import SearchIcon from '@/assets/icon-search.svg?react';
import clsx from 'clsx';

const Search = ({ styles }: { styles: string }): JSX.Element => {
  return (
    <div
      className={clsx(
        styles,
        'mx-auto flex w-full max-w-screen-md items-center gap-4 lg:m-0 lg:ml-[164px]',
      )}
    >
      <label htmlFor="search">
        <SearchIcon className="size-6 stroke-white md:size-8" />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search for movies or TV series"
        className="body-md  w-full  translate-y-1 bg-blue-dark pb-2 text-white outline-none focus:border-b focus:border-white"
      />
    </div>
  );
};

export default Search;
