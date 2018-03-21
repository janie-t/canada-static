import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled, { css } from 'react-emotion';
import { map } from 'lodash';
import content from '../../content';
import { Section, Container } from '../commons';
import { Images } from '../../assets';
import colors from '../../styles/colors';

const PURECLASSES = {
  grid: 'pure-g',
  square: 'pure-u-1 pure-u-md-1-2 pure-u-lg-1-3',
};

const Header = styled.div`
  width: 100%;
  height: 94vh;
  background: ${colors.RED};
  @media (min-width: 576px) {
    background: url(${Images.vancouverNight}) no-repeat;
    height: 30vh;
    display: flex;
  }
`;

const ContentWrapper = styled.div`
@media (min-width: 576px) {
  min-height: calc(100vh - 500px);
}
`

export default withSiteData(() => {
  return (
    <Section>
      <Header />
      <Container>
        <ContentWrapper>
          <h1>Settle in Canada Permanently</h1>
        </ContentWrapper>
      </Container>
    </Section>
  );
});
