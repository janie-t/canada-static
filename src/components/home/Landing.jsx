import React from 'react';
import { Link } from 'react-static';
import styled from 'react-emotion';
import { Images } from '../../assets';
import content from '../../content';
import colors from '../../styles/colors';
import { Section, Container } from '../commons';

// const CLASSES = {
//   halfCol: 'pure-u-1-2',
// };

const HOME = content('pages.home');

const Background = styled.div`
  background-size: 100%;
  z-index: 1;
  height: 100%;
  background:  url(${Images.homePattern}) ${colors.GREEN};
`;

const Heading = styled.div`
  font-size: 1.3em;
  text-align: center;
  color: ${colors.WHITE};
  @media (min-width: 576px) {
    font-size: 2em;
    padding-top: 2em;
    padding-bottom: 1em;
    margin-bottom: 1em;
    border-bottom: 2px solid;
    border-color: ${colors.LIGHTGREEN};
  }
`;

const Subheading = styled.div`
  font-size: 1em;
  text-align: center;
  @media (min-width: 576px) {
    font-size: 2em;
    padding-top: 2em;
    padding-bottom: 1em;
    margin-bottom: 1em;
    border-bottom: 2px solid;
    border-color: ${colors.LIGHTGREEN};
  }
`;

const Quote = styled.div`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding-top: 0.5em;
  margin-left: 1.5em;
  width: 70%;
`;

const Next = styled.img`
  width: 30px;
  height: 80px;
  margin-top: 1em;
`;

const Author = styled.div`
  width: 100%;
  color: #bbe582;
  font-size: 1.2em;
  text-transform: uppercase;
  margin-top: 10px;
  margin-left: 2em;
`;

const ActionButtons = styled.div`
  font-size: 1.2em;
  padding-top: 1em;
  text-align: center;
  @media (min-width: 576px) {
    padding-top: 3.5em;
    padding-left: 2em;
    text-align: right;
  }
`;

const Signup = styled.button`
width: 90%;
margin: auto;
text-transform: uppercase;
transition: background-color 200ms ease, color 200ms ease;
background-color: ${colors.ORANGE};
color: ${colors.WHITE};
border: 1px solid ${colors.WHITE};
padding: 1rem 2rem;
margin-bottom: 1em;
border-radius: 5px;
&:hover {
  background-color: ${colors.WHITE};
  color: ${colors.ORANGE};
  border: 1px solid ${colors.ORANGE};
}
@media (min-width: 576px) {
  background: ${colors.DARKBLUE};
  color: white;
  &:hover {
    background-color: white;
    color: ${colors.DARKBLUE};
    border: 1px solid ${colors.BLUE};
  }
  width: 60%;
}
`;

const Contact = styled.button`
background: transparent;
color: ${colors.WHITE};
padding: 1rem 2rem;
border: 1px solid ${colors.WHITE};
transition: background-color 200ms ease, color 200ms ease;
&:hover {
  background-color: white;  
  color: ${colors.DARKBLUE};
}
width: 60%;
border-radius: 5px;
`;

const Roll = styled.img`
  width: 70%;
  bottom: 0;
`
const Dash = styled.img`
  width: 30%;
  position: relative;
  right: 0;
  bottom: 0;
`

const Landing = () => (
  <Section>
    <Background>
      <Container>
        {/* <div className={CLASSES.halfCol}> */}
        <Heading>{HOME.landing_heading}</Heading>
        <Subheading>{HOME.landing_subheading}</Subheading>
        {/* <div className={CLASSES.halfCol}> */}
        <ActionButtons>
          <Signup>Sign up now</Signup>
          <Contact>Contact Us</Contact>
        </ActionButtons>
        {/* </div> */}
        <Quote>{HOME.customer_quote}</Quote>
        <Next src={Images.arrowRight} />
        <Author>{HOME.author}</Author>
        {/* </div> */}

      </Container>
      <Roll src={Images.ballRoll} />
      <Dash src={Images.dash} />
    </Background>
  </Section>
);

export default Landing;
