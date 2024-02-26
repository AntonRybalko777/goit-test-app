import { CarCard } from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';
import { List } from 'components/CarsList/CarsList.styled';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const FavCarsList = () => {
  const cars = useSelector(selectFavorite);

  return (
    <>
      {cars.length > 0 && (
        <>
          <List>
            {cars.map(car => (
              <li key={car.id}>
                <CarCard car={car} />
              </li>
            ))}
          </List>
        </>
      )}
    </>
  );
};
