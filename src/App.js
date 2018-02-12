import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import styled from 'react-emotion'

import Nav from './components/Nav'

const Body = styled.body`
  font-family: "Adelle Sans";
  font-weight: 300;
  font-size: 16px;
  margin: 0;
  padding: 0;
`

export default () => (
  <Router>
    <Body>
      <Nav />
      <Routes />
    </Body>
  </Router>
)
