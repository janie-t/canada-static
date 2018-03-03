import React from 'react';
import { withSiteData } from 'react-static';
import styled from 'react-emotion';
import Footer from '../components/Footer';
import Landing from '../components/home/Landing';
import Support from '../components/home/Support';
import Features from '../components/home/Features';


export default withSiteData(() => (
  <div>
    <Landing />
    <Support />
    <Features />
    <Footer />
  </div>
));
