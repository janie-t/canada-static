import React from 'react';
import { withSiteData } from 'react-static';
import Footer from '../components/Footer';
import Landing from '../components/home/Landing';
import Features from '../components/home/Features';
import Profile from '../components/home/Profile';


export default withSiteData(() => (
  <div>
    <Landing />
    <Features />
    <Profile />
  </div>
));
