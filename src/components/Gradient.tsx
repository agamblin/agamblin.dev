'use client';

import React from 'react';
import useMousePosition from '@/hooks/useMousePosition';

function Gradient() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="bg-spotlight pointer-events-none fixed inset-0 lg:absolute"
      style={
        {
          '--dynamic-x': `${x}px`,
          '--dynamic-y': `${y}px`,
        } as React.CSSProperties
      }
    />
  );
}

export default Gradient;
