import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section<{ id: string }>`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Content = styled.div`
  max-width: 800px;
  text-align: center;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--color-text);
  opacity: 0.8;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--color-text);
  opacity: 0.9;
`;

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  text: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, text }) => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [id]);

  return (
    <SectionContainer id={id}>
      <Content>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Text>{text}</Text>
      </Content>
    </SectionContainer>
  );
}; 