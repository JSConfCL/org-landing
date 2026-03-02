'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Box from '@mui/material/Box';

// Generar estrellas con posiciones y colores aleatorios
const generateStars = (count: number, seed: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    // Pseudo-random usando seed
    const rand1 = Math.sin(seed + i * 12.9898) * 43758.5453;
    const rand2 = Math.sin(seed + i * 78.233) * 43758.5453;
    const rand3 = Math.sin(seed + i * 45.164) * 43758.5453;

    const frac1 = rand1 - Math.floor(rand1);
    const frac2 = rand2 - Math.floor(rand2);
    const frac3 = rand3 - Math.floor(rand3);

    const isYellow = frac3 > 0.5;

    stars.push({
      id: `${seed}-${i}`,
      left: frac1 * 100, // %
      top: frac2 * 100, // %
      size: 1 + (frac3 % 1.5),
      isYellow,
      delay: (i % 20) * 0.1,
    });
  }
  return stars;
};

export const StarsBackground = () => {
  const [isMounted, setIsMounted] = useState(false);
  const layer1Stars = useMemo(() => generateStars(80, 1), []);
  const layer2Stars = useMemo(() => generateStars(120, 2), []);
  const layer3Stars = useMemo(() => generateStars(150, 3), []);

  // Track which stars are currently boosted
  const [boostedStars, setBoostedStars] = useState<Set<string>>(new Set());

  useEffect(() => {
    setIsMounted(true);

    const boostInterval = setInterval(() => {
      // Seleccionar aleatoriamente entre 30-50% de estrellas para acelerar
      const allStars = [...layer1Stars, ...layer2Stars, ...layer3Stars];
      const boostCount = Math.ceil(allStars.length * (0.3 + Math.random() * 0.2));
      const newBoosted = new Set<string>();

      for (let i = 0; i < boostCount; i++) {
        const randomIndex = Math.floor(Math.random() * allStars.length);
        newBoosted.add(allStars[randomIndex].id);
      }

      setBoostedStars(newBoosted);
    }, 5000);

    return () => clearInterval(boostInterval);
  }, [layer1Stars, layer2Stars, layer3Stars]);

  if (!isMounted) {
    return null;
  }

  return (
    <Box
      aria-hidden
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        background: 'transparent',
      }}
    >
      <style>
        {`
          @keyframes starFloat1 {
            0% { transform: translateX(-100vw); opacity: 0; }
            10% { opacity: 0.3; }
            50% { opacity: 1; }
            90% { opacity: 0.3; }
            100% { transform: translateX(100vw); opacity: 0; }
          }
          
          @keyframes starFloat1Fast {
            0% { transform: translateX(-100vw); opacity: 0; }
            10% { opacity: 0.3; }
            50% { opacity: 1; }
            90% { opacity: 0.3; }
            100% { transform: translateX(100vw); opacity: 0; }
          }
          
          @keyframes starFloat2 {
            0% { transform: translateX(-100vw); opacity: 0; }
            10% { opacity: 0.5; }
            50% { opacity: 0.8; }
            90% { opacity: 0.5; }
            100% { transform: translateX(100vw); opacity: 0; }
          }
          
          @keyframes starFloat2Fast {
            0% { transform: translateX(-100vw); opacity: 0; }
            10% { opacity: 0.5; }
            50% { opacity: 0.8; }
            90% { opacity: 0.5; }
            100% { transform: translateX(100vw); opacity: 0; }
          }
          
          @keyframes starFloat3 {
            0% { transform: translateX(-100vw); opacity: 0; }
            10% { opacity: 0.2; }
            50% { opacity: 0.6; }
            90% { opacity: 0.2; }
            100% { transform: translateX(100vw); opacity: 0; }
          }
          
          @keyframes starFloat3Fast {
            0% { transform: translateX(-100vw); opacity: 0; }
            10% { opacity: 0.2; }
            50% { opacity: 0.6; }
            90% { opacity: 0.2; }
            100% { transform: translateX(100vw); opacity: 0; }
          }
          
          .star-item {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            will-change: transform;
          }
          
          .star-layer-1 .star-item {
            animation: starFloat1 18s linear infinite;
          }
          
          .star-layer-1 .star-item.boosted {
            animation: starFloat1Fast 9s linear infinite;
          }
          
          .star-layer-2 .star-item {
            animation: starFloat2 25s linear infinite;
          }
          
          .star-layer-2 .star-item.boosted {
            animation: starFloat2Fast 12.5s linear infinite;
          }
          
          .star-layer-3 .star-item {
            animation: starFloat3 35s linear infinite;
          }
          
          .star-layer-3 .star-item.boosted {
            animation: starFloat3Fast 17.5s linear infinite;
          }
        `}
      </style>

      {/* Capa 1: Estrellas rápidas, más visibles */}
      <Box
        className='star-layer-1'
        sx={{
          position: 'absolute',
          inset: '0 0 50% 0',
          overflow: 'hidden',
        }}
      >
        {/* Duplicar strellas para evitar gaps */}
        {[...layer1Stars, ...layer1Stars].map((star, idx) => (
          <Box
            key={`${star.id}-${idx}`}
            className={`star-item ${boostedStars.has(star.id) ? 'boosted' : ''}`}
            sx={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size * 1.5}px`,
              height: `${star.size * 1.5}px`,
              backgroundColor: star.isYellow
                ? 'rgba(240, 219, 79, 0.9)'
                : 'rgba(255, 255, 255, 0.85)',
              boxShadow: star.isYellow
                ? '0 0 8px rgba(240, 219, 79, 0.6)'
                : '0 0 6px rgba(255, 255, 255, 0.5)',
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </Box>

      {/* Capa 2: Estrellas medianas */}
      <Box
        className='star-layer-2'
        sx={{
          position: 'absolute',
          inset: '25% 0 25% 0',
          overflow: 'hidden',
        }}
      >
        {[...layer2Stars, ...layer2Stars].map((star, idx) => (
          <Box
            key={`${star.id}-${idx}`}
            className={`star-item ${boostedStars.has(star.id) ? 'boosted' : ''}`}
            sx={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.isYellow
                ? 'rgba(240, 219, 79, 0.7)'
                : 'rgba(255, 255, 255, 0.6)',
              boxShadow: star.isYellow
                ? '0 0 6px rgba(240, 219, 79, 0.5)'
                : '0 0 4px rgba(255, 255, 255, 0.4)',
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </Box>

      {/* Capa 3: Estrellas lentas, pequeñas (fondo) */}
      <Box
        className='star-layer-3'
        sx={{
          position: 'absolute',
          inset: '50% 0 0 0',
          overflow: 'hidden',
        }}
      >
        {[...layer3Stars, ...layer3Stars].map((star, idx) => (
          <Box
            key={`${star.id}-${idx}`}
            className={`star-item ${boostedStars.has(star.id) ? 'boosted' : ''}`}
            sx={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size * 0.7}px`,
              height: `${star.size * 0.7}px`,
              backgroundColor: star.isYellow
                ? 'rgba(240, 219, 79, 0.5)'
                : 'rgba(255, 255, 255, 0.4)',
              boxShadow: star.isYellow
                ? '0 0 4px rgba(240, 219, 79, 0.3)'
                : '0 0 2px rgba(255, 255, 255, 0.25)',
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
