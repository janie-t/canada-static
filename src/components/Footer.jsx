import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled from 'react-emotion';
import { map } from 'lodash';
import { Icons } from '../assets';
import content from '../content';
import colors from '../styles/colors';

const Background = styled.div`
  background-color: ${colors.RED};
  color: white;
  width: 100%;
  height: 110px;
  text-align: center;
  padding-top: 30px;
  @media (min-width: 576px) {
    height: 100px;
    font-size: 1.2em;
    padding-top: 20px;
    position: relative;
    bottom: 0;
  };
`;

const Footer = () => (
    <Background>
      Phone: +23234234234 | Email: email@something.com <br />
      Copyright &copy; 2018 Canada Immigration.
    </Background>
);

export default Footer;
