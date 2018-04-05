import styled from 'react-emotion';
import colors from '../styles/colors';

const Section = styled.section`
  width: 100%;
  height: 50%;
`;

const Container = styled.div`
  margin: auto;
  max-width: 80%;
  padding-top: 2em;
  @media (min-width: 576px) {
    max-width: 970px;
  }
`;


const StyledButton = styled.button`
width: 80%;
margin-bottom: 0.1em;
top: calc(50% - 30px);
right: calc(50% - 115px);
width: 230px;
height: 60px;
background-image: -webkit-linear-gradient(bottom, rgba(0,0,0,.075), rgba(255,255,255,.045));
background-image: linear-gradient(to top, rgba(255,0,0), rgba(255,0,0));
  box-shadow: inset 0 -1px 0 rgba(0,0,0),inset 0 1px 0 rgba(0,0,0), 0 0 1px rgba(0,0,0), 0 0 10px rgba(0,0,0);
border-radius: 100px;
color: #ffffff;
line-height: 30px;
text-align: center;
letter-spacing: 1px;
overflow: hidden;

}
`;


const Signup = styled.button`
width: 80%;
margin-bottom: 0.1em;
top: calc(50% - 30px);
right: calc(50% - 115px);
width: 230px;
height: 60px;
background-image: -webkit-linear-gradient(bottom, rgba(0,0,0,.075), rgba(255,255,255,.045));
background-image: linear-gradient(to top, rgba(255,0,0), rgba(255,0,0));
  box-shadow: inset 0 -1px 0 rgba(0,0,0),inset 0 1px 0 rgba(0,0,0), 0 0 1px rgba(0,0,0), 0 0 10px rgba(0,0,0);
border-radius: 100px;
color: #ffffff;
line-height: 30px;
text-align: center;
letter-spacing: 1px;
`;

export { Section, Container, StyledButton, Signup };
