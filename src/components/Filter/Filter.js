import Makes from '../../data/makes.json';
import { changeFilter } from '../../redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        Car brand:
        <select
          name="level"
          onChange={evt => dispatch(changeFilter(evt.target.value))}
        >
          <option value="All">All</option>
          {Makes.map((make, idx) => (
            <option key={idx} value={make}>
              {make}
            </option>
          ))}
        </select>
      </p>
    </div>
  );
};
