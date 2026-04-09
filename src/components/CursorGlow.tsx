'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    // Check if desktop (no touch device)
    const hasTouch = () => {
      return (
        window.matchMedia('(pointer:coarse)').matches ||
        window.matchMedia('(hover:none)').matches
      );
    };

    setIsDesktop(!hasTouch());

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    if (!hasTouch()) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-0"
      style={{
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(201, 169, 110, 0.06) 0%, rgba(201, 169, 110, 0.02) 50%, rgba(201, 169, 110, 0) 100%)`,
        left: `${mousePosition.x - 200}px`,
        top: `${mousePosition.y - 200}px`,
        transition: 'none',
        filter: 'blur(60px)',
      }}
      aria-hidden="true"
    />
  );
}
