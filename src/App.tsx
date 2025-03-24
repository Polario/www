import React from 'react';
import styled from 'styled-components';
import { Scene } from './components/3d/Scene';
import { Navigation } from './components/layout/Navigation';
import { Section } from './components/layout/Section';
import LoadingScreen from './components/ui/LoadingScreen';
import { ThemeProvider } from './styles/ThemeProvider';
import './styles/global.css';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.neutral.white};
  overflow-x: hidden;
`;

const Content = styled.main`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
`;

const sections = [
  {
    id: 'home',
    title: 'POLARIO',
    subtitle: 'Transforming Business Through Innovation',
    text: 'Welcome to POLARIO, where we revolutionize business operations through cutting-edge technology and sustainable practices.'
  },
  {
    id: 'about',
    title: 'The POLAR Framework',
    subtitle: 'Our Unique Approach',
    text: 'The POLAR Framework is our proprietary methodology that combines Process Optimization, Lean principles, Agile methodologies, and Robust systems to deliver exceptional results.'
  },
  {
    id: 'services',
    title: 'MCP Integration',
    subtitle: 'Seamless Business Solutions',
    text: 'Our MCP (Management Control Platform) integration services help businesses streamline operations, enhance efficiency, and drive sustainable growth.'
  },
  {
    id: 'contact',
    title: 'Get Started',
    subtitle: 'Transform Your Business',
    text: 'Ready to revolutionize your business? Contact us today to learn how POLARIO can help you achieve your goals.'
  }
];

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContainer>
        <LoadingScreen />
        <Scene />
        <Navigation />
        <Content>
          {sections.map((section) => (
            <Section
              key={section.id}
              id={section.id}
              title={section.title}
              subtitle={section.subtitle}
              text={section.text}
            />
          ))}
        </Content>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
