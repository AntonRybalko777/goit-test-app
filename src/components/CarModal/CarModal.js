import NoImage from '../../images/no-image.jpg';
import {
  Image,
  Button,
  Model,
  Make,
  DetailsList,
  Description,
  DetailsItem,
  Paragraph,
  ConditionsList,
  ConditionsItem,
  ConditionsNumber,
  Link,
} from './CarModal.styled';
import { IoCloseSharp } from 'react-icons/io5';

export const CarModal = ({ car, onClose }) => {
  const rentalConditions = car.rentalConditions.split('\n');
  const minAge = rentalConditions[0].split(': ')[1];

  return (
    <>
      <Button onClick={onClose}>
        <IoCloseSharp />
      </Button>
      <Image src={car.img ?? NoImage} alt={car.make} />
      <Make>
        {car.make} <Model>{car.model}</Model>, {car.year}
      </Make>
      <DetailsList>
        <DetailsItem>{car.address.split(',')[1]} </DetailsItem>
        <DetailsItem>{car.address.split(',')[2]} </DetailsItem>
        <DetailsItem>Id: {car.id}</DetailsItem>
        <DetailsItem>Year: {car.year}</DetailsItem>
        <DetailsItem>Type: {car.type}</DetailsItem>
      </DetailsList>
      <DetailsList>
        <DetailsItem>Fuel Consumption: {car.fuelConsumption}</DetailsItem>
        <DetailsItem>Engine Size: {car.engineSize}</DetailsItem>
      </DetailsList>
      <Description>{car.description}</Description>
      <Paragraph>Accessories and functionalities:</Paragraph>
      <DetailsList>
        {car.accessories.map((accessory, idx) => (
          <DetailsItem key={idx}> {accessory}</DetailsItem>
        ))}
      </DetailsList>
      <DetailsList>
        {car.functionalities.map((functionality, idx) => (
          <DetailsItem key={idx}> {functionality}</DetailsItem>
        ))}
      </DetailsList>
      <Paragraph>Rental Conditions:</Paragraph>
      <ConditionsList>
        <ConditionsItem>
          Minimum age: <ConditionsNumber>{minAge}</ConditionsNumber>
        </ConditionsItem>
        <ConditionsItem>{rentalConditions[1]}</ConditionsItem>
        <ConditionsItem>{rentalConditions[2]}</ConditionsItem>
        <ConditionsItem>
          Mileage:
          <ConditionsNumber>
            {car.mileage.toLocaleString('en-GB')}
          </ConditionsNumber>
        </ConditionsItem>
        <ConditionsItem>
          Price: <ConditionsNumber>{car.rentalPrice}</ConditionsNumber>
        </ConditionsItem>
      </ConditionsList>
      <Link href="tel:+380730000000">Rental car</Link>
    </>
  );
};
