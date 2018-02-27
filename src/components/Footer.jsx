import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled from 'react-emotion';
import { map } from 'lodash';
import { Icons } from '../assets';
import content from '../content';
import colors from '../styles/colors';
import { Section } from './commons';

const Background = styled.div`
  background-color: ${colors.DARKBLUE};
  color: white;
  width: 100%;
  height: 80px;
  text-align: center;
  padding-top: 30px;
  @media (min-width: 576px) {
    height: 60px;
    font-size: 1.2em;
    padding-top: 20px;
  };
`;

const Footer = () => (
  <Section>
    <Background>
      Copyright &copy; 2018 Thankyou Payroll.
    </Background>
  </Section>
);

export default Footer;
