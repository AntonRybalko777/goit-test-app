import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { fetchData } from '../redux/operations';
import { useDispatch } from 'react-redux';

const Home = lazy(() => import('../pages/home'));
const Catalog = lazy(() => import('../pages/catalog'));
const Favorite = lazy(() => import('../pages/favorite'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorite />} />
      </Route>
    </Routes>
  );
};
