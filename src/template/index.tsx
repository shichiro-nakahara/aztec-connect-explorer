import React from 'react';
import { default as styled } from 'styled-components';
import globeIcon from '../images/powerful-bg.svg';
import { colours } from '../styles/index.js';
import { ContentWrapper } from './content_wrapper.js';
import { Footer } from './footer.js';
import { Header } from './header.js';

export * from './content_wrapper.js';
export * from './details_section.js';
export * from './info_content.js';
export * from './section.js';
export * from './section_title.js';

const TemplateRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${colours.black};
  color: ${colours.white};
  overflow: hidden;
`;

const BackgroundIcon = styled.img`
  position: absolute;
  width: 1544px;
  transform: translateX(50%) translateY(-50%);
  margin-top: 168px;
  margin-left: -20px;
  opacity: 0.35;
  pointer-events: none;
`;

interface TemplateProps {
  children: React.ReactNode;
}

export const Template: React.FunctionComponent<TemplateProps> = ({ children }) => (
  <TemplateRoot>
    <BackgroundIcon src={globeIcon} />
    <ContentWrapper>
      <Header />
      {children}
    </ContentWrapper>
    <Footer />
  </TemplateRoot>
);
