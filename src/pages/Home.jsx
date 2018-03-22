import React from 'react';
import { withSiteData } from 'react-static';
import Footer from '../components/Footer';
import Landing from '../components/home/Landing';
import Features from '../components/home/Features';


export default withSiteData(() => (
  <div>
    <Landing />
    <Features />
  </div>
));
