import React from 'react';
import { Router } from 'react-static';
import Routes from 'react-static-routes'; // eslint-disable-line
import styled from 'react-emotion';
import Nav from './components/Nav';
import Footer from './components/Footer';


import './styles/main.css';
import Credentials from './components/home/Credentials';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  margin: 0;
  padding: 0;
`;

export default () => (
  <Router>
    <Container>
      <Credentials />
      <Nav />
      
      <Routes />
      <Footer />
    </Container>
  </Router>
);
