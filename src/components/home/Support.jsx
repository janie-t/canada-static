import React from 'react';
import styled from 'react-emotion';
import colors from '../../styles/colors';
import { Images } from '../../assets';

const Section = styled.div`
  width: 100%;
  height: 500px;
  background-size: 100%;
  background:  url(${Images.support});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 10%;

`;

const Container = styled.div`
  align-items: center;
  z-index: 1;
  padding: 2em 1em;
`;

const Middle = styled.div`
  text-align: center;
  width: 100%;
  height: 200px;
  background: rgba(69, 62, 64, 0.4);

  color: ${colors.WHITE};
`;


const MainText = styled.div`
  font-size: 3em;
  font-weight: bold;
  max-height: 150px;
  border-bottom: 1px solid;
  border-color: ${colors.WHITE};
  border-width: 100%;
`;

const SubText = styled.div`
  width: 100 %;
  font-size: 1.6em;
  padding-top: 1em;
  opacity: 0.7;
`;

const NewContent = styled.div`
  font-size: 1.6em;
`


const Support = () => (
  <Section>
    <Middle>
      <Container>
        <MainText>We have a really great support team.</MainText>
        <SubText>
          We are proud of these humans in the Wellington office. Our customers love them.
          </SubText>
        <NewContent>
          Link to new content
          </NewContent>
      </Container>
    </Middle>
  </Section>
);

export default Support;
