import Makes from '../../data/makes.json';
import Prices from '../../data/price.json';
import {
  changeFilterBrand,
  changeFilterPrice,
  changeFilterMileageFrom,
  changeFilterMileageTo,
} from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterBrand } from '../../redux/selectors';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const filterSchema = Yup.object().shape({
  brand: Yup.string(),
  price: Yup.string(),
  mileageFrom: Yup.number(),
  mileageTo: Yup.number(),
});

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterBrand);

  return (
    <Formik
      initialValues={{
        brand: 'All',
        price: 'All',
        mileageFrom: '',
        mileageTo: '',
      }}
      validationSchema={filterSchema}
      onSubmit={(values, actions) => {
        dispatch(changeFilterBrand(values.brand));
        dispatch(changeFilterPrice(values.price));
        dispatch(changeFilterMileageFrom(values.mileageFrom));
        dispatch(changeFilterMileageTo(values.mileageTo));
      }}
    >
      <Form>
        <Field as="select" name="brand">
          {Makes.map((make, idx) => (
            <option key={idx} value={make}>
              {make}
            </option>
          ))}
        </Field>
        <Field as="select" name="price">
          {Prices.map((price, idx) => (
            <option key={idx} value={price}>
              {price}
            </option>
          ))}
        </Field>
        <Field name="mileageFrom" type="number" />
        <Field name="mileageTo" type="number" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// <Box sx={{ width: 250, paddingBottom: '40px' }}>
//   <FormControl fullWidth>
//     <InputLabel id="make">Car brand</InputLabel>
//     <Select
//       labelId="make"
//       label="Car brand"
//       value={filter}
//       onChange={evt => dispatch(changeFilterBrand(evt.target.value))}
//     >
//       {Makes.map((make, idx) => (
//         <MenuItem key={idx} value={make}>
//           {make}
//         </MenuItem>
//       ))}
//     </Select>
//   </FormControl>
// </Box>
