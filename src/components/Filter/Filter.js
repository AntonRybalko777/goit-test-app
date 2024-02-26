import Makes from '../../data/makes.json';
import { changeFilter } from '../../redux/filterSlice';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: 250, paddingBottom: '40px' }}>
      <FormControl fullWidth>
        <InputLabel id="make">Car brand</InputLabel>
        <Select
          labelId="make"
          label="Car brand"
          onChange={evt => dispatch(changeFilter(evt.target.value))}
        >
          <MenuItem value="All">All</MenuItem>
          {Makes.map((make, idx) => (
            <MenuItem key={idx} value={make}>
              {make}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
