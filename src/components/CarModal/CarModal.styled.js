import styled from 'styled-components';

export const Container = styled.div`
  max-width: 461px;
`;

export const Image = styled.img`
  border-radius: 14px;
  width: 461px;
  height: 248px;
  object-fit: cover;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  margin: 0;

  svg {
    width: 24px;
    height: 24px;
    transition: ${p => p.theme.transition};

    &:hover,
    &:focus {
      fill: ${p => p.theme.color.blueHover};
      scale: 1.1;
    }
  }
`;

export const Model = styled.span`
  color: ${p => p.theme.color.blue};
`;

export const Make = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  padding-bottom: 8px;
  padding-top: 14px;
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

export const Description = styled.p`
  padding-top: 14px;
  font-size: 14px;
  line-height: 1.42857;
`;

export const Paragraph = styled.p`
  padding-top: 24px;
  padding-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-bottom: 24px;
`;

export const ConditionsItem = styled.li`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  border-radius: 35px;
  padding: 7px 14px;
  background: #f9f9f9;
`;

export const ConditionsNumber = styled.span`
  color: ${p => p.theme.color.blue};
  font-weight: 600;
  font-size: 12px;
`;

export const Link = styled.a`
  border-radius: 12px;
  padding: 12px 50px;
  width: 168px;
  height: 44px;
  background-color: ${p => p.theme.color.blue};
  color: white;
  transition: ${p => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.color.blueHover};
  }
`;
