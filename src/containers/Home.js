import React from "react";
import { withSiteData } from "react-static";
import styled from "react-emotion";
//
import logoImg from "../img/logo.png";

const Container = styled.div(props => ({
  display: "flex",
  flexDirection: "column"
}));

const Top = styled.div`
  background: #8dc63f;
  height: 500px;
  padding: 2em;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Info = styled.div`
  width: 50%;
  font-size: 2em;
  padding-bottom: 1em;
  border-bottom: 2px solid #bbe582;
  margin-bottom: 1.5em;
`;

const Signup = styled.button`
  background-color: #009edb;
  color: white;
  height: 50px;
  font-size: 1.3em;
`;

const Contact = styled.button`
  background-color: none;
  color: white;
  height: 50px;
  font-size: 1.5em;
`;

const Quote = styled.div`
  width: 50%;
  color: white;
  font-weight: bold;
  font-size: 1.6em;
`;

const Author = styled.div`
  width: 100%;
  color: #bbe582;
  font-size: 0.5em;
  text-transform: uppercase;
`;

const Middle = styled.div`
  background: orange;
`;

const Bottom = styled.div`
  background: blue;
`;

export default withSiteData(() => (
  <Container>
    <Top>
      <Row>
        <Info>
          We are a fast-growing New Zealand payroll company. Our service is easy
          to use, and we are still free for small businesses.
        </Info>
        <Signup>SIGN UP NOW</Signup>
      </Row>
      <Row>
        <Quote>
          We can now spend more time on building the business rather than non
          productive book work. Thank you!<br />
          <Author>Scott Patterson, Puraty Limited</Author>
        </Quote>
      </Row>
    </Top>

    <Middle>
      <h1>Middle Section</h1>
    </Middle>
    <Bottom>
      <h1>Bottom Section</h1>
    </Bottom>
  </Container>
));
