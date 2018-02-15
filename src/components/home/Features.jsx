import React from 'react';
import { withSiteData } from 'react-static';

import styled from 'react-emotion';
import { Section, Container } from '../commons';
import { Images } from '../assets';


const CLASSES = {
  square: 'pure-u-1 pure-u-md-1-2 pure-u-lg-1-3'
};

const GridRow = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
`;

const GridRow = ({ heading, subheading }) => (
  <Square className={CLASSES.square}>

    <Heading>{heading}</Heading>
    <SubHeading>{subheading}</SubHeading>
  </Square>
)
);

const Square = styled.div`
  background-color: white;
  display: flex;
  text-align: center;
  align-items: center;
  flex-flow: column wrap;
  margin: 1em;
`;

const Heading = styled.div`
  text-transform: uppercase;
  font-size: 1em;
  margin-top: 5px;
`;

const Subheading = styled.div`
  font-size: 0.8em;
  margin-top: 5px;
`;

export default withSiteData(() => {
  const HEADING = content('headings');
  const SUBHEADING = content('subheadings');
  < Section >
    <Container>
      <GridRow heading={HEADING} subheading={SUBHEADING} />
    </Container>
  </Section >
}




{/* <GridRow>
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
        </GridRow> */}