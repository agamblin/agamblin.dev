'use client';

import React from 'react';
import useMousePosition from '@/hooks/useMousePosition';

function Gradient() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px,
             rgba(29, 78, 216, 0.15),
             rgba(31, 75, 205, 0.15),
             rgba(36, 69, 178, 0.15),
             rgba(39, 61, 143, 0.15),
             rgba(39, 52, 109, 0.15),
             rgba(37, 43, 81, 0.15),
             rgba(33, 37, 62, 0.15),
             transparent 
             )`,
      }}
    ></div>
  );
}

export default Gradient;
