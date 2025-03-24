import React from 'react';
import Scene from './components/3d/Scene';
import { Navigation } from './components/layout/Navigation';
import { Section } from './components/layout/Section';
import LoadingScreen from './components/ui/LoadingScreen';
import styled from 'styled-components';
import './styles/global.css';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: #fff;
  font-family: 'Inter', sans-serif;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
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
    <AppContainer>
      <LoadingScreen />
      <Scene />
      <Content>
        <Navigation />
        <main>
          {sections.map(section => (
            <Section
              key={section.id}
              id={section.id}
              title={section.title}
              subtitle={section.subtitle}
              text={section.text}
            />
          ))}
        </main>
      </Content>
    </AppContainer>
  );
};

export default App;
