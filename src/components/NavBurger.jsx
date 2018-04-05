import React from 'react'
import { slide as NavMenu } from 'react-burger-menu'
import { withSiteData, Link } from 'react-static'
import styled from 'react-emotion';
import colors from '../styles/colors';
const StyledLink = styled(Link) `
  display: none;
  padding: 0;
  margin: 2rem;
  text-decoration: none;
  color: ${colors.BLUE};
  cursor: pointer;
  position: relative;
  &:hover {
    color: ${colors.RED};  
    background: transparent;
    &:after {
      width: 100%;
    }
  }
  @media (min-width: 576px) {
    display: inline;
  }
`;


var styles = {
    bmBurgerButton: {
        position: 'absolute',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '30px',
        '@media (minWidth: 576px)': {
            display: 'none'
        }
    },
    bmBurgerBars: {
        background: 'red'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenu: {
        background: 'rgba(255, 255, 255)',
        fontSize: '1.5em',
        height: '100%',
    },
    bmMenuWrap: {
        top: '0'
    },
    bmMorphShape: {
        color: '#ffffff'
    },
    bmItemList: {
        color: '#ff0000',
        padding: '2em',
        letterSpacing: '1px',
        textAlign: 'center',
        bottom: '65px'
        
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    },
    bmHover:{
        color : '#ffffff'
    }
    
}

const Burger = () => (
    <NavMenu right styles={styles}>
        <StyledLink to="/" className="menu-item" >Home</StyledLink>
        <StyledLink to="/citizenship" className="menu-item" > Immigrate to Canada</StyledLink>
        <StyledLink to="/work" className="menu-item"> Work</StyledLink>
        <StyledLink to="/study" className="menu-item" > Study</StyledLink>
        <StyledLink to="/business" className="menu-item" > Business</StyledLink>
        <StyledLink to="/assessment" className="menu-item">Free Assessment</StyledLink>
        <StyledLink to="/about" className="menu-item" >About Us</StyledLink>
        <StyledLink to="/contact" className="menu-item">Contact</StyledLink>
        
        
    </NavMenu>

);

export default Burger;
