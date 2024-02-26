import { CarCard } from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { selectFilteredCars } from '../../redux/selectors';
import { List, Button } from './CarsList.styled';
import { useEffect, useState } from 'react';
import { fetchData } from '../../redux/operations';
import { useDispatch } from 'react-redux';

export const CarsList = () => {
  const filteredCars = useSelector(selectFilteredCars);
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
      {filteredCars.length > 0 && (
        <>
          <List>
            {filteredCars.map(car => (
              <li key={car.id}>
                <CarCard car={car} />
              </li>
            ))}
          </List>
          <Button onClick={loadMore}>Load more</Button>
        </>
      )}
    </>
  );
};