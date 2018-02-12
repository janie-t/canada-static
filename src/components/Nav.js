import React from "react";
import { withSiteData, Link } from "react-static";
import styled from "react-emotion";

import logoImg from "../img/logo.png";

const Nav = styled.div`
  display: flex;
  flexdirection: row;
  background: white;
`;

const Button = styled.button`
  color: #009edb;
  height: 50px;
  width: 100px;
  font-size: 1.5em;
`;

const Img = styled.img`
  width: 100px;
  alignself: flex-start;
  flex: 0.5;
`;

const NavLinks = styled.div`
  padding: 1rem;
  flex: 1;
`;

export default withSiteData(() => (
  <Nav>
    <Img src={logoImg} alt="logo" />
    <NavLinks>
      <Link to="/" style={{ paddingRight: "15px" }}>
        Home
      </Link>
      <Link to="/plans" style={{ paddingRight: "15px" }}>
        Plans and Pricing
      </Link>
      <Link to="/how" style={{ paddingRight: "15px" }}>
        How it works
      </Link>
      <Link to="/about" style={{ paddingRight: "15px" }}>
        About us
      </Link>
      <Link to="/contact" style={{ paddingRight: "15px" }}>
        Contact
      </Link>
    </NavLinks>
    <Button>Login</Button>
  </Nav>
));
