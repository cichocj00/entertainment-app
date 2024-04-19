import NavHome from '@/assets/icon-nav-home.svg?react';
import NavBookmark from '@/assets/icon-nav-bookmark.svg?react';
import NavMovies from '@/assets/icon-nav-movies.svg?react';
import NavTvSeries from '@/assets/icon-nav-tv-series.svg?react';

export const routes = {
  HOME: '/',
  MOVIES: '/movies',
  TVSERIES: '/tvseries',
  BOOKMARKED: '/bookmarked',
};

export const navbarItems = [
  {
    name: 'Home',
    icon: NavHome,
    route: routes.HOME,
  },
  {
    name: 'Movies',
    icon: NavMovies,
    route: routes.MOVIES,
  },
  {
    name: 'TV Series',
    icon: NavTvSeries,
    route: routes.TVSERIES,
  },
  {
    name: 'Bookmarked',
    icon: NavBookmark,
    route: routes.BOOKMARKED,
  },
];
