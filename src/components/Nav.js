import React from "react";
import { withSiteData, Link } from "react-static";
import styled, { css } from "react-emotion";
import facepaint from "facepaint";

import logoImg from "../img/logo.png";

const breakpoints = {
  // Numerical values will result in a min-width query
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  // String values will be used as is
  tallPhone: "(max-width: 360px) and (min-height: 740px)"
};

const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === "string" ? "" : "min-width:";
  let suffix = typeof breakpoints[label] === "string" ? "" : "px";
  accumulator[label] = cls =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `;
  return accumulator;
}, {});

const Nav = styled.div`
  display: flex;
  flexdirection: row;
  background-color: white;
`;

const Login = styled.div`
  position: absolute;
  right: 0px;
  margin: 0.5em 0.5em;
  color: #009edb;
  height: 30px;
  width: 70px;
  font-size: 1.5em;
  border: solid 1px #009edb;
  text-align: center;
  border-radius: 5px;
`;

const Img = css`
  alignself: flex-start;
  margin-left: 1em;
  margin-bottom: 0.5em;
  width: 130px;
  height: 60px;
  ${mq.medium(css`
    width: 140px;
    height: 70px;
  `)};
`;

const NavLinks = styled.div`
  padding-top: 1.2rem;
  margin-left: 3em;
  flex: 1;
  display: none;
  ${mq.medium(css`
    display: block;
  `)};
`;

export default withSiteData(() => (
  <Nav>
    <img src={logoImg} alt="logo" className={Img} />
    <NavLinks>
      <Link
        to="/"
        style={{
          paddingRight: "15px",
          textDecoration: "none",
          color: "#009edb"
        }}
      >
        Home
      </Link>
      <Link
        to="/plans"
        style={{
          paddingRight: "15px",
          textDecoration: "none",
          color: "#009edb"
        }}
      >
        Plans and Pricing
      </Link>
      <Link
        to="/how"
        style={{
          paddingRight: "15px"
        }}
      >
        How it works
      </Link>
      <Link
        to="/about"
        style={{
          paddingRight: "15px"
        }}
      >
        About us
      </Link>
      <Link
        to="/contact"
        style={{
          paddingRight: "15px"
        }}
      >
        Contact
      </Link>
    </NavLinks>
    <Login>Login</Login>
  </Nav>
));
