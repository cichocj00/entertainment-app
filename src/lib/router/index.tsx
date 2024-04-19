import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { routes } from '@/lib/constants';
import Bookmarked from '@/pages/Bookmarked';
import Home from '@/pages/Home';
import Movies from '@/pages/Movies';
import TvSeries from '@/pages/TvSeries';
import Layout from '@/layouts/Layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={routes.HOME} element={<Home />} />,
      <Route path={routes.MOVIES} element={<Movies />} />
      <Route path={routes.TVSERIES} element={<TvSeries />} />
      <Route path={routes.BOOKMARKED} element={<Bookmarked />} />
    </Route>,
  ),
);
