import { CarCard } from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/selectors';
import { List } from './CarsList.styled';

export const CarsList = () => {
  const cars = useSelector(selectCars);
  return (
    <List>
      {cars.map(car => (
        <li key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </List>
  );
};
