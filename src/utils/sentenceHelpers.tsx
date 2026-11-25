import React from 'react';

export interface PosterPractice {
  id: 'tangan' | 'gigi' | 'mandi' | 'pakaian';
  number: number;
  title: string;
  caption: string;
  keywords: string[];
  sampleSentence: string;
  bgClass: string;
}

export const POSTER_PRACTICES: PosterPractice[] = [
  {
    id: 'tangan',
    number: 1,
    title: 'Mencuci tangan sebelum makan',
    caption: 'Mengelakkan kuman masuk ke dalam badan dan menjaga kesihatan diri.',
    keywords: ['cuci', 'mencuci', 'basuh', 'membasuh', 'tangan', 'sabun', 'makan', 'kuman', 'bersih', 'kesihatan'],
    sampleSentence: 'Saya mencuci tangan sebelum makan supaya kuman tidak masuk ke dalam badan.',
    bgClass: 'bg-[#F8DCEB]/65',
  },
  {
    id: 'gigi',
    number: 2,
    title: 'Menggosok gigi setiap hari',
    caption: 'Menghindari kerosakan gigi dan menjadikan nafas segar.',
    keywords: ['gosok', 'menggosok', 'berus', 'memberus', 'gigi', 'sihat', 'bersih', 'hari', 'nafas', 'kerosakan'],
    sampleSentence: 'Saya menggosok gigi setiap hari untuk menghindari kerosakan gigi dan menjadikan nafas segar.',
    bgClass: 'bg-[#E2EFFF]/75',
  },
  {
    id: 'mandi',
    number: 3,
    title: 'Mandi sekurang-kurangnya dua kali sehari',
    caption: 'Membersihkan badan daripada bakteria dan menyegarkan tubuh badan.',
    keywords: ['mandi', 'sabun', 'segar', 'menyegarkan', 'bersih', 'bakteria', 'badan', 'sehari', 'dua'],
    sampleSentence: 'Kita perlu mandi sekurang-kurangnya dua kali sehari agar badan bersih daripada bakteria.',
    bgClass: 'bg-[#FFF0C9]/80',
  },
  {
    id: 'pakaian',
    number: 4,
    title: 'Memakai pakaian yang bersih',
    caption: 'Memberikan keselesaan dan meningkatkan keyakinan diri.',
    keywords: ['pakai', 'memakai', 'pakaian', 'baju', 'kemas', 'bersih', 'selesa', 'keselesaan', 'keyakinan'],
    sampleSentence: 'Saya memakai pakaian yang bersih supaya berasa selesa dan meningkatkan keyakinan diri.',
    bgClass: 'bg-[#D9B8D8]/40',
  },
];

