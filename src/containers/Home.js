import React from "react";
import { withSiteData } from "react-static";
import styled from "react-emotion";
//
import chevronNext from "../img/chevron-next.svg";
import typDash from "../img/typ-dash.png";

const Container = styled.div(props => ({
  display: "flex",
  flexDirection: "column"
}));

const Top = styled.div`
  background: #8dc63f;
  height: 700px;
  padding-top: 2em;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1em;
`;

const Col1 = styled.div`
  width: 50%;
`;

const Col2 = styled.div`
  width: 20%;
`;

const Info = styled.div`
  font-size: 2em;
  padding-bottom: 1em;
  border-bottom: 2px solid #bbe582;
  margin-bottom: 1.5em;
`;

const Signup = styled.button`
  background-color: #009edb;
  color: white;
  height: 50px;
  width: 250px;
  font-size: 1.3em;
  margin-bottom: 20px;
`;

const Contact = styled.button`
  background-color: #8dc63f;
  color: white;
  height: 50px;
  width: 250px;
  font-size: 1.3em;
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
  font-size: 0.7em;
  text-transform: uppercase;
  margin-top: 10px;
`;

const Span = styled.span`
  width: 85%;
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
        <Col1>
          <Info>
            We are a fast-growing New Zealand payroll company. Our service is
            easy to use, and we are still free for small businesses.
          </Info>
        </Col1>
        <Col2>
          <Signup>SIGN UP NOW</Signup>
          <Contact>Contact us for a chat</Contact>
        </Col2>
      </Row>
      <Row>
        <Quote>
          We can now spend more time on building the business rather than non
          productive book work. Thank you!<br />
          <Author>Scott Patterson, Puraty Limited</Author>
        </Quote>
        <img src={chevronNext} alt="next" />
      </Row>
      <Row>
        <Span />
        <img src={typDash} alt="dashboard" />
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
