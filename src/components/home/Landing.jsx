import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled, { css } from 'react-emotion';
import background1 from '../../assets/images/background1.png';
import next from '../../assets/images/arrow-right.png';
import content from '../../content';
import colors from '../../styles/colors';
import { Section, Container } from '../commons';

const CLASSES = {
  section: 'pure-g',
  container: 'pure-u-0 pure-u-sm-1 pure-u-md-1 pure-u-lg-1 pure-u-xl-1',
  button: 'pure-button pure-button-primary',
  halfCol: 'pure-u-1-2',
};

const HOME = content('pages.home');

const Background = styled.div`
  background-image: url(${background1});
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: 1;
  width: 100%;
  height: 580px;
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

const Signup = styled.div`
  margin-top: 2em;
  background-color: #009edb;
  color: white;
  height: 30px;
  width: 100px;
  text-align: center;
  padding: 5px;
  border-radius: 4px;
`;

const Contact = styled.div`
  padding: 5px;
  border-radius: 4px;
  margin-top: 2em;
  text-align: center;
  color: white;
  height: 30px;
  width: 100px;
  border: 1px solid white;
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
        <div className={CLASSES.halfCol}>SIGNUP BUTTON</div>
      </Container>
    </Background>
  </Section>
);

export default Landing;
