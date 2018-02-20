import React from 'react';
import { withSiteData } from 'react-static';
import styled, { css } from 'react-emotion';
import content from '../../content';
import { Section, Container } from '../commons';
import { Icons } from '../../assets';

const PURECLASSES = {
  grid: 'pure-g',
  square: 'pure-u-1 pure-u-md-1-2 pure-u-lg-1-3',
};

const HOME = content('pages.home');

const Grid = styled(Container)`
  width: 100%;
  text-align: center;
`;

const Square = styled.div`
  background-color: white;
  padding-top: 5px;
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

const Features = () => (
  <Section>
    <Grid className={PURECLASSES.grid}>
      <Square className={PURECLASSES.square}>
        <img src={Icons.bolt} alt="" />
        <Heading>Heading</Heading>
        <Subheading>Subheading</Subheading>
      </Square>
    </Grid>
  </Section>
);

export default Features;
