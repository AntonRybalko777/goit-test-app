import { CarsList } from 'components/CarsList/CarsList';
import { Filter } from 'components/Filter/Filter';

export default function Catalog() {
  return (
    <div>
      <Filter />
      <CarsList />
    </div>
  );
}
