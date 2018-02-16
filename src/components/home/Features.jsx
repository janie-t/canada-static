import React from 'react';
import { withSiteData } from 'react-static';
import styled, { css } from 'react-emotion';
import content from '../../content';
import { Section, Container } from '../commons';
import { Images } from '../../assets';


const CLASSES = {
  grid: 'pure-g',
  square: 'pure-u-1 pure-u-md-1-2 pure-u-lg-1-3',
};

const HOME = content('pages.home');

const Grid = styled.div`
  background-color: purple;
  width: 1000px;
`;

const Square = styled.div`
  background-color: pink;
  margin: 1em;
  max-width: 20%;
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
    <Container>
      <Grid className={CLASSES.grid}>
        <Square className={CLASSES.square}>
          <Heading>Heading</Heading>
          <Subheading>Subheading</Subheading>
        </Square>
        <Square className={CLASSES.square}>  <Heading>Heading</Heading>
          <Subheading>Subheading</Subheading>
        </Square>
        <Square className={CLASSES.square}>  <Heading>Heading</Heading>
          <Subheading>Subheading</Subheading>
        </Square>
      </Grid>
    </Container>
  </Section >
);

export default Features;
