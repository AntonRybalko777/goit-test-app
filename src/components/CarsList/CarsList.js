import { CarCard } from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/selectors';
import { List, Button } from './CarsList.styled';
import { useEffect, useState } from 'react';
import { fetchData } from '../../redux/operations';
import { useDispatch } from 'react-redux';

export const CarsList = () => {
  const cars = useSelector(selectCars);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchData(page));
    }
  }, [dispatch, page]);

  const loadMore = () => {
    setPage(prevState => (prevState += 1));
  };
  return (
    <>
      {cars.length > 0 && (
        <List>
          {cars.map(car => (
            <li key={car.id}>
              <CarCard car={car} />
            </li>
          ))}
        </List>
      )}

      {cars.length > 0 && page === 1 && (
        <Button onClick={loadMore}>Load more</Button>
      )}
    </>
  );
};
