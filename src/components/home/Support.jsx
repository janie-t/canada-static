import React from 'react';
import styled from 'react-emotion';
import { Section, Container } from '../commons';

import background2 from '../../assets/images/background2.png';


const Background = styled.div`
  display: flex;
  flex: 1;
  background-image: url(${background2});
  background-repeat: no-repeat;
  z-index: 1;
  width: 100%;
  height: 500px;
  align-items: center;
`;

const Middle = styled.div`
  text-align: center;
  width: 100%;
  height: 200px;
  background: rgba(69, 62, 64, 0.4);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    border-top: 1px solid white;
    width: 100%;
    transform: translateY(-50%);
  }
  display: flex;
`;


const MainText = styled.div`
  color: white;
  font-size: 3em;
  font-weight: bold;
  max-height: 150px;
`;

const SubText = styled.div`
  width: 100%;
  color: white;
  font-size: 1.6em;
  padding-top: 1em;
  opacity: 0.7;
`;

const NewContent = styled.div`
  color: white;
  font-size: 1.6em;
`


const Support = () => (
  <Section>
    <Background>
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
    </Background>
  </Section>
);

export default Support;
