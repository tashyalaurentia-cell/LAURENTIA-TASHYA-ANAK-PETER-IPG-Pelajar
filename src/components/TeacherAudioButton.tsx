import React from 'react';
import { Square, Volume2 } from 'lucide-react';
import { TeacherAudioId, useTeacherAudio } from '../utils/teacherAudio';

interface TeacherAudioButtonProps {
  clipId: TeacherAudioId;
  tone?: 'pink' | 'blue' | 'lavender' | 'cream';
  ariaLabel?: string;
  className?: string;
}

const TONE_CLASSES: Record<NonNullable<TeacherAudioButtonProps['tone']>, string> = {
  pink: 'bg-[#F8DCEB]/85 hover:bg-[#F8DCEB] border-[#F3A6C8]/75 text-[#62546A]',
  blue: 'bg-[#E2EFFF]/90 hover:bg-[#E2EFFF] border-[#9CC4FF]/75 text-[#62546A]',
  lavender: 'bg-[#D9B8D8]/45 hover:bg-[#D9B8D8]/70 border-[#D9B8D8]/85 text-[#62546A]',
  cream: 'bg-[#FFF0C9]/90 hover:bg-[#FFF0C9] border-[#E7C97A]/75 text-[#62546A]',
};

export const TeacherAudioButton: React.FC<TeacherAudioButtonProps> = ({
  clipId,
  tone = 'pink',
  ariaLabel = 'Dengar bacaan arahan',
  className = '',
}) => {
  const { isPlaying, toggle } = useTeacherAudio(clipId);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isPlaying}
      aria-label={isPlaying ? 'Hentikan bacaan audio' : ariaLabel}
      title={isPlaying ? 'Hentikan audio' : 'Dengar arahan'}
      className={`kawaii-btn no-print inline-flex items-center justify-center w-9 h-9 rounded-full border shrink-0 cursor-pointer kawaii-shadow-sm transition-all ${
        isPlaying
          ? 'bg-[#62546A] border-[#62546A] text-[#FFF2F6] ring-3 ring-[#F8DCEB] animate-pulse'
          : TONE_CLASSES[tone]
      } ${className}`}
    >
      {isPlaying ? (
        <Square className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
      ) : (
        <Volume2 className="w-4 h-4" aria-hidden="true" />
      )}
    </button>
  );
};
