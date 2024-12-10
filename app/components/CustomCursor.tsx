'use client';
import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  alpha: number;
  dx: number;
  dy: number;
  size: number;
}

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const requestRef = useRef<number>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      setIsModalOpen(hash === '#chatassistant' || hash === '#projects');
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const createParticle = (x: number, y: number): Particle => ({
      x,
      y,
      alpha: 0.8,
      dx: (Math.random() - 0.5) * 4,
      dy: (Math.random() - 0.5) * 4,
      size: Math.random() * 15 + 8
    });

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (isMoving && !isModalOpen) {
        for (let i = 0; i < 3; i++) {
          particlesRef.current.push(
            createParticle(mousePosition.x, mousePosition.y)
          );
        }
      }

      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.dx;
        particle.y += particle.dy;
        particle.alpha *= 0.97;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
        ctx.fill();

        if (particle.alpha < 0.1) {
          particlesRef.current.splice(index, 1);
        }
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 20);
    };

    window.addEventListener('mousemove', updateMousePosition);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [mousePosition, isMoving, isModalOpen]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        opacity: '0.9',
        filter: 'blur(8px)'
      }}
    />
  );
};

export default CustomCursor;