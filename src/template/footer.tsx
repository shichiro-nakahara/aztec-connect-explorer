import React from 'react';
import { default as styled } from 'styled-components';
import globeIcon from '../images/powerful-bg.svg';
import { colours, fontSizes, fontWeights, lineHeights, spacings, breakpoints } from '../styles/index.js';
import { ContentWrapper } from './content_wrapper.js';
import { FooterMenu } from './footer_menu.js';
import { Text } from '../components/index.js';

const dev = window.location.hostname.includes('dev') || window.location.hostname.includes('localhost');
const networkItems = [
  {
    name: 'PolyAztec',
    href: dev ? 'https://dev.polyaztec.xyz' : 'https://polyaztec.xyz'
  },
];

const socialItems = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/poly_aztec',
  },
];

const FooterRoot = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacings.l};
  width: 100%;
  padding-top: ${spacings.xl};
  background: ${colours.greyDark};
  font-size: ${fontSizes.m};
  line-height: ${lineHeights.m};
  font-weight: ${fontWeights.light};
`;

const StyledContent = styled(ContentWrapper)`
  position: relative;
`;

const FooterContent = styled.div`
  position: relative;
  display: flex;
  padding: ${spacings.xl} 0;
  z-index: 1;

  @media (max-width: ${breakpoints.s}) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  width: 120px;
`;

const PrimaryCol = styled.div`
  flex: 1 1 auto;
  padding: ${spacings.xs} 0;

  @media (max-width: ${breakpoints.s}) {
    width: 100%;
    flex-shrink: 0;
  }
`;

const Col = styled.div`
  flex-shrink: 0;
  padding-left: ${parseInt(spacings.xxl) * 2}px;

  @media (max-width: ${breakpoints.m}) {
    padding-left: ${parseInt(spacings.xxl) + parseInt(spacings.xl)}px;
  }

  @media (max-width: ${breakpoints.s}) {
    padding: 0;
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${spacings.m} 0;
    width: 100%;
  }
`;

const GlobeBg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 1200px;
  margin-left: -720px;
  margin-top: -240px;
  opacity: 0.3;
  pointer-events: none;
`;

const Title = styled(Text)`
  font-size: ${fontSizes.l};
  line-height: ${lineHeights.m};
  letter-spacing: 4px;
  margin-bottom: 0.5rem;

  @media (max-width: ${breakpoints.xs}) {
    font-size: ${fontSizes.m};
    line-height: ${lineHeights.s};
  }
`;

export const Footer: React.FunctionComponent = () => (
  <FooterRoot>
    <StyledContent>
      <FooterContent>
        <PrimaryCol>
          <Title text="PolyAztec" color="white" weight="light" />
        </PrimaryCol>
        <Col>
          <FooterMenu title="Network" menuItems={networkItems} />
        </Col>
        <Col>
          <FooterMenu title="Social" menuItems={socialItems} />
        </Col>
      </FooterContent>
      <GlobeBg src={globeIcon} />
    </StyledContent>
  </FooterRoot>
);
