import React from 'react'
import { withSiteData } from 'react-static'
import styled from 'react-emotion'
//
import logoImg from '../img/logo.png'

const Container = styled('div')(props => ({
  display: 'flex',
  flexDirection: 'column',
}))

const Top = styled('div')`
  width: 100%;
  background: green;
`

const Middle = styled('div')`
  width: 100%;
  background: orange;
`

const Bottom = styled('div')`
  width: 100%;
  background: blue;
`

export default withSiteData(() => (
  <Container>
    <Top>
      <h1>Top Section</h1>
    </Top>
    <Middle>
      <h1>Middle Section</h1>
    </Middle>
    <Bottom>
      <h1>Bottom Section</h1>
    </Bottom>
  </Container>
))
