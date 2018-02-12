import React from "react";
import { Router } from "react-static";
import Routes from "react-static-routes";
import styled, { injectGlobal } from "react-emotion";

import Nav from "./components/Nav";

injectGlobal`
  body {
    font-family: 'Adelle-Sans', 'Adelle Sans', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`;

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #009edb;
  }
  img {
    max-width: 100%;
  }
`;

export default () => (
  <Router>
    <AppStyles>
      <Nav />
      <Routes />
    </AppStyles>
  </Router>
);
