import MainImage from '../../images/cars_home.png';
import {
  Title,
  Header,
  Paragraph,
  Phone,
  StyledLink,
  PhoneLink,
} from './Welcome.styled';

export const Welcome = () => {
  return (
    <div>
      <Title>Welcome to a Rental Car Service in Ukraine</Title>
      <img src={MainImage} alt="cars" />
      <Header>7 years on the Ukraine market</Header>
      <Paragraph>
        We have been working in the Ukrainian market for more than 7 years and
        have significant experience in the field of daily car rental. We will be
        happy to share our experience and offer the best cars for your trip.
        <StyledLink to="/catalog">Check our Catalog</StyledLink>
      </Paragraph>
      <Header>round the clock work 24/7</Header>
      <Paragraph>
        24/7 support guarantees convenience and reliability during the car
        rental process. We are always ready to help you choose the right car for
        you and provide full advice on its use. Feel free to contact us at
        <Phone> +38(073)0000000</Phone>
        <PhoneLink href="tel:+380730000000">Contact Us</PhoneLink>
      </Paragraph>
    </div>
  );
};
