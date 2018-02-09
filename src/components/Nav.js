import React from 'react'
import { withSiteData, Link } from 'react-static'
import styled from 'react-emotion'

import logoImg from '../img/logo.png'

const Nav = styled('div')`
  width: 100%;
  background: white;
`

const Button = styled('button')`
  color: turquoise;
`

export default withSiteData(() => (
  <Nav>
    <img src={logoImg} alt="logo" />
    <Link to="/">Home</Link>
    <Link to="/plans">Plans and Pricing</Link>
    <Link to="/how">How it works</Link>
    <Link to="/about">About us</Link>
    <Link to="/contact">Contact</Link>
    <Button>Login</Button>
  </Nav>
))
