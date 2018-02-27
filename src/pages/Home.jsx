import React from 'react';
import { withSiteData } from 'react-static';
import styled from 'react-emotion';
import Footer from '../components/Footer';
import Landing from '../components/home/Landing';
import Support from '../components/home/Support';
import Features from '../components/home/Features';

// const breakpoints = {
//   // Numerical values will result in a min-width query
//   small: 576,
//   medium: 768,
//   large: 992,
//   xLarge: 1200,
//   // String values will be used as is
//   tallPhone: '(max-width: 360px) and (min-height: 740px)',
// };

// const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
//   const prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:';
//   const suffix = typeof breakpoints[label] === 'string' ? '' : 'px';
//   return {
//     ...accumulator,
//     [label]: cls =>
//       css`
//         @media (${prefix + breakpoints[label] + suffix}) {
//           ${cls};
//         }
//       `,
//   };
// }, {});

// const MobLinks = css`
//   a {
//     text-decoration: none;
//     color: white;
//     font-size: 1em;
//     padding-right: 20px;
//   }
//   width: 80%;
//   text-align: center;
//   margin: auto;
//   border-bottom: 2px solid #009edb;
//   padding-bottom: 0.5em;
//   ${mq.medium(css`
//     display: none;
//   `)};
// `;

// const Top = styled.div`
//   background: #8dc63f;
//   padding-top: 1em;
// `;

// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   margin-top: 1em;
//   margin: auto;
// `;

// const Col1 = styled.div`
//   max-width: 50%;
//   margin-left: 2em;
//   ${mq.medium(css`
//     max-width: 40%;
//     margin-left: 5em;
//   `)};
// `;

// const Col2 = styled.div`
//   max-width: 30%;
//   margin-right: 1em;
//   ${mq.medium(css`
//     max-width: 40%;
//     margin-right: 6em;
//   `)};
// `;

// const Info = styled.div`
//   font-size: 1.1em;
//   padding-top: 2em;
//   ${mq.medium(css`
//     font-size: 2em;
//     padding-bottom: 1em;
//     border-bottom: 2px solid #bbe582;
//     margin-bottom: 1.5em;
//   `)};
// `;

// const Signup = styled.div`
//   margin-top: 2em;
//   background-color: #009edb;
//   color: white;
//   height: 30px;
//   width: 100px;
//   text-align: center;
//   padding: 5px;
//   border-radius: 4px;
//   ${mq.medium(css`
//     height: 50px;
//     width: 250px;
//     font-size: 1.3em;
//     margin-bottom: 20px;
//   `)};
// `;

// const Contact = styled.div`
//   padding: 5px;
//   border-radius: 4px;
//   margin-top: 2em;
//   text-align: center;
//   color: white;
//   height: 30px;
//   width: 100px;
//   border: 1px solid white;
//   ${mq.medium(css`
//     height: 50px;
//     width: 250px;
//     font-size: 1.3em;
//     margin-bottom: 20px;
//   `)};
// `;

// const Quote = styled.div`
//   max-width: 40%;
//   color: white;
//   font-weight: bold;
//   margin-left: 3em;
//   margin-top: 2em;
//   ${mq.medium(css`
//     max-width: 30%;
//     font-size: 1.6em;
//     margin-left: 6em;
//   `)};
// `;

// const Author = styled.div`
//   width: 100%;
//   color: #bbe582;
//   font-size: 0.7em;
//   text-transform: uppercase;
//   margin-top: 10px;
// `;

// const chevron = css`
//   margin-right: 2em;
//   margin-bottom: 1em;
//   width: 50px;
//   ${mq.medium(css`
//     width: 100px;
//     margin-right: 5em;
//     margin-bottom: 3em;
//   `)};
// `;

// const dog = css`
//   width: 120px;
//   height: 200px;
//   ${mq.medium(css`
//     width: 300px;
//     height: 350px;
//   `)};
// `;

