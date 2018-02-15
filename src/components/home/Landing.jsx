import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled from 'react-emotion';
import background1 from '../../assets/images/background1.png';
import next from '../../assets/images/arrow-right.png';
import content from '../../content';
import colors from '../../styles/colors';
import { Section, Container } from '../commons';

const CLASSES = {
  halfCol: 'pure-u-1-2',
};

const HOME = content('pages.home');

const Background = styled.div`
  flex: 1;
  background-image: url(${background1});
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: 1;
  height: 700px;
`;

const Intro = styled.div`
  font-size: 2em;
  padding-top: 2em;
  padding-bottom: 1em;
  margin-bottom: 1em;
  border-bottom: 2px solid;
  border-color: ${colors.LIGHTGREEN};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  padding-top: 3.5em;
  padding-left: 2em;
  text-align: right;
`;

const Signup = styled.button`
background: ${colors.DARKBLUE};
color: white;
text-transform: uppercase;
padding: 1rem 2rem;
margin-bottom: 1em;
transition: background-color 200ms ease, color 200ms ease;
&:hover {
  background-color: white;
  color: ${colors.DARKBLUE};
  border: 1px solid #009edb;
}
width: 60%;
border-radius: 5px;
`;

const Contact = styled.button`
background: transparent;
color: white;
padding: 1rem 2rem;
border: 1px solid white;
transition: background-color 200ms ease, color 200ms ease;
&:hover {
  background-color: white;  
  color: ${colors.DARKBLUE};
}
width: 60%;
border-radius: 5px;
`;

const Landing = () => (
  <Section>
    <Background>
      <Container>
        <div className={CLASSES.halfCol}>
          <Intro>{HOME.landing_text}</Intro>
          <Row>
            <Quote>{HOME.customer_quote}</Quote>
            <Next src={next} />
          </Row>
          <Author>{HOME.author}</Author>
        </div>
        <div className={CLASSES.halfCol}>
          <ActionButtons>
            <Signup>Sign up now</Signup>
            <Contact>Contact Us</Contact>
          </ActionButtons>
        </div>
      </Container>
    </Background>
  </Section>
);

export default Landing;
