import React from 'react';
import { withSiteData } from 'react-static';
import styled from 'react-emotion';
import { Section, Container } from '../commons';
import { Images } from '../../assets';

const ProfileContainer = styled.div`
  text-align: center;
  margin: auto;
  font-size: 0.8em;
  @media (min-width: 576px) {
    font-size: 1em;
  }
`;

const ProfileImage = styled.img`
  width: 50%;
  @media (min-width: 576px) {
    width: 50%;
  }
`;
export default withSiteData(() => (
  <Section>
    <Container>
      <ProfileContainer>
        <h1>Immigration consultant - Abrar Khan</h1>
        <ProfileImage src={Images.profile} alt="Abrar Khan" />
      </ProfileContainer>
    </Container>
  </Section>
));
