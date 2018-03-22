import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled from 'react-emotion';
import { Images } from '../../assets';
import content from '../../content';
import colors from '../../styles/colors';




const Heading = styled.div`

  padding: 10;
  margin: 10rem;
  font-size: 0.5em;
  text-align: right;
  color: ${colors.WHITE};
  font-weight: bolder;
  margin:1em;
  @media (min-width: 576px) {
    color: black;
    font-size: 1em;
    padding-top: 2em;
    text-align: right;

  }
`;


export default withSiteData(() => {
  const CRED = content('credentials.address');
    return (
        <div>
        <Heading>{CRED}
        
          <Link to="/" className="menu-item" >Home</Link> 
          <Link to="/how" className="menu-item">News</Link>
          <Link to="/about" className="menu-item">About Us</Link>
          <Link to="./contact" className="menu-item">Contact</Link>
        
        </Heading>
          </div>
      );     
});

