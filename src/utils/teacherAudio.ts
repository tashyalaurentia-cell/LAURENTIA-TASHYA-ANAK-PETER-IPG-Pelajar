import { useEffect, useState } from 'react';

export type TeacherAudioId =
  | 'utama-hero'
  | 'utama-pesanan'
  | 'utama-objektif'
  | 'induksi-arahan'
  | 'induksi-video'
  | 'induksi-soal-jawab'
  | 'induksi-kongsi'
  | 'langkah1-arahan'
  | 'langkah1-poster'
  | 'langkah2-arahan'
  | 'langkah2-betik'
  | 'langkah2-strawberi'
  | 'langkah2-strawberi-a'
  | 'langkah2-strawberi-b'
  | 'langkah2-anggur'
  | 'langkah2-anggur-kata'
  | 'langkah3-arahan'
  | 'langkah3-kuiz'
  | 'langkah3-susulan'
  | 'penutup-arahan'
  | 'penutup-slogan';

interface TeacherClipMeta {
  fileName: string;
  exactText: string;
}

export const TEACHER_AUDIO_CLIPS: Record<TeacherAudioId, TeacherClipMeta> = {
  'utama-hero': {
    fileName: 'utama-hero.mp3',
    exactText:
      'Kenali amalan kebersihan diri, bina ayat dan kuasai Bahasa Melayu melalui aktiviti pembelajaran yang menarik dan menyeronokkan!',
  },
  'utama-pesanan': {
    fileName: 'utama-pesanan.mp3',
    exactText:
      'Hai, murid-murid! Hari ini kita akan belajar tentang kebersihan diri. Kita akan melihat, berfikir, berkongsi idea dan membina ayat tentang amalan kebersihan yang penting dalam kehidupan seharian. Bersedia untuk belajar? Jom kita mulakan bersama-sama!',
  },
  'utama-objektif': {
    fileName: 'utama-objektif.mp3',
    exactText:
      'Pada akhir pembelajaran, murid dapat membina dan menulis empat ayat tentang amalan kebersihan diri untuk menyatakan pendapat berdasarkan poster Kebersihan adalah Keutamaan dengan jelas dan tepat.',
  },
  'induksi-arahan': {
    fileName: 'induksi-arahan.mp3',
    exactText:
      'Tonton video Jom Bersihkan Diri, jawab aktiviti soal jawab ringkas dan kaitkan amalan harian kamu dengan tajuk pembelajaran hari ini.',
  },
  'induksi-video': {
    fileName: 'induksi-video.mp3',
    exactText:
      'Tonton video di bawah untuk mengenal pasti amalan kebersihan diri dalam kehidupan seharian.',
  },
  'induksi-soal-jawab': {
    fileName: 'induksi-soal-jawab.mp3',
    exactText:
      'Jawab soalan berdasarkan video untuk menghubungkan pengalaman harian kamu dengan tajuk Kebersihan Tanggungjawab Kita.',
  },
  'induksi-kongsi': {
    fileName: 'induksi-kongsi.mp3',
    exactText:
      'Perkongsian Sedia Ada: Apakah satu amalan kebersihan yang telah kamu lakukan sebelum memulakan kelas hari ini?',
  },
  'langkah1-arahan': {
    fileName: 'langkah1-arahan.mp3',
    exactText:
      'Perhatikan poster Kebersihan adalah Keutamaan, kenal pasti amalan kebersihan diri dan bina satu ayat mudah secara individu.',
  },
  'langkah1-poster': {
    fileName: 'langkah1-poster.mp3',
    exactText:
      'Teliti poster di bawah, kemudian klik satu amalan kebersihan diri dan bina satu ayat mudah secara individu.',
  },
  'langkah2-arahan': {
    fileName: 'langkah2-arahan.mp3',
    exactText:
      'Pilih kumpulan mengikut tahap penguasaan masing-masing untuk menyiapkan tugasan membina ayat berdasarkan poster Kebersihan adalah Keutamaan.',
  },
  'langkah2-betik': {
    fileName: 'langkah2-betik.mp3',
    exactText:
      'Arahan: Membina dan menulis empat ayat tentang amalan kebersihan diri berdasarkan poster Kebersihan adalah Keutamaan dengan jelas dan tepat.',
  },
  'langkah2-strawberi': {
    fileName: 'langkah2-strawberi.mp3',
    exactText:
      'Arahan: Memadankan frasa dan membina tiga ayat tentang amalan kebersihan diri berdasarkan poster Kebersihan adalah Keutamaan dengan jelas dan tepat.',
  },
  'langkah2-strawberi-a': {
    fileName: 'langkah2-strawberi-a.mp3',
    exactText:
      'Klik satu frasa amalan di sebelah kiri, kemudian klik sambungan frasa yang tepat di sebelah kanan.',
  },
  'langkah2-strawberi-b': {
    fileName: 'langkah2-strawberi-b.mp3',
    exactText: 'Gunakan frasa yang telah dipadankan untuk membina tiga ayat lengkap.',
  },
  'langkah2-anggur': {
    fileName: 'langkah2-anggur.mp3',
    exactText:
      'Arahan: Melengkapkan lima tempat kosong tentang amalan kebersihan diri berdasarkan poster Kebersihan adalah Keutamaan dengan betul.',
  },
  'langkah2-anggur-kata': {
    fileName: 'langkah2-anggur-kata.mp3',
    exactText: 'Pilihan Perkataan. Klik satu perkataan, kemudian klik tempat kosong pada ayat.',
  },
  'langkah3-arahan': {
    fileName: 'langkah3-arahan.mp3',
    exactText:
      'Uji kefahaman kamu melalui kuiz interaktif 10 soalan dengan pengiraan markah automatik, kemudian terokai aktiviti pengayaan Wordwall dan pemulihan Kuiz Kebersihan Diri.',
  },
  'langkah3-kuiz': {
    fileName: 'langkah3-kuiz.mp3',
    exactText: 'Jawab satu demi satu untuk mendapatkan maklum balas segera dan markah automatik.',
  },
  'langkah3-susulan': {
    fileName: 'langkah3-susulan.mp3',
    exactText:
      'Aktiviti susulan disediakan mengikut tahap murid: Pengayaan melalui Wordwall dan Pemulihan melalui Google Sites.',
  },
  'penutup-arahan': {
    fileName: 'penutup-arahan.mp3',
    exactText:
      'Syabas! Imbas kembali rumusan pembelajaran hari ini, kongsikan refleksi ringkas kamu dan lafazkan slogan kebersihan bersama-sama.',
  },
  'penutup-slogan': {
    fileName: 'penutup-slogan.mp3',
    exactText: 'Kebersihan amalan kita, hidup sihat setiap masa!',
  },
};

