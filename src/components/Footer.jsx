import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled from 'react-emotion';
import { map } from 'lodash';
import { Icons } from '../assets';
import content from '../content';
import colors from '../styles/colors';
import { Section, Container } from './commons';

const Background = styled.div`
  background-color: ${colors.DARKBLUE};
  color: white;
  width: 100%;
  height: 60px;
  display: flex;
`;

const Footer = () => (
  <Section>
    <Background>
      <Container>
        Copyright &copy; 2018 Thankyou Payroll.
      </Container>
    </Background>
  </Section>
);

export default Footer;
