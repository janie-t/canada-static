import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled from 'react-emotion';
import { Images } from '../../assets';
import content from '../../content';
import colors from '../../styles/colors';

const HOME = content('pages.home');

const Section = styled.div`
  width: 100%;
  height: 94vh;
  background: ${colors.RED};
  @media (min-width: 576px) {
    background:  url(${Images.pattern}) ${colors.RED};
    height: 55vh;
    display: flex;
  }
`;

const Container = styled.div`
  padding: 2em 1em;
  background-color: ${colors.RED};
  @media (min-width: 576px) {
    background: transparent;
    max-width: 976px;
    margin: auto;
  }
`;

const ImageOne = styled.img`
  width: 50%;
  margin: auto;
  @media (min-width: 576px) {
    flex: 1;
    display: inline;
  }

`;

const ImageTwo = styled.img`
width: 50%;
margin: auto;
display: none;
@media (min-width: 576px) {
  flex: 1;
  display: inline;
}

`;

const ImageThree = styled.img`
display: inline;
flex: 1;
width: 50%;
@media (min-width: 576px) {
  display: none;
}
`;

const HalfCol = styled.div`
  @media (min-width: 576px) {
    width: 50%;
    float: left;
    clear: none;
    position: relative;
    flex: 1;
  }
`;


const Heading = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: ${colors.WHITE};
  font-weight: bolder;
  @media (min-width: 576px) {
    color: black;
    font-size: 2em;
    padding-top: 2em;
    padding-bottom: 1em;
    text-align: left;

  }
`;

const Subheading = styled.div`
  font-size: 1.2em;
  text-align: center;
  margin-top: 10px;
  @media (min-width: 576px) {
    text-align: left;
    font-size: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    border-top: 2px solid;
    border-color: ${colors.LIGHTGREEN};
  }
`;

const ActionButtons = styled.div`
  font-size: 1.2em;
  padding-top: 1em;
  text-align: center;
  @media (min-width: 576px) {
    padding-top: 3.5em;
    padding-left: 2em;
    text-align: right;
  }
`;

const Signup = styled.button`
width: 80%;
margin: auto;
text-transform: uppercase;
transition: background-color 200ms ease, color 200ms ease;
background-color: ${colors.RED};
color: ${colors.WHITE};
border: 1px solid ${colors.WHITE};
padding: 1rem 2rem;
margin-bottom: 0.5em;
border-radius: 5px;
&:hover {
  background-color: ${colors.WHITE};
  color: ${colors.RED};
  border: 1px solid ${colors.RED};
}
@media (min-width: 576px) {
  background: ${colors.DARKBLUE};
  color: white;
  width: 40%;
  margin-bottom: 30px;
  &:hover {
    background-color: white;
    color: ${colors.DARKBLUE};
    border: 1px solid ${colors.BLUE};
  }
}
`;

const Contact = styled.button`
width: 80%;
margin: auto;
background: rgba(255,255,255, 0.2);
transition: background-color 200ms ease, color 200ms ease;
color: ${colors.WHITE};
font-size: 1.1em;
letter-spacing: 1px;
border-radius: 5px;
border: 1px solid ${colors.WHITE};
padding: 1rem 2rem;
&:hover {
  background-color: white;
  color: ${colors.DARKBLUE};
}
@media (min-width: 576px) {
  width: 40%;
}
`;

export default withSiteData(() => {
  return (
  <Section>
    <ImageOne src={Images.canada} alt="canadian lake" />
    <ImageThree src={Images.canada2} alt="canadian lake" />

    <Container>
      <HalfCol>
        <Heading>{HOME.landing_heading}</Heading>
        <Subheading>{HOME.landing_subheading}</Subheading>
      </HalfCol>
      <ActionButtons>
        <Link to="/assessment">
          <Signup>Free Assessment</Signup>
        </Link>
        <Link to="/contact">
          <Contact>Contact Us</Contact>
        </Link>
      </ActionButtons>
    </Container>
    <ImageTwo src={Images.canada2} alt="canadian city" />
  </Section>
)
})
