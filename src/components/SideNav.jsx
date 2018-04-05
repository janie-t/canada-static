import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled from 'react-emotion';
import { map } from 'lodash';
import { Images } from '../assets';
import content from '../content';
import colors from '../styles/colors';
import { Container } from './commons';
import Burger from './NavBurger';

const CLASSES = {
  menu: 'pure-menu custom-restricted-width',
  menuList: 'pure-menu-list',
  menuItem: 'pure-menu-item',
  menuLink: 'pure-menu-link pure-button',
  brand: 'pure-menu-heading pure-menu-link',
  section: 'pure-g',
  container: 'pure-u-0 pure-u-sm-1 pure-u-md-1 pure-u-lg-1 pure-u-xl-1',
  button: 'pure-button',
};

const Section = styled.div`
  width: 100%;
  background-color: ${colors.DARKBLUE};
  height: 50px;
  z-index: -1;
  @media (min-width: 576px) {
    background-color: ${colors.WHITE};
    height: 150px;
  }
`;

const Logo = styled.img`
  width: 20%;
  position: absolute;
  left: 25px;
  top: 30px;
  @media (min-width: 576px) {
    width: 150px;
    position: relative;
    left: 0;
    top: 0;
    display: inline;
    margin-left: 1em;
    margin-bottom: 0.5em;
    height: 82px;
  }
`;


const StyledLink = styled(Link) `
  display: none;
  padding: 0;
  margin: 0 1rem;
  text-decoration: none;
  color: ${colors.BLUE};
  cursor: pointer;
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2px;
    width: 0;
    height: 2px;
    background: ${colors.BLUE};
    transition: width 400ms ease;
  }
  &:hover {
    background: transparent;
    &:after {
      width: 100%;
    }
  }
  @media (min-width: 576px) {
    display: inline;
  }
`;

const MenuLink = styled(Link)`
  margin: 1rem 0;
  background: rgb(202, 60, 60);
  color: white;
  border-radius: 20px;
  &:hover{
    background: rgba(202, 60, 60, .5);
  }
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled.button`
  width: 80%;
  margin-bottom: 0.1em;
  top: calc(50% - 30px);
	right: calc(50% - 115px);
	width: 230px;
	height: 60px;
	background-image: -webkit-linear-gradient(bottom, rgba(0,0,0,.075), rgba(255,255,255,.045));
	background-image: linear-gradient(to top, rgba(255,0,0), rgba(255,0,0));
    box-shadow: inset 0 -1px 0 rgba(0,0,0),inset 0 1px 0 rgba(0,0,0), 0 0 1px rgba(0,0,0), 0 0 10px rgba(0,0,0);
	border-radius: 100px;
	color: ${colors.WHITE};
	line-height: 30px;
	text-align: center;
	letter-spacing: 1px;
	overflow: hidden;
	transition: all .3s cubic-bezier(.67,.13,.1,.81), transform .15s cubic-bezier(.67,.13,.1,.81);

& hover {
	right: calc(50% - 150px);
	width: 400px;
}
&:active {
	transform: translateY(3px);
}
&: before {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	opacity: 1;
	transition: all .3s cubic-bezier(.67,.13,.1,.81);
}
`


const Menu = ({ items }) => (
  <div className={CLASSES.menu}>
      <ul className={CLASSES.menuList}>
      {map(items, (label, path) => (
        <li key={`menu_${path}`} className={CLASSES.menuItem}>
          <MenuLink to={`${path}`} className={CLASSES.menuLink}> {label}</MenuLink>
        </li>
      ))}
    </ul>
  </div>
);

export default withSiteData(() => {
  const MENUS = content('menus');
  return (
    <Section className={CLASSES.section}>
      <Container className={CLASSES.container} style={{ display: 'flex' }}>
        <NavLeft>
          <Menu items={MENUS} />
        </NavLeft>
        <NavRight>
          <Burger />
        </NavRight>
      </Container>
    </Section>
  );
});