type AudioListener = (activeId: TeacherAudioId | null) => void;

let activeClipId: TeacherAudioId | null = null;
let activeAudioEl: HTMLAudioElement | null = null;
let playbackToken = 0;
const listeners = new Set<AudioListener>();

const notifyListeners = () => {
  listeners.forEach((cb) => cb(activeClipId));
};

const getAudioUrl = (fileName: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}audio/${fileName}`;
};

const isMaleVoiceName = (name: string): boolean => {
  const lower = name.toLowerCase();
  return (
    lower.includes('osman') ||
    lower.includes('male') ||
    lower.includes('lelaki') ||
    lower.includes('man ') ||
    lower.includes('david') ||
    lower.includes('ardi')
  );
};

const findFemaleMalaysianVoice = (): SpeechSynthesisVoice | null => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const msMyVoices = voices.filter((v) => {
    const lang = v.lang.toLowerCase().replace('_', '-');
    return lang === 'ms-my' && !isMaleVoiceName(v.name);
  });

  if (!msMyVoices.length) {
    return null;
  }

  const preferredFemale = msMyVoices.find((v) => {
    const lower = v.name.toLowerCase();
    return (
      lower.includes('yasmin') ||
      lower.includes('female') ||
      lower.includes('perempuan') ||
      lower.includes('siti') ||
      lower.includes('nur') ||
      lower.includes('google')
    );
  });

  return preferredFemale ?? msMyVoices[0];
};

const tryMalaySpeechFallback = (clipId: TeacherAudioId, token: number): boolean => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  const voice = findFemaleMalaysianVoice();
  if (!voice) {
    return false;
  }

  const clip = TEACHER_AUDIO_CLIPS[clipId];
  const utterance = new SpeechSynthesisUtterance(clip.exactText);
  utterance.voice = voice;
  utterance.lang = 'ms-MY';
  utterance.rate = 0.94;
  utterance.pitch = 1.05;

  utterance.onend = () => {
    if (playbackToken === token) {
      activeClipId = null;
      notifyListeners();
    }
  };
  utterance.onerror = () => {
    if (playbackToken === token) {
      activeClipId = null;
      notifyListeners();
    }
  };

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  return true;
};

export const stopTeacherAudio = (): void => {
  playbackToken += 1;

  if (activeAudioEl) {
    activeAudioEl.onended = null;
    activeAudioEl.onerror = null;
    try {
      activeAudioEl.pause();
      activeAudioEl.currentTime = 0;
    } catch {
      // ignore audio cleanup errors
    }
    activeAudioEl = null;
  }

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      // ignore speech synthesis cleanup errors
    }
  }

  if (activeClipId !== null) {
    activeClipId = null;
    notifyListeners();
  }
};

export const playTeacherAudio = (clipId: TeacherAudioId): void => {
  if (typeof window === 'undefined') return;

  stopTeacherAudio();
  const token = ++playbackToken;
  activeClipId = clipId;
  notifyListeners();

  const clip = TEACHER_AUDIO_CLIPS[clipId];
  const audio = new Audio(getAudioUrl(clip.fileName));
  audio.preload = 'auto';
  activeAudioEl = audio;

  const handleFallbackOrStop = () => {
    if (playbackToken !== token) return;
    if (activeAudioEl === audio) {
      activeAudioEl = null;
    }
    const startedSpeech = tryMalaySpeechFallback(clipId, token);
    if (!startedSpeech) {
      activeClipId = null;
      notifyListeners();
    }
  };

  audio.onended = () => {
    if (playbackToken !== token) return;
    if (activeAudioEl === audio) {
      activeAudioEl = null;
    }
    activeClipId = null;
    notifyListeners();
  };

  audio.onerror = handleFallbackOrStop;

  try {
    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(handleFallbackOrStop);
    }
  } catch {
    handleFallbackOrStop();
  }
};

export const toggleTeacherAudio = (clipId: TeacherAudioId): void => {
  if (activeClipId === clipId) {
    stopTeacherAudio();
  } else {
    playTeacherAudio(clipId);
  }
};

export const useTeacherAudio = (clipId: TeacherAudioId) => {
  const [currentActiveId, setCurrentActiveId] = useState<TeacherAudioId | null>(activeClipId);

  useEffect(() => {
    const listener: AudioListener = (id) => {
      setCurrentActiveId(id);
    };
    listeners.add(listener);
    setCurrentActiveId(activeClipId);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const isPlaying = currentActiveId === clipId;

  return {
    isPlaying,
    toggle: () => toggleTeacherAudio(clipId),
    stop: stopTeacherAudio,
  };
};
