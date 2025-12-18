'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SkillChip {
  id: number;
  name: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  animationType: 'floatSmooth' | 'floatSmooth2' | 'floatSmooth3';
  animationDelay: number;
  animationDuration: number;
}

// Icon components for each skill
const getSkillIcon = (skillName: string) => {
  const iconClass = "w-5 h-5 text-amber-200 group-hover:text-amber-50 transition-colors duration-300";
  
  const icons: Record<string, React.ReactNode> = {
    'React': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="2"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-60 12 12)"/>
      </svg>
    ),
    'TypeScript': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 8h8v2h-6v2h6v2h-6v4H8V8z" fill="currentColor"/>
        <path d="M16 8h2v8h-2v-8z" fill="currentColor"/>
      </svg>
    ),
    'Next.js': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 2L22 20H2L12 2z" fill="currentColor" opacity="0.8"/>
      </svg>
    ),
    'Tailwind CSS': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.39 10.78 14.78 12 18 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C16.61 7.22 15.22 6 12 6zm-6 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C7.39 16.78 8.78 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.22 9.22 12 6 12z"/>
      </svg>
    ),
    'JavaScript': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 7h3v8c0 2-1 3-3 3-1.5 0-2.5-.5-3-1.5M14 7h3v2h-3v6c0 2 1.5 3 3.5 3s3-.5 3.5-1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    'HTML5': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 2h15L18 20l-6 2-6-2L4.5 2z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 7h10M7 11h10M7 15h6" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    'CSS3': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 2h15L18 20l-6 2-6-2L4.5 2z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 7h10l-1 4H8l-1-4z" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
    'Storybook': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    'Radix UI': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="9" cy="9" r="1.5" fill="currentColor"/>
        <circle cx="15" cy="9" r="1.5" fill="currentColor"/>
        <path d="M9 15h6" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    'Web Vitals': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 12l-5-2.5v5L12 17l5-2.5v-5L12 12z" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
    'Accessibility': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="3"/>
        <path d="M12 11v6M9 14h6"/>
        <path d="M5 20h14" strokeWidth="2"/>
      </svg>
    ),
    'WCAG 2.2': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    ),
    'React Hooks': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    'Performance': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12h4l2-8 4 16 2-4h4"/>
      </svg>
    ),
    'UI/UX': (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 9h6M9 15h6"/>
      </svg>
    ),
  };
  
  return icons[skillName] || (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
};

// Mainly frontend skills
const skills = [
  'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript',
  'HTML5', 'CSS3', 'Storybook', 'Radix UI', 'Web Vitals',
  'Accessibility', 'WCAG 2.2', 'React Hooks', 'Performance', 'UI/UX'
];