// const dash = css`
//   width: 200px;
//   height: 200px;
//   position: relative;
//   right: 0px;
//   bottom: 0px;
//   ${mq.medium(css`
//     height: 350px;
//     width: 450px;
//   `)};
// `;

// const Middle = styled.div`
//   background: #817478;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   align-items: center;
//   text-align: center;
//   align-items: center;
//   text-align: center;
//   background-image: url(${Images.team});
//   background-repeat: no-repeat;
//   background-position: center;
//   height: 500px;
//   ${mq.medium(css`
//     padding-top: 2em;
//     padding-bottom: 2em;
//   `)};
// `;

// const MainText = styled.div`
//   width: 100%;
//   background: #453e40;
//   color: white;
//   font-size: 1.5em;
//   font-weight: bold;
//   border-bottom: solid white 1px;
//   opacity: 0.8;
//   max-height: 150px;
//   ${mq.medium(css`
//     max-height: 15%;
//     font-size: 2em;
//     padding-top: 1.3em;
//     padding-bottom: 1em;
//   `)};
// `;

// const SubText = styled.div`
//   width: 100%;
//   background: #453e40;
//   color: white;
//   opacity: 0.8;
//   font-size: 1.1em;
//   ${mq.medium(css`
//     height: 10%;
//     font-size: 1.3em;
//     padding-top: 1em;
//   `)};
// `;

// const Bottom = styled.div`
//   display: -webkit-box;
//   display: -moz-box;
//   display: -ms-flexbox;
//   display: -o-flexbox;
//   display: -webkit-flex;
//   display: flex;
//   -webkit-flex-direction: column;
//   -moz-flex-direction: column;
//   -ms-flex-direction: column;
//   -o-flex-direction: column;
//   flex-direction: column;
// `;

// const GridRow = styled.div`
//   background-color: white;
//   -webkit-flex: 5;
//   -moz-flex: 5;
//   -ms-flex: 5;
//   -o-flex: 5;
//   flex: 5;
//   display: -webkit-box;
//   display: -moz-box;
//   display: -ms-flexbox;
//   display: -webkit-flex;
//   display: flex;
//   justify-content: center;
//   -webkit-flex-direction: row;
//   -moz-flex-direction: row;
//   -ms-flex-direction: row;
//   -o-flex-direction: row;
//   flex-direction: row;
//   width: 100%;
//   margin: auto;
// `;

// const Square = styled.div`
//   background-color: white;
//   -webkit-flex: 4;
//   -moz-flex: 4;
//   -ms-flex: 4;
//   -o-flex: 4;
//   flex: 4;
//   display: -webkit-box;
//   display: -moz-box;
//   display: -ms-flexbox;
//   display: -webkit-flex;
//   display: flex;
//   text-align: center;
//   align-items: center;
//   -webkit-flex-flow: column wrap;
//   -moz-flex-flow: column wrap;
//   -ms-flex-flow: column wrap;
//   -o-flex-flow: column wrap;
//   flex-flow: column wrap;
//   margin: 1em;
//   ${mq.medium(css`
//     margin: 2em;
//     max-width: 15%;
//   `)};
// `;

// const SquareHeading = styled.div`
//   text-transform: uppercase;
//   font-size: 1em;
//   margin-top: 5px;
// `;

