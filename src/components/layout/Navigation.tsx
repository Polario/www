import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a<{ active?: boolean }>`
  color: ${props => props.active ? 'var(--color-primary)' : 'var(--color-text)'};
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
  }
`;

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav>
      <NavContainer>
        <Logo>POLARIO</Logo>
        <NavLinks>
          {sections.map(section => (
            <NavLink
              key={section.id}
              href={`#${section.id}`}
              active={activeSection === section.id}
            >
              {section.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}; 