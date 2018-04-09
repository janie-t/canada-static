import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled from 'react-emotion';
import { Images } from '../../assets';
import colors from '../../styles/colors';
import { StyledButton } from '../commons';

const Section = styled.div`
  width: 100%;
  height: 70vh;
  background: ${colors.RED};
  @media (min-width: 576px) {
    background: url(${Images.vancouverNight}) no-repeat;
    height: 30vh;
    display: flex;
  }
`;

const Container = styled.div`
  padding: 2em 1em;
  background-image: ${colors.RED};
  @media (min-width: 576px) {
    max-width: 976px;
    position: absolute;
    right: 10%;
    top: 30%;
    transform: translateY(-50%);
  }
`;

const ActionButtons = styled.div`
  font-size: 1.2em;
  padding-top: 1em;
  text-align: center;
  @media (min-width: 576px) {
    text-align: right;
    margin-bottom: 20px;
  }
`;

const MobileImage = styled.img`
  width: 100%;
  margin-top: 2em;
  @media (min-width: 576px) {
    display: none;
  }
`;

export default withSiteData(() => (
  <Section>
    <Container>
      <ActionButtons>
        <Link to="/assessment">
          <StyledButton>Free Assessment</StyledButton>
        </Link>
        <br />
        <Link to="/contact">
          <StyledButton>Contact Us</StyledButton>
        </Link>
      </ActionButtons>
      <MobileImage src={Images.vancouverNightSmall} />
    </Container>
  </Section>
));
