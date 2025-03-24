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
    subtitle: 'Operational Intelligence for the Digital Age',
    text: 'Empowering businesses with actionable intelligence through the POLAR framework and MCP integration'
  },
  {
    id: 'about',
    title: 'The POLAR Framework',
    text: 'A structured approach to operational intelligence: People, Objects, Locations, Actions, and Risks (IO)'
  },
  {
    id: 'services',
    title: 'MCP Integration',
    text: 'Enhancing the MCP ecosystem with business-oriented solutions and standardized data access'
  },
  {
    id: 'contact',
    title: 'Get Started',
    text: 'Transform your business with POLARIO\'s precision-driven approach to operational intelligence'
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
