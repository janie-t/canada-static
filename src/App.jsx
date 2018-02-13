import React from 'react';
import { Router } from 'react-static';
import Routes from 'react-static-routes'; // eslint-disable-line
import styled from 'react-emotion';
import Nav from './components/Nav';
import './styles/main.css';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export default () => (
  <Router>
    <Container>
      <Nav />
      <Routes />
    </Container>
  </Router>
);
