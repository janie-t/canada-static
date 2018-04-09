import styled from 'react-emotion';

const Section = styled.section`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  margin: auto;
  max-width: 80%;
  padding-top: 0em;
  @media (min-width: 576px) {
    max-width: 970px;
  }
`;

const StyledButton = styled.button`
  margin-bottom: 0.6em;
  width: 230px;
  height: 60px;
  border-radius: 100px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 1px;
  color: black;
  @media (min-width: 576px) {
    color: #ffffff;
    background-image: -webkit-linear-gradient(
      bottom,
      rgba(0, 0, 0, 0.075),
      rgba(255, 255, 255, 0.045)
    );
    background-image: linear-gradient(to top, rgba(255, 0, 0), rgba(255, 0, 0));
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0), inset 0 1px 0 rgba(0, 0, 0), 0 0 1px rgba(0, 0, 0),
      0 0 10px rgba(0, 0, 0);
  }
`;

export { Section, Container, StyledButton };