// const SquareSubheading = styled.div`
//   font-size: 0.8em;
//   margin-top: 5px;
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default withSiteData(() => (
  <Container>
    <Landing />
    <Support />
    <Features />
    <Footer />
    {/* <Top>
        <Row>
          <Col1>
            <Info>
              We are a fast-growing New Zealand payroll company. Our service is easy to use, and we
              are still free for small businesses.
            </Info>
          </Col1>
          <Col2>
            <Signup>SIGN UP NOW</Signup>
            <Contact>Contact us for a chat</Contact>
          </Col2>
        </Row>
        <Row>
          <Quote>
            "We can now spend more time on building the business rather than non productive book
            work. Thank you!"<br />
            <Author>Scott Patterson, Puraty Limited</Author>
          </Quote>
          <img src={Images.chevronNext} alt="next" className={chevron} />
        </Row>
        <Row>
          <img src={Images.homeDog} alt="dog" className={dog} />
          <img src={Images.typDash} alt="dashboard" className={dash} />
        </Row>
      </Top>

      <Middle>
        <MainText>We have a really great support team.</MainText>
        <SubText>
          We are proud of these humans in the Wellington office. Our customers love them. Link to
          new content &gt;
        </SubText>
      </Middle>
      <Bottom>
        <GridRow>
          <Square>
            <img src={Icons.lightning} alt="lightning" style={{ width: '30px' }} />
            <SquareHeading>Easy to use</SquareHeading>
            <SquareSubheading>
              Our payroll platform is easy and user-friendly, and makes managing your payroll stress
              free and lightning fast.
            </SquareSubheading>
          </Square>
          <Square>
            <img src={Icons.lightning} alt="lightning" style={{ width: '30px' }} />
            <SquareHeading>Friendly help desk</SquareHeading>
            <SquareSubheading>
              Our amazing support team always go the extra mile to help you - and it doesn't cost
              you any extra to have them on hand.
            </SquareSubheading>
          </Square>
          <Square>
            <img src={Icons.lightning} alt="lightning" style={{ width: '30px' }} />
            <SquareHeading>Calculate Leave</SquareHeading>
            <SquareSubheading>
              We calculate and monitor employee leave according to the Holidays Act, helping you
              stay on top of leave requirements.
            </SquareSubheading>
          </Square>
        </GridRow>
        <GridRow class="row">
          <Square>
            <img src={Icons.lightning} alt="lightning" style={{ width: '30px' }} />
            <SquareHeading>File Employer Returns</SquareHeading>
            <SquareSubheading>
              We calculate all PAYE, Kiwisaver, Student loans and Child Support, and file it with
              the IRD. We keep you compliant. We even do MoJ fines.
            </SquareSubheading>
          </Square>
          <Square>
            <img src={Icons.lightning} alt="lightning" style={{ width: '30px' }} />
            <SquareHeading>Employee Portal</SquareHeading>
            <SquareSubheading>
              Your employees can upload their own hours, get payslips, and request annual leave -
              all you need to do is check and authorise it.
            </SquareSubheading>
          </Square>
          <Square>
            <img src={Icons.lightning} alt="lightning" style={{ width: '30px' }} />
            <SquareHeading>Transfer Wages</SquareHeading>
            <SquareSubheading>
              We pay all your employees directly, and email them payslips - you can even put your
              business logo on them.
            </SquareSubheading>
          </Square>
        </GridRow>
        <GridRow class="row">
          <Square>
            <img src={Icons.lightning} alt="lightning" style={{ width: '30px' }} />
            <SquareHeading>Giving Made Simple</SquareHeading>
            <SquareSubheading>
              It's effortless for your employees to donate regularly to their favourite charity.
              They get an immediate tax rebate on each donation.
            </SquareSubheading>
          </Square>
          <Square>
            <img src={Icons.lightning} alt="lightning" style={{ width: '30px' }} />
            <SquareHeading>24/7 Access</SquareHeading>
            <SquareSubheading>
              Our platform is cloud-based, which means you access your payroll from anywhere,
              anytime. All you need is a device and an internet connection.
            </SquareSubheading>
          </Square>
          <Square>
            <img src={Icons.lightning} alt="lightning" style={{ width: '30px' }} />
            <SquareHeading>Good for any business</SquareHeading>
            <SquareSubheading>
              Payroll solutions for trades and skilled labour, business and investment, hospitality,
              education, retail, social services and many more.
            </SquareSubheading>
          </Square>
        </GridRow>
      </Bottom> */}
  </Container>
));
