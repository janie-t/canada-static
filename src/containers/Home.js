import React from "react";
import { withSiteData, Link } from "react-static";
import styled, { css } from "react-emotion";
//
import chevronNext from "../img/chevron-next.svg";
import typDash from "../img/typ-dash.png";
import homeDog from "../img/dog1.png";
import team from "../img/team.png";
import lightning from "../img/lightning.png";

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

const Container = styled.div(props => ({
  display: "flex",
  flexDirection: "column"
}));

const MobLinks = css`
  a {
    text-decoration: none;
    color: white;
    font-size: 1em;
    padding-right: 20px;
  }
  width: 80%;
  text-align: center;
  margin: auto;
  border-bottom: 2px solid #009edb;
  padding-bottom: 0.5em;
  ${mq.medium(css`
    display: none;
  `)};
`;

const Top = styled.div`
  background: #8dc63f;
  padding-top: 1em;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1em;
  margin: auto;
`;

const Col1 = styled.div`
  max-width: 40%;
  margin-left: 5em;
`;

const Col2 = styled.div`
  max-width: 15%;
  margin-right: 4em;
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
  max-width: 30%;
  color: white;
  font-weight: bold;
  font-size: 1.6em;
  margin-left: 6em;
`;

const Author = styled.div`
  width: 100%;
  color: #bbe582;
  font-size: 0.7em;
  text-transform: uppercase;
  margin-top: 10px;
`;

const Middle = styled.div`
  background: #817478;
  height: 500px;
  padding-top: 2em;
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  background-image: url(${team});
  background-repeat: no-repeat;
  background-position: center;
`;

const MainText = styled.div`
  width: 100%;
  max-height: 15%;
  background: #453e40;
  color: white;
  font-weight: bold;
  font-size: 2em;
  padding-top: 1.3em;
  padding-bottom: 1em;
  border-bottom: solid white 1px;
  opacity: 0.8;
`;

const SubText = styled.div`
  width: 100%;
  height: 10%;
  background: #453e40;
  color: white;
  font-size: 1.3em;
  padding-top: 1em;
  opacity: 0.8;
`;

const Bottom = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -o-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  -ms-flex-direction: column;
  -o-flex-direction: column;
  flex-direction: column;
`;

const GridRow = styled.div`
  background-color: white;
  -webkit-flex: 5;
  -moz-flex: 5;
  -ms-flex: 5;
  -o-flex: 5;
  flex: 5;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  -o-flex-direction: row;
  flex-direction: row;
  width: 100%;
  margin: auto;
`;

const Square = styled.div`
  background-color: white;
  -webkit-flex: 4;
  -moz-flex: 4;
  -ms-flex: 4;
  -o-flex: 4;
  flex: 4;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  text-align: center;
  align-items: center;
  -webkit-flex-flow: column wrap;
  -moz-flex-flow: column wrap;
  -ms-flex-flow: column wrap;
  -o-flex-flow: column wrap;
  flex-flow: column wrap;
  margin: 2em;
  max-width: 15%;
`;

const SquareHeading = styled.div`
  text-transform: uppercase;
  font-size: 1em;
  margin-top: 5px;
`;

const SquareSubheading = styled.div`
  font-size: 0.8em;
  margin-top: 5px;
`;

export default withSiteData(() => (
  <Container>
    <Top>
      <Row>
        <div className={MobLinks}>
          <Link to="/">Home</Link>
          <Link to="/plans">Plans and Pricing</Link>
          <Link to="/how">How it works</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </Row>
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
          "We can now spend more time on building the business rather than non
          productive book work. Thank you!"<br />
          <Author>Scott Patterson, Puraty Limited</Author>
        </Quote>
        <img
          src={chevronNext}
          alt="next"
          style={{ marginRight: "3em", marginBottom: "3em" }}
        />
      </Row>
      <Row>
        <img src={homeDog} alt="dog" />
        <img
          src={typDash}
          alt="dashboard"
          style={{ position: "relative", right: "0px", bottom: "0px" }}
        />
      </Row>
    </Top>

    <Middle>
      <MainText>We have a really great support team.</MainText>
      <SubText>
        We are proud of these humans in the Wellington office. Our customers
        love them. Link to new content >
      </SubText>
    </Middle>
    <Bottom>
      <GridRow>
        <Square>
          <img src={lightning} alt="lightning" style={{ width: "30px" }} />
          <SquareHeading>Easy to use</SquareHeading>
          <SquareSubheading>
            Our payroll platform is easy and user-friendly, and makes managing
            your payroll stress free and lightning fast.
          </SquareSubheading>
        </Square>
        <Square>
          <img src={lightning} alt="lightning" style={{ width: "30px" }} />
          <SquareHeading>Friendly help desk</SquareHeading>
          <SquareSubheading>
            Our amazing support team always go the extra mile to help you - and
            it doesn't cost you any extra to have them on hand.
          </SquareSubheading>
        </Square>
        <Square>
          <img src={lightning} alt="lightning" style={{ width: "30px" }} />
          <SquareHeading>Calculate Leave</SquareHeading>
          <SquareSubheading>
            We calculate and monitor employee leave according to the Holidays
            Act, helping you stay on top of leave requirements.
          </SquareSubheading>
        </Square>
      </GridRow>
      <GridRow class="row">
        <Square>
          <img src={lightning} alt="lightning" style={{ width: "30px" }} />
          <SquareHeading>File Employer Returns</SquareHeading>
          <SquareSubheading>
            We calculate all PAYE, Kiwisaver, Student loans and Child Support,
            and file it with the IRD. We keep you compliant. We even do MoJ
            fines.
          </SquareSubheading>
        </Square>
        <Square>
          <img src={lightning} alt="lightning" style={{ width: "30px" }} />
          <SquareHeading>Employee Portal</SquareHeading>
          <SquareSubheading>
            Your employees can upload their own hours, get payslips, and request
            annual leave - all you need to do is check and authorise it.
          </SquareSubheading>
        </Square>
        <Square>
          <img src={lightning} alt="lightning" style={{ width: "30px" }} />
          <SquareHeading>Transfer Wages</SquareHeading>
          <SquareSubheading>
            We pay all your employees directly, and email them payslips - you
            can even put your business logo on them.
          </SquareSubheading>
        </Square>
      </GridRow>
      <GridRow class="row">
        <Square>
          <img src={lightning} alt="lightning" style={{ width: "30px" }} />
          <SquareHeading>Giving Made Simple</SquareHeading>
          <SquareSubheading>
            It's effortless for your employees to donate regularly to their
            favourite charity. They get an immediate tax rebate on each
            donation.
          </SquareSubheading>
        </Square>
        <Square>
          <img src={lightning} alt="lightning" style={{ width: "30px" }} />
          <SquareHeading>24/7 Access</SquareHeading>
          <SquareSubheading>
            Our platform is cloud-based, which means you access your payroll
            from anywhere, anytime. All you need is a device and an internet
            connection.
          </SquareSubheading>
        </Square>
        <Square>
          <img src={lightning} alt="lightning" style={{ width: "30px" }} />
          <SquareHeading>Good for any business</SquareHeading>
          <SquareSubheading>
            Payroll solutions for trades and skilled labour, business and
            investment, hospitality, education, retail, social services and many
            more.
          </SquareSubheading>
        </Square>
      </GridRow>
    </Bottom>
  </Container>
));
