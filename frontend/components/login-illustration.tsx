import React from 'react'

export default function LoginIllustration() {
  return (
    <div className="w-full max-w-md">
      <svg
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Background circle */}
        <circle cx="200" cy="250" r="180" fill="#F0F4F8" opacity="0.5" />

        {/* Main credit card */}
        <g>
          {/* Card base */}
          <rect
            x="80"
            y="120"
            width="240"
            height="150"
            rx="12"
            fill="url(#cardGradient)"
            filter="drop-shadow(0 10 30 rgba(0, 51, 102, 0.15))"
          />

          {/* Card chip */}
          <rect x="100" y="140" width="35" height="35" rx="4" fill="#FFD700" opacity="0.8" />
          <circle cx="108" cy="148" r="3" fill="#DAA520" />
          <circle cx="118" cy="148" r="3" fill="#DAA520" />
          <circle cx="128" cy="148" r="3" fill="#DAA520" />
          <circle cx="108" cy="158" r="3" fill="#DAA520" />
          <circle cx="118" cy="158" r="3" fill="#DAA520" />
          <circle cx="128" cy="158" r="3" fill="#DAA520" />
          <circle cx="108" cy="168" r="3" fill="#DAA520" />
          <circle cx="118" cy="168" r="3" fill="#DAA520" />
          <circle cx="128" cy="168" r="3" fill="#DAA520" />

          {/* Cardholder name */}
          <text
            x="100"
            y="230"
            fontSize="12"
            fill="white"
            opacity="0.8"
            fontFamily="Inter, sans-serif"
          >
            CREDIT OFFICER
          </text>

          {/* Card number dots */}
          <circle cx="180" cy="215" r="2" fill="white" opacity="0.6" />
          <circle cx="195" cy="215" r="2" fill="white" opacity="0.6" />
          <circle cx="210" cy="215" r="2" fill="white" opacity="0.6" />
          <circle cx="225" cy="215" r="2" fill="white" opacity="0.6" />

          {/* Visa logo */}
          <text
            x="280"
            y="235"
            fontSize="14"
            fontWeight="bold"
            fill="white"
            fontFamily="Inter, sans-serif"
          >
            VISA
          </text>
        </g>

        {/* Data visualization bars */}
        <g>
          {/* Bar 1 */}
          <rect x="120" y="310" width="35" height="80" rx="4" fill="#005BAC" opacity="0.3" />
          <rect
            x="120"
            y="330"
            width="35"
            height="60"
            rx="4"
            fill="#005BAC"
            filter="drop-shadow(0 2 4 rgba(0, 91, 172, 0.2))"
          />

          {/* Bar 2 */}
          <rect x="165" y="310" width="35" height="80" rx="4" fill="#10B981" opacity="0.3" />
          <rect
            x="165"
            y="320"
            width="35"
            height="70"
            rx="4"
            fill="#10B981"
            filter="drop-shadow(0 2 4 rgba(16, 185, 129, 0.2))"
          />

          {/* Bar 3 */}
          <rect x="210" y="310" width="35" height="80" rx="4" fill="#003366" opacity="0.3" />
          <rect
            x="210"
            y="305"
            width="35"
            height="85"
            rx="4"
            fill="#003366"
            filter="drop-shadow(0 2 4 rgba(0, 51, 102, 0.2))"
          />

          {/* Bar 4 */}
          <rect x="255" y="310" width="35" height="80" rx="4" fill="#005BAC" opacity="0.3" />
          <rect
            x="255"
            y="325"
            width="35"
            height="65"
            rx="4"
            fill="#005BAC"
            filter="drop-shadow(0 2 4 rgba(0, 91, 172, 0.2))"
          />
        </g>

        {/* Checkmark */}
        <g>
          <circle cx="330" cy="180" r="20" fill="#10B981" opacity="0.2" />
          <circle
            cx="330"
            cy="180"
            r="18"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            opacity="0.6"
          />
          <polyline
            points="325,180 328,183 335,176"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Lock icon for security */}
        <g>
          <circle cx="80" cy="420" r="18" fill="#F0F4F8" />
          <path
            d="M 75 415 L 75 412 Q 75 408 79 408 Q 83 408 83 412 L 83 415 L 74 415 L 74 422 Q 74 424 76 424 L 82 424 Q 84 424 84 422 L 84 415"
            fill="none"
            stroke="#003366"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="79" cy="418" r="1.5" fill="#003366" />
        </g>

        {/* Text labels */}
        <text
          x="200"
          y="460"
          fontSize="14"
          fontWeight="600"
          fill="#1F2937"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
        >
          Secure & Protected
        </text>

        {/* Gradients */}
        <defs>
          <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#003366', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#005BAC', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
