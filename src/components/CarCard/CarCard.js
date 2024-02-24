import {
  Button,
  CardContainer,
  CardImage,
  DetailsItem,
  DetailsList,
  ImgWrapper,
  Info,
  InfoContainer,
  Model,
  Price,
} from './CarCard.styled';
import { FaRegHeart } from 'react-icons/fa';
import Modal from 'react-modal';
import NoImage from '../../images/no-image.jpg';
import { useState } from 'react';
import { CarModal } from 'components/CarModal/CarModal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px',
    borderRadius: '24px',
    maxWidth: '541px',
  },
};
Modal.setAppElement('#root');

export const CarCard = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <CardContainer>
      <ImgWrapper>
        <CardImage src={car.img ?? NoImage} alt={car.make} />
        <FaRegHeart />
        {/* <FaHeart /> */}
      </ImgWrapper>
      <InfoContainer>
        <Info>
          <span>
            {car.make} <Model>{car.model}</Model>, {car.year}
          </span>
        </Info>
        <Price>{car.rentalPrice}</Price>
      </InfoContainer>
      <DetailsList>
        <DetailsItem>{car.address.split(',')[1]} </DetailsItem>
        <DetailsItem>{car.address.split(',')[2]} </DetailsItem>
        <DetailsItem>{car.rentalCompany}</DetailsItem>
      </DetailsList>
      <DetailsList>
        <DetailsItem>{car.type}</DetailsItem>
        <DetailsItem>{car.id}</DetailsItem>
        <DetailsItem>{car.functionalities[0]}</DetailsItem>
      </DetailsList>

      <Button onClick={toggleModal}>Learn more</Button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        style={customStyles}
      >
        <CarModal car={car} onClose={toggleModal} />
      </Modal>
    </CardContainer>
  );
};
