import styled from 'react-emotion';

const Section = styled.section`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  margin: auto;
  max-width: 80%;
  padding-top: 2em;
  @media (min-width: 576px) {
    max-width: 970px;
  }
`;

export { Section, Container };
