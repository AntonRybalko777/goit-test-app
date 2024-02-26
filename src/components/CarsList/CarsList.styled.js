import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${p => p.theme.color.blue};
  border: none;
  background-color: transparent;
  transition: ${p => p.theme.transition};

  &:hover,
  &:focus {
    color: ${p => p.theme.color.blueHover};
  }
`;
