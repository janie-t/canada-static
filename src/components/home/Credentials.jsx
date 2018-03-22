import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled from 'react-emotion';
import { Images } from '../../assets';
import content from '../../content';
import colors from '../../styles/colors';

const Heading = styled.div`
  font-size: 0.7em;
  color: ${colors.WHITE};
  font-weight: bolder;
  text-align: center;
  background-color: ${colors.DARKBLUE};
  padding-top: 1em;
  @media (min-width: 576px) {
    background-color: ${colors.WHITE};
    color: black;
    font-size: 1em;
    padding-top: 2em;
    text-align: right;
    margin-right: 2em;
  }
`;

export default withSiteData(() => {
  const CRED = content('credentials.address');
    return (
        <div>
          <Heading>
            {CRED}
          </Heading>
          </div>
      );
});
