import React from 'react';

type MousePosition = {
  x: number;
  y: number;
};

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({
        x: ev.clientX,
        y: ev.clientY + document.documentElement.scrollTop,
      });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
