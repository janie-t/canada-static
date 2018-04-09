import React from 'react';
import { Link } from 'react-static';
import styled from 'react-emotion';
import colors from '../styles/colors';

const Background = styled.div`
  background-color: ${colors.RED};
  color: white;
  width: 100%;
  height: 100px;
  text-align: center;
  position: relative;
  bottom: 0;
  padding-top: 10px;
  @media (min-width: 576px) {
    height: 100px;
    font-size: 1.2em;
    padding-top: 20px;
    margin-top: 10%;
    position: relative;
  }
`;

const Footer = () => (
  <Background>
    Phone: +23234234234 | Email: email@something.com <br />
    Copyright &copy; 2018 Canada Immigration.
  </Background>
);

export default Footer;
