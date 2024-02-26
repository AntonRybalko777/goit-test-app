import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  border-radius: 14px;
  width: 274px;
  height: 268px;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  padding-top: 14px;
  padding-bottom: 8px;

  display: flex;
  justify-content: space-between;
`;

export const Model = styled.span`
  color: ${p => p.theme.color.blue};
`;

export const Info = styled.span`
  font-weight: 500;
  font-size: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Price = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: ${p => p.theme.color.gray};
  font-weight: 400;
  font-size: 12px;
`;

export const DetailsItem = styled.li`
  padding: 0 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);

  &:last-child {
    border-right: none;
    padding-right: 0;
  }
  &:first-child {
    padding-left: 0;
  }
`;

export const Button = styled.button`
  background-color: ${p => p.theme.color.blue};
  border-radius: 12px;
  padding: 12px 99px;
  border: none;
  outline: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  width: 100%;
  display: block;
  margin-top: auto;
  transition: ${p => p.theme.transition};
  &:hover,
  &:focus {
    background-color: ${p => p.theme.color.blueHover};
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const LikeButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;
  margin: 0;

  svg {
    opacity: 0.8;
    width: 18px;
    height: 18px;
  }
`;
