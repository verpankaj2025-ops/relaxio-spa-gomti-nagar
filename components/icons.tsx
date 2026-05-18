type IconProps = {
  className?: string;
  size?: number;
};

const defaults = { size: 24, className: 'text-amber-700' };

function svgProps({ className, size }: IconProps, strokeWidth = 2) {
  return {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size ?? defaults.size,
    height: size ?? defaults.size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: className ?? defaults.className,
    'aria-hidden': true as const,
  };
}

export function IconArrowRight({ className, size = 16 }: IconProps) {
  return (
    <svg {...svgProps({ className, size })}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function IconShieldCheck({ className, size = 30 }: IconProps) {
  return (
    <svg {...svgProps({ className, size })}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconBedDouble({ className, size = 30 }: IconProps) {
  return (
    <svg {...svgProps({ className, size })}>
      <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
      <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
      <path d="M12 4v6" />
      <path d="M2 18h20" />
    </svg>
  );
}

export function IconSparkles({ className, size = 30 }: IconProps) {
  return (
    <svg {...svgProps({ className, size })}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  );
}

export function IconMessageCircle({ className, size = 30 }: IconProps) {
  return (
    <svg {...svgProps({ className, size })}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

export function IconMapPin({ className, size = 24 }: IconProps) {
  return (
    <svg {...svgProps({ className, size })}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function IconClock({ className, size = 24 }: IconProps) {
  return (
    <svg {...svgProps({ className, size })}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function IconPhone({ className, size = 24 }: IconProps) {
  return (
    <svg {...svgProps({ className, size })}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function IconMenu({ className, size = 26 }: IconProps) {
  return (
    <svg {...svgProps({ className, size }, 1.75)}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function IconCheckCircle({ className, size = 20 }: IconProps) {
  return (
    <svg {...svgProps({ className: className ?? 'text-[#d4af37]', size })}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

export function IconMail({ className, size = 24 }: IconProps) {
  return (
    <svg {...svgProps({ className, size })}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function IconHeartHandshake({ className, size = 32 }: IconProps) {
  return (
    <svg {...svgProps({ className: className ?? 'text-[#d4af37]', size })}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9 8c-.5.5-1 1.07-1 2" />
      <path d="m18 15-2-2" />
      <path d="m6 15 2-2" />
    </svg>
  );
}
