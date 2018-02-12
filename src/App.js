import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import styled from 'react-emotion'

import Nav from './components/Nav'

const Container = styled('div')`
  margin: 0;
  padding: 0;
`

export default () => (
  <Router>
    <Container>
      <Nav />
      <Routes />
    </Container>
  </Router>
)
