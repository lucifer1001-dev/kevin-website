'use client';

import { useEffect, useRef } from 'react';

export default function IdleAnimations() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
  }>>([]);
  const animationFrameRef = useRef<number>();
  const lastInteractionRef = useRef<number>(Date.now());
  const isIdleRef = useRef<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 12000);
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2.5 + 1.5,
        opacity: Math.random() * 0.4 + 0.3,
      }));
    };
    initParticles();

    // Track user interaction
    const handleInteraction = () => {
      lastInteractionRef.current = Date.now();
      isIdleRef.current = false;
      setTimeout(() => {
        if (Date.now() - lastInteractionRef.current > 2000) {
          isIdleRef.current = true;
        }
      }, 2000);
    };

    const events = ['mousemove', 'click', 'keydown', 'scroll', 'touchstart'];
    events.forEach(event => {
      window.addEventListener(event, handleInteraction, { passive: true });
    });

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with fade effect for trailing particles
      ctx.fillStyle = 'rgba(10, 8, 6, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Always animate particles (more active when idle)
      const speedMultiplier = isIdleRef.current ? 1.8 : 1.2;
      
      particlesRef.current.forEach((particle) => {
        // Update position with variable speed
        particle.x += particle.vx * speedMultiplier;
        particle.y += particle.vy * speedMultiplier;

        // Wrap around edges for continuous flow
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, `rgba(212, 165, 116, ${particle.opacity})`);
        gradient.addColorStop(0.5, `rgba(212, 165, 116, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(212, 165, 116, 0)`);
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections to nearby particles
        particlesRef.current.forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            const connectionOpacity = isIdleRef.current 
              ? 0.2 * (1 - distance / 180)
              : 0.12 * (1 - distance / 180);
            ctx.strokeStyle = `rgba(212, 165, 116, ${connectionOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      events.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Floating orbs - always moving */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-full blur-3xl animate-float-idle" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-orange-600/20 to-amber-600/20 rounded-full blur-3xl animate-float-idle animation-delay-500" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-br from-yellow-600/15 to-amber-600/15 rounded-full blur-3xl animate-float-idle animation-delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-orange-600/15 to-amber-700/15 rounded-full blur-3xl animate-float-idle animation-delay-700" />
        <div className="absolute bottom-1/3 right-1/2 w-56 h-56 bg-gradient-to-tl from-amber-600/12 to-yellow-600/12 rounded-full blur-3xl animate-float-idle animation-delay-300" />
      </div>

      {/* Animated gradient waves */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-orange-600/10 animate-gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-600/8 via-transparent to-amber-600/8 animate-gradient-wave" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-600/5 to-transparent animate-gradient" />
      </div>
      
      {/* Animated wave shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-20" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path
            d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
            fill="url(#waveGradient)"
            className="animate-wave"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; -100 0; 0 0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(212, 165, 116, 0.3)" />
              <stop offset="50%" stopColor="rgba(244, 162, 97, 0.2)" />
              <stop offset="100%" stopColor="rgba(212, 165, 116, 0.3)" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="absolute top-0 left-0 w-full h-64 opacity-15" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path
            d="M0,100 Q300,150 600,100 T1200,100 L1200,0 L0,0 Z"
            fill="url(#waveGradient2)"
            className="animate-wave"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 100 0; 0 0"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(244, 162, 97, 0.2)" />
              <stop offset="50%" stopColor="rgba(212, 165, 116, 0.3)" />
              <stop offset="100%" stopColor="rgba(244, 162, 97, 0.2)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Moving light rays */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-600/20 to-transparent animate-light-ray" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-orange-600/15 to-transparent animate-light-ray animation-delay-500" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-amber-600/15 to-transparent animate-light-ray animation-delay-1000" />
      </div>
    </>
  );
}

