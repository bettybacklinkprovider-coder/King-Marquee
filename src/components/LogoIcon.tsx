import React from 'react';

interface LogoIconProps {
  className?: string;
}

export default function LogoIcon({ className = "w-10 h-10" }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Rich Gold Gradient */}
        <linearGradient id="kingGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7C2" />
          <stop offset="25%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#B45309" />
          <stop offset="75%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>

        <linearGradient id="goldShine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
      </defs>

      {/* Dark Square Background Container with Soft Curved Corners */}
      <rect width="200" height="200" rx="32" fill="#090807" />

      {/* Outer Metallic Gold Ring */}
      <circle
        cx="100"
        cy="108"
        r="72"
        stroke="url(#kingGold)"
        strokeWidth="7"
        fill="none"
      />

      {/* Inner Thin Decorative Accent Ring */}
      <circle
        cx="100"
        cy="108"
        r="63"
        stroke="url(#kingGold)"
        strokeWidth="1.8"
        fill="none"
        opacity="0.8"
      />

      {/* Crown Mounted Atop the Ring */}
      <g id="ring-crown">
        {/* Crown Base Curve Line */}
        <path
          d="M 66 52 Q 100 42 134 52 L 138 30 L 118 42 L 100 22 L 82 42 L 62 30 Z"
          fill="url(#kingGold)"
        />

        {/* Crown Spheres / Jewels */}
        <circle cx="62" cy="28" r="4" fill="url(#goldShine)" />
        <circle cx="82" cy="40" r="3.5" fill="url(#goldShine)" />
        <circle cx="100" cy="20" r="5" fill="url(#goldShine)" />
        <circle cx="118" cy="40" r="3.5" fill="url(#goldShine)" />
        <circle cx="138" cy="28" r="4" fill="url(#goldShine)" />
        
        {/* Base Band Under Crown */}
        <path
          d="M 68 54 Q 100 46 132 54"
          stroke="url(#goldShine)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Bold Regal "K" Letter */}
      <text
        x="100"
        y="142"
        fontSize="92"
        fontFamily="Cinzel, Playfair Display, Georgia, serif"
        fontWeight="900"
        fill="url(#kingGold)"
        textAnchor="middle"
      >
        K
      </text>
    </svg>
  );
}
