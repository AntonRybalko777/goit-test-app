import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: 375px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 45px;
  }
`;
