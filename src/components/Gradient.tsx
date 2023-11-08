'use client';

import React from 'react';
import useMousePosition from '@/hooks/useMousePosition';

function Gradient() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, var(--gradient-color), transparent 80%)`,
      }}
    ></div>
  );
}

export default Gradient;
