import { CarCard } from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { Filter } from 'components/Filter/Filter';
import {
  selectFilteredCars,
  selectEndofList,
  selectFilter,
} from '../../redux/selectors';
import { List, Button } from './CarsList.styled';
import { useEffect, useState } from 'react';
import { fetchData } from '../../redux/operations';
import { useDispatch } from 'react-redux';

export const CarsList = () => {
  const [page, setPage] = useState(1);
  const filteredCars = useSelector(selectFilteredCars);
  const filter = useSelector(selectFilter);
  const endOfList = useSelector(selectEndofList);
  const dispatch = useDispatch(selectFilter);

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
      <Filter />
      {filteredCars.length > 0 && (
        <>
          <List>
            {filteredCars.map(car => (
              <li key={car.id}>
                <CarCard car={car} />
              </li>
            ))}
          </List>
          {!endOfList && filter === 'All' && (
            <Button onClick={loadMore}>Load more</Button>
          )}
        </>
      )}
    </>
  );
};
