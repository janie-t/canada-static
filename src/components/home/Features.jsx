import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled, { css } from 'react-emotion';
import { map } from 'lodash';
import content from '../../content';
import { Section } from '../commons';
import { Icons } from '../../assets';
import colors from '../../styles/colors';
import Profile from './Profile';
import SideNav from '../SideNav';

const PURECLASSES = {
  grid: 'pure-g',
  square: 'pure-u-1 pure-u-md-1-2 pure-u-lg-1-3',
};

const Grid = ({ items }) => (
  <FeatureGrid className={PURECLASSES.grid}>
    {map(items, ({ heading, path }) => (
        <Square key={heading} className={PURECLASSES.square}>
          <Icon src={Icons.leaf} alt="maple leaf" />
          <Link to={`/${path}`}>
            <Heading>{heading}</Heading>
          </Link>
        </Square>

    ))}
  </FeatureGrid>
);

const FeatureGrid = styled.div`
  margin-bottom: 3em;
`;

const Square = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 90%;
  margin: 20px auto 0;
  color: ${colors.RED};
  @media (min-width: 576px) {
    margin-top: 50px;
    padding: 1em;
    max-width: 100%;
  }
`;

const Icon = styled.img`
  border-radius: 10%;
  width: 50px;
  @media (min-width: 576px) {
    width: 100px;
  }
`;

const Heading = styled.div`
  text-transform: uppercase;
  font-size: 1.2em;
  margin-top: 5px;
  font-weight: bold;
  opacity: 0.7;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (min-width: 576px) {
    flex-direction: row;
    max-width: 1200px;
    padding: 2em;
  }
`

const GridWrapper = styled.div`
  width: 100%;
  @media (min-width: 576px) {
    width: 40%;
  }
`

const ProfileWrapper = styled.div`
width: 100%;
@media (min-width: 576px) {
  width: 30%;
}
`
const SideMenuWrapper = styled.div`
width: 100%;
@media (min-width: 576px) {
width: 30%;
}
`

export default withSiteData(() => {
  const FEATURES = content('pages.home.features');
  return (
    <Section>
      <Container>
        <SideMenuWrapper>< SideNav /></SideMenuWrapper>
        <GridWrapper>
          <Grid className={PURECLASSES.grid} items={FEATURES} />
        </GridWrapper>
        <ProfileWrapper>
          <Profile />
        </ProfileWrapper>
      </Container>
    </Section>
  );
});
