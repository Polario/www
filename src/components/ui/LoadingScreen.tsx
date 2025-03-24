import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 1;
  transition: opacity 0.5s ease-out;
`;

const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #ffffff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.div`
  margin-top: 20px;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 500;
`;

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      gsap.to('.loading-container', {
        opacity: 0,
        duration: 0.5,
        onComplete: () => setIsVisible(false),
      });
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (!isVisible) return null;

  return (
    <LoadingContainer className="loading-container">
      <Loader />
      <LoadingText>Loading POLARIO Experience...</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingScreen; 