export default function FloatingSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [chips, setChips] = useState<SkillChip[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Hide skills when scrolling past hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Hide when scrolled past 80% of viewport height
      setIsVisible(scrollY < windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Mark as mounted immediately
    setIsMounted(true);
    
    const getContainerSize = () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };

    const { width: containerWidth, height: containerHeight } = getContainerSize();
    const chipSize = 40;
    const minDistance = chipSize + 30;

    // Initialize chips with balanced left/right distribution, ensuring no overlap
    const initialChips: SkillChip[] = [];
    const leftSideSkills = Math.ceil(skills.length / 2);
    
    // Split skills between left and right sides for balance
    const leftSkills = skills.slice(0, leftSideSkills);
    const rightSkills = skills.slice(leftSideSkills);
    
    // Helper function to place chips on a specific side
    const placeChipsOnSide = (sideSkills: string[], startIndex: number, isLeft: boolean) => {
      const startX = isLeft ? 80 : containerWidth / 2 + 20;
      const endX = isLeft ? containerWidth / 2 - 20 : containerWidth - 80;
      
      for (let i = 0; i < sideSkills.length; i++) {
        let attempts = 0;
        let baseX, baseY;
        let validPosition = false;

        // Try to find a position that doesn't overlap
        while (!validPosition && attempts < 100) {
          baseX = startX + Math.random() * (endX - startX);
          baseY = 100 + Math.random() * (containerHeight - 200);
          
          validPosition = true;
          for (const existingChip of initialChips) {
            const distance = Math.sqrt(
              Math.pow(baseX - existingChip.x, 2) + 
              Math.pow(baseY - existingChip.y, 2)
            );
            if (distance < minDistance) {
              validPosition = false;
              break;
            }
          }
          attempts++;
        }

        if (!validPosition) {
          baseX = startX + Math.random() * (endX - startX);
          baseY = 100 + Math.random() * (containerHeight - 200);
        }
        
        // Assign different animation types for variety
        const animationTypes: Array<'floatSmooth' | 'floatSmooth2' | 'floatSmooth3'> = ['floatSmooth', 'floatSmooth2', 'floatSmooth3'];
        const animationType = animationTypes[i % 3];
        const animationDelay = Math.random() * 0.5; // Random delay 0-0.5s for immediate start
        const animationDuration = 18 + Math.random() * 8; // Duration between 18-26s
        
        initialChips.push({
          id: startIndex + i,
          name: sideSkills[i],
          icon: getSkillIcon(sideSkills[i]),
          x: baseX,
          y: baseY,
          animationType,
          animationDelay,
          animationDuration,
        });
      }
    };
    
    // Place chips on both sides
    placeChipsOnSide(leftSkills, 0, true);
    placeChipsOnSide(rightSkills, leftSideSkills, false);

    setChips(initialChips);

    // Handle resize - maintain left/right balance
    const handleResize = () => {
      const { width: newWidth, height: newHeight } = getContainerSize();
      const leftSideSkills = Math.ceil(skills.length / 2);
      
      setChips((prevChips) =>
        prevChips.map((chip, index) => {
          // Determine if chip should be on left or right side
          const isLeft = index < leftSideSkills;
          const startX = isLeft ? 80 : newWidth / 2 + 20;
          const endX = isLeft ? newWidth / 2 - 20 : newWidth - 80;
          
          // Maintain relative position within side bounds
          const relativeX = isLeft 
            ? (chip.x - 80) / (containerWidth / 2 - 100)
            : (chip.x - containerWidth / 2 - 20) / (containerWidth / 2 - 100);
          
          const baseX = Math.max(startX, Math.min(endX, startX + relativeX * (endX - startX)));
          const baseY = Math.max(100, Math.min(newHeight - 100, chip.y));
          
          return {
            ...chip,
            x: baseX,
            y: baseY,
          };
        })
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Don't render until mounted to avoid layout shift
  if (!isMounted || chips.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-[1] overflow-hidden transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {chips.map((chip) => {
        const animationClass = 
          chip.animationType === 'floatSmooth' ? 'animate-float-smooth' :
          chip.animationType === 'floatSmooth2' ? 'animate-float-smooth-2' :
          'animate-float-smooth-3';
        
        return (
        <div
          key={chip.id}
          className={`absolute flex items-center justify-center group ${animationClass}`}
          style={{
            left: `${chip.x}px`,
            top: `${chip.y}px`,
            transform: 'translate(-50%, -50%)',
            willChange: 'transform',
            animationDelay: `${chip.animationDelay}s`,
            animationDuration: `${chip.animationDuration}s`,
            animationFillMode: 'both',
            opacity: 1,
          }}
        >
          {/* Main chip container */}
          <div 
            className="relative w-10 h-10 flex items-center justify-center overflow-hidden" 
            style={{ 
              borderRadius: '10px',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              perspective: '1000px',
            }}
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-orange-500/20 to-amber-600/30 rounded-lg blur-md group-hover:blur-lg transition-all duration-300"
              style={{ borderRadius: '10px' }}
            />
            
            {/* Border glow */}
            <div 
              className="absolute inset-0 border-2 border-amber-500/50 rounded-lg group-hover:border-amber-400/70 transition-all duration-300"
              style={{ borderRadius: '10px' }}
            />
            
            {/* Background with gradient - opacity 0.3 */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-amber-600/30 via-orange-600/25 to-amber-700/30 backdrop-blur-sm rounded-lg group-hover:from-amber-600/45 group-hover:via-orange-600/40 group-hover:to-amber-700/45 transition-all duration-300 shadow-lg group-hover:shadow-xl"
              style={{ borderRadius: '10px', opacity: 0.3 }}
            />
            
            {/* Icon container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center" style={{ transform: 'translateZ(0)' }}>
              {chip.icon}
            </div>
            
            {/* Shine effect on hover */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer-idle"
              style={{ borderRadius: '10px' }}
            />
          </div>
        </div>
        );
      })}
    </div>
  );
}

