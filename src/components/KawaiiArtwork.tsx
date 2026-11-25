import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { GroupId } from '../types/learning';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#F8DCEB] via-[#FFF2F6] to-[#E2EFFF] p-6 text-center text-[#62546A] ${className}`}
        role="img"
        aria-label={alt}
      >
        <SoapMascot className="h-16 w-16 mb-3" />
        <p className="font-display text-base font-semibold">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

export const SoapMascot: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="soapBodyGrad" x1="14" y1="26" x2="66" y2="66" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FBE5F0" />
        <stop offset="100%" stopColor="#EBBAD4" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="6" fill="#E2EFFF" stroke="#8FB8E8" strokeWidth="1.6" />
    <circle cx="62" cy="18" r="4.5" fill="#FFF0C9" stroke="#D9B8D8" strokeWidth="1.5" />
    <circle cx="66" cy="31" r="3.5" fill="#E2EFFF" stroke="#8FB8E8" strokeWidth="1.4" />
    <rect x="13" y="28" width="54" height="36" rx="16" fill="url(#soapBodyGrad)" stroke="#62546A" strokeWidth="2.2" />
    <rect x="20" y="34" width="40" height="24" rx="10" fill="#FFF7FA" fillOpacity="0.8" stroke="#D9B8D8" strokeWidth="1.6" />
    <path d="M27 40H41" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const ToothbrushMascot: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="brushHandleGrad" x1="33" y1="28" x2="47" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E2EFFF" />
        <stop offset="100%" stopColor="#B8D4F6" />
      </linearGradient>
    </defs>
    <rect x="28" y="10" width="24" height="21" rx="6" fill="#FFFFFF" stroke="#62546A" strokeWidth="2.2" />
    <path d="M34 10V18M40 10V18M46 10V18" stroke="#9BBCE6" strokeWidth="2.2" strokeLinecap="round" />
    <rect x="34" y="27" width="12" height="43" rx="6" fill="url(#brushHandleGrad)" stroke="#62546A" strokeWidth="2.2" />
    <path d="M38 35V57" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
    <circle cx="21" cy="24" r="3.5" fill="#FFF0C9" stroke="#D9B8D8" strokeWidth="1.5" />
  </svg>
);

export const TowelMascot: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
    <rect x="16" y="20" width="48" height="40" rx="10" fill="#FFF0C9" stroke="#62546A" strokeWidth="2.2" />
    <rect x="16" y="20" width="48" height="14" rx="8" fill="#FFF7DF" stroke="#62546A" strokeWidth="2.2" />
    <path d="M18 46H62" stroke="#D9B8D8" strokeWidth="4" />
    <path d="M22 53H58" stroke="#62546A" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="3 4" opacity="0.55" />
  </svg>
);

export const BubblesMascot: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
    <circle cx="32" cy="43" r="18" fill="#E2EFFF" fillOpacity="0.8" stroke="#62546A" strokeWidth="2.2" />
    <path d="M22 35C24.5 30.5 29 29 33 29" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    <circle cx="55" cy="26" r="11" fill="#F8DCEB" fillOpacity="0.85" stroke="#62546A" strokeWidth="2" />
    <path d="M50 22C51.5 20 53.5 19 56 19" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="54" cy="54" r="8" fill="#FFF0C9" fillOpacity="0.9" stroke="#62546A" strokeWidth="2" />
  </svg>
);

export const FruitMascot: React.FC<{ group: GroupId; className?: string }> = ({
  group,
  className = 'w-8 h-8',
}) => {
  if (group === 'betik') {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <path
          d="M24 8C16 8 11 16 11 26C11 35 16 41 24 41C32 41 37 35 37 26C37 16 32 8 24 8Z"
          fill="#F9D5A7"
          stroke="#62546A"
          strokeWidth="2.1"
        />
        <path d="M24 8C24 5 26 3.5 28.5 3.5" stroke="#62546A" strokeWidth="2.1" strokeLinecap="round" />
        <path d="M18 18C16.5 21 16 25 16.5 29" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" opacity="0.75" />
      </svg>
    );
  }
  if (group === 'strawberi') {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <path
          d="M24 12C15.5 12 11 19 13 28C15 35 20 41 24 41C28 41 33 35 35 28C37 19 32.5 12 24 12Z"
          fill="#F4B2CA"
          stroke="#62546A"
          strokeWidth="2.1"
        />
        <path d="M17.5 12.5L24 7L30.5 12.5L24 14.5L17.5 12.5Z" fill="#BFE2BA" stroke="#62546A" strokeWidth="1.9" strokeLinejoin="round" />
        <circle cx="20" cy="22" r="1.2" fill="#FFF7FA" />
        <circle cx="28" cy="22" r="1.2" fill="#FFF7FA" />
        <circle cx="24" cy="28" r="1.2" fill="#FFF7FA" />
        <circle cx="20" cy="32" r="1.2" fill="#FFF7FA" />
        <circle cx="28" cy="32" r="1.2" fill="#FFF7FA" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M24 11V6M24 8C27 7 29.5 8 30.5 10" stroke="#62546A" strokeWidth="2.1" strokeLinecap="round" />
      <circle cx="18" cy="20" r="6" fill="#D9B8D8" stroke="#62546A" strokeWidth="1.9" />
      <circle cx="30" cy="20" r="6" fill="#D9B8D8" stroke="#62546A" strokeWidth="1.9" />
      <circle cx="15" cy="29" r="6" fill="#D9B8D8" stroke="#62546A" strokeWidth="1.9" />
      <circle cx="33" cy="29" r="6" fill="#D9B8D8" stroke="#62546A" strokeWidth="1.9" />
      <circle cx="24" cy="29" r="6.5" fill="#E9D2E8" stroke="#62546A" strokeWidth="1.9" />
      <circle cx="24" cy="37" r="6" fill="#D9B8D8" stroke="#62546A" strokeWidth="1.9" />
    </svg>
  );
};

export const HygieneSparkleIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <Sparkles className={className} aria-hidden="true" />
);
