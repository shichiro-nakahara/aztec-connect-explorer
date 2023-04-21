import React from 'react';
import { Link } from 'react-router-dom';
import { default as styled } from 'styled-components';
import { Text } from '../components/index.js';
import { spacings, breakpoints, fontSizes, lineHeights } from '../styles/index.js';
import { NetworkIndicator } from '../network_indicator/index.js';

const HeaderRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacings.xxl} 0;

  @media (max-width: ${breakpoints.s}) {
    align-items: flex-end;
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${spacings.xl} 0;
    flex-wrap: wrap;
  }
`;

const RightSideRoot = styled.div`
  display: flex;
  padding: ${spacings.xs} 0;

  @media (min-width: ${parseInt(breakpoints.xs) + 1}px) and (max-width: ${breakpoints.s}) {
    transform: translateY(-60px);
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${spacings.m} 0;
    width: 100%;
  }
`;

const LogoRoot = styled(Link)`
  display: flex;
  align-items: flex-end;

  @media (max-width: ${breakpoints.xs}) {
    flex-wrap: wrap;
  }
`;

const Title = styled(Text)`
  font-size: ${fontSizes.l};
  line-height: ${lineHeights.m};
  letter-spacing: 4px;
  margin-right: 1rem;

  @media (max-width: ${breakpoints.xs}) {
    font-size: ${fontSizes.m};
    line-height: ${lineHeights.s};
    margin-bottom: 0.5rem;
  }
`;

const Caption = styled(Text)`
  font-size: ${fontSizes.m};
  letter-spacing: 2px;

  @media (max-width: ${breakpoints.xs}) {
    font-size: ${fontSizes.s};
    line-height: ${lineHeights.s};
  }
`;

export const Header: React.FunctionComponent = () => (
  <HeaderRoot>
    <LogoRoot to="/">
      <Title text="PolyAztec" color="white" weight="light" />
      <Caption text="BLOCK EXPLORER" color="white" weight="light" />
    </LogoRoot>
    <RightSideRoot>
      <NetworkIndicator />
    </RightSideRoot>
  </HeaderRoot>
);