export const PracticeIllustration: React.FC<{ id: PosterPractice['id'] }> = ({ id }) => {
  if (id === 'tangan') {
    return (
      <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 shrink-0" aria-hidden="true">
        <circle cx="40" cy="40" r="36" fill="#FFFFFF" />
        <path d="M25 22C25 18 29 16 34 16H42V24H34V28" stroke="#62546A" strokeWidth="2.3" strokeLinecap="round" />
        <path d="M32 30C30 34 31 38 33 38C35 38 36 34 34 30Z" fill="#B8D8FF" stroke="#62546A" strokeWidth="1.6" />
        <rect x="26" y="42" width="28" height="18" rx="9" fill="#F8DCEB" stroke="#62546A" strokeWidth="2.1" />
        <path d="M33 48H47" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="23" cy="40" r="5" fill="#E2EFFF" stroke="#62546A" strokeWidth="1.7" />
        <circle cx="57" cy="44" r="4.5" fill="#FFF0C9" stroke="#62546A" strokeWidth="1.7" />
      </svg>
    );
  }
  if (id === 'gigi') {
    return (
      <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 shrink-0" aria-hidden="true">
        <circle cx="40" cy="40" r="36" fill="#FFFFFF" />
        <path
          d="M27 25C22 25 20 31 22 39C24 47 26 57 31 57C34 57 36 49 40 49C44 49 46 57 49 57C54 57 56 47 58 39C60 31 58 25 53 25C48 25 44 27 40 27C36 27 32 25 27 25Z"
          fill="#FFFDF9"
          stroke="#62546A"
          strokeWidth="2.2"
        />
        <path d="M18 54L52 20" stroke="#A6CEFF" strokeWidth="5" strokeLinecap="round" />
        <rect x="47" y="16" width="14" height="8" rx="3" transform="rotate(-45 47 16)" fill="#F8DCEB" stroke="#62546A" strokeWidth="1.8" />
      </svg>
    );
  }
  if (id === 'mandi') {
    return (
      <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 shrink-0" aria-hidden="true">
        <circle cx="40" cy="40" r="36" fill="#FFFFFF" />
        <path d="M24 22C24 16 32 14 38 14C44 14 48 18 48 22H24Z" fill="#D9B8D8" stroke="#62546A" strokeWidth="2.1" />
        <path d="M28 28L25 36M36 28V38M44 28L47 36" stroke="#85B8FF" strokeWidth="2.3" strokeLinecap="round" />
        <circle cx="30" cy="50" r="9" fill="#E2EFFF" stroke="#62546A" strokeWidth="1.9" />
        <circle cx="46" cy="52" r="11" fill="#F8DCEB" stroke="#62546A" strokeWidth="1.9" />
        <path d="M40 47C42 45 44.5 44.5 47 44.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 shrink-0" aria-hidden="true">
      <circle cx="40" cy="40" r="36" fill="#FFFFFF" />
      <path
        d="M28 22L34 20C36 24 44 24 46 20L52 22L62 32L55 40L51 36V58H29V36L25 40L18 32L28 22Z"
        fill="#E2EFFF"
        stroke="#62546A"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M35 33H45" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="57" cy="21" r="4" fill="#FFF0C9" stroke="#62546A" strokeWidth="1.7" />
    </svg>
  );
};

export interface SentenceEvaluation {
  status: 'empty' | 'needs-work' | 'good';
  title: string;
  message: string;
}

export function evaluateSentence(text: string, topicKeywords: string[] = []): SentenceEvaluation {
  const trimmed = text.trim();
  if (!trimmed) {
    return {
      status: 'empty',
      title: 'Belum diisi',
      message: 'Sila tulis ayat kamu di ruang yang disediakan sebelum menyemak jawapan.',
    };
  }

  const words = trimmed.split(/\s+/).filter(Boolean);
  const startsUpper = /^[A-Z]/.test(trimmed);
  const endsPunct = /[.!?]$/.test(trimmed);
  const lower = trimmed.toLowerCase();
  const hasRelevantTopic =
    topicKeywords.length === 0 || topicKeywords.some((kw) => lower.includes(kw));

  const tips: string[] = [];
  if (words.length < 4) {
    tips.push('tambah sedikit lagi perkataan supaya ayat lebih lengkap (sekurang-kurangnya 4 perkataan)');
  }
  if (!startsUpper) {
    tips.push('mulakan ayat dengan huruf besar');
  }
  if (!endsPunct) {
    tips.push('akhiri ayat dengan tanda noktah (.)');
  }
  if (!hasRelevantTopic) {
    tips.push('masukkan kata kunci berkaitan amalan kebersihan diri yang dipilih');
  }

  if (tips.length > 0) {
    return {
      status: 'needs-work',
      title: 'Hampir tepat! Cuba perkemaskan lagi',
      message: `Syabas kerana mencuba! Sila ${tips.join(', ')}.`,
    };
  }

  const hasOpinionOrReason =
    /\b(supaya|agar|kerana|untuk|pendapat|berpendapat|pandangan|wajar|mestilah|hendaklah|perlu)\b/.test(
      lower
    );

  if (!hasOpinionOrReason) {
    return {
      status: 'good',
      title: 'Bagus! Ayat lengkap dan jelas',
      message:
        'Ayat kamu kemas serta mudah difahami. Kamu juga boleh menambah kata hubung seperti "supaya" atau "kerana" untuk menyokong pendapat kamu!',
    };
  }

  return {
    status: 'good',
    title: 'Syabas! Ayat sangat tepat dan bermakna',
    message:
      'Tahniah! Ayat kamu lengkap, bertatabahasa dengan baik serta jelas menyatakan pendapat tentang kebersihan diri.',
  };
}
