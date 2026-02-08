import React from 'react';
import useFadeIn from '../../hooks/useFadeIn.js';

const FadeInSection = ({ children, delay }) => {
  const { ref, isVisible } = useFadeIn(delay);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;