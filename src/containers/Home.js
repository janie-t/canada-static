import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from './img/logo.png'

export default withSiteData(() => (
  <div style={{ textAlign: 'center' }}>
    <h1>Welcome to</h1>
    <img src={logoImg} alt="logo" />
  </div>
))
