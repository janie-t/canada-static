import React from 'react';
import { withSiteData } from 'react-static';
import styled, { css } from 'react-emotion';
import { map } from 'lodash';
import content from '../../content';
import { Section, Container } from '../commons';
import { Icons } from '../../assets';

const PURECLASSES = {
  grid: 'pure-g',
  square: 'pure-u-1 pure-u-md-1-2 pure-u-lg-1-3',
};

const HOME = content('pages.home');

const Grid = ({ items }) => (
  <div className={PURECLASSES.grid}>
    {map(items, ({ heading, subheading }) => (
      <Square key={heading} className={PURECLASSES.square}>
        <Icon src={Icons.bolt} alt="" />
        <Heading>{heading}</Heading>
        <Subheading>{subheading}</Subheading>
      </Square>
    ))}
  </div>
);

const Square = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 1em;
  max-width: 30%;
  text-align: center;
  color: grey;
`;

const Icon = styled.img`
  border-radius: 50%;
`;

const Heading = styled.div`
  text-transform: uppercase;
  font-size: 1em;
  margin-top: 5px;
  font-weight: bold;
  opacity: 0.7;
`;

const Subheading = styled.div`
  font-size: 0.9em;
  margin-top: 5px;
`;

export default withSiteData(() => {
  const FEATURES = content('pages.home.features');
  console.log(FEATURES);
  return (
    <Section>
      <Container>
        <Grid className={PURECLASSES.grid} items={FEATURES} />
      </Container>
    </Section>
  );
});
