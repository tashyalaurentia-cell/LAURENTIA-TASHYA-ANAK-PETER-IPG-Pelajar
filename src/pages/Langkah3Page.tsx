import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ExternalLink,
  Gamepad2,
  Info,
  Layers,
  RotateCcw,
  Sparkles,
  Star,
  Trophy,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types/learning';
import { PageFooterNav } from '../components/PageFooterNav';

interface Langkah3PageProps {
  onNavigate: (page: PageId) => void;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
  correctFeedback: string;
  wrongGuidance: string;
}

const CABARAN_QUIZ: QuizQuestion[] = [
  {
    id: 'c1',
    question: 'Apakah yang perlu kita lakukan sebelum makan?',
    options: ['Memegang kasut', 'Mencuci tangan', 'Menyentuh sampah'],
    correctIndex: 1,
    correctFeedback:
      'Tepat sekali! Kita perlu mencuci tangan sebelum makan supaya kotoran dan kuman dapat disingkirkan.',
    wrongGuidance:
      'Kurang tepat. Jawapan yang betul ialah B (Mencuci tangan) supaya tangan kita bersih sebelum makan.',
  },
  {
    id: 'c2',
    question: 'Berapa kali kita digalakkan mandi dalam sehari?',
    options: ['Dua kali sehari', 'Seminggu sekali', 'Sebulan sekali'],
    correctIndex: 0,
    correctFeedback:
      'Syabas! Kita digalakkan mandi sekurang-kurangnya dua kali sehari agar badan kekal bersih dan segar.',
    wrongGuidance:
      'Jawapan yang tepat ialah A (Dua kali sehari) untuk membersihkan peluh dan menjaga kesegaran badan.',
  },
  {
    id: 'c3',
    question: 'Apakah amalan yang menjaga kebersihan gigi?',
    options: [
      'Membiarkan gigi kotor',
      'Mengunyah gula-gula sepanjang hari',
      'Menggosok gigi setiap hari',
    ],
    correctIndex: 2,
    correctFeedback:
      'Hebat! Menggosok gigi setiap hari dapat menanggalkan sisa makanan dan menjaga kesihatan gigi.',
    wrongGuidance:
      'Amalan menjaga kebersihan gigi ialah C (Menggosok gigi setiap hari).',
  },
  {
    id: 'c4',
    question: 'Mengapakah kita perlu memakai pakaian yang bersih?',
    options: [
      'Supaya badan kekal bersih dan selesa',
      'Supaya pakaian cepat kotor',
      'Supaya tidak perlu mandi',
    ],
    correctIndex: 0,
    correctFeedback:
      'Betul! Memakai pakaian yang bersih menjadikan badan kekal bersih, kemas dan selesa sepanjang hari.',
    wrongGuidance:
      'Jawapan yang betul ialah A (Supaya badan kekal bersih dan selesa).',
  },
  {
    id: 'c5',
    question: 'Apakah yang boleh menyebabkan kita mudah jatuh sakit jika tidak menjaga kebersihan?',
    options: ['Buku dan pensel', 'Kuman dan bakteria', 'Meja dan kerusi'],
    correctIndex: 1,
    correctFeedback:
      'Cemerlang! Kuman dan bakteria mudah membiak apabila kebersihan tidak dijaga dan boleh menyebabkan penyakit.',
    wrongGuidance:
      'Yang boleh menyebabkan kita mudah jatuh sakit ialah B (Kuman dan bakteria).',
  },
  {
    id: 'c6',
    question: 'Bilakah kita perlu mencuci tangan?',
    options: ['Selepas tidur sahaja', 'Apabila hendak bermain sahaja', 'Sebelum makan'],
    correctIndex: 2,
    correctFeedback:
      'Tepat! Mencuci tangan sebelum makan mengelakkan kuman masuk ke dalam badan bersama makanan.',
    wrongGuidance:
      'Masa yang paling penting untuk mencuci tangan dalam pilihan ini ialah C (Sebelum makan).',
  },
  {
    id: 'c7',
    question: 'Apakah tindakan yang betul selepas menggunakan tandas?',
    options: [
      'Membasuh tangan dengan bersih',
      'Terus makan',
      'Memegang makanan tanpa mencuci tangan',
    ],
    correctIndex: 0,
    correctFeedback:
      'Bagus! Membasuh tangan dengan bersih selepas menggunakan tandas dapat menyingkirkan kuman.',
    wrongGuidance:
      'Tindakan yang betul selepas menggunakan tandas ialah A (Membasuh tangan dengan bersih).',
  },
  {
    id: 'c8',
    question: 'Mengapakah kita perlu mengetip kuku tangan dan kaki yang panjang?',
    options: [
      'Supaya kuku cepat patah',
      'Supaya sukar memegang pensel',
      'Agar kotoran dan kuman tidak terperangkap di bawah kuku',
    ],
    correctIndex: 2,
    correctFeedback:
      'Syabas! Kuku yang pendek dan kemas menghalang kotoran serta kuman daripada terperangkap di bawah kuku.',
    wrongGuidance:
      'Kuku yang panjang mudah memerangkap habuk dan kuman. Jawapan yang betul ialah C.',
  },
  {
    id: 'c9',
    question: 'Apakah maksud menjaga kebersihan diri?',
    options: [
      'Membiarkan badan kotor',
      'Menjaga tubuh supaya bersih dan sihat',
      'Tidak menghiraukan kebersihan',
    ],
    correctIndex: 1,
    correctFeedback:
      'Tepat sekali! Menjaga kebersihan diri bermaksud menjaga tubuh supaya sentiasa bersih dan sihat.',
    wrongGuidance:
      'Maksud menjaga kebersihan diri ialah B (Menjaga tubuh supaya bersih dan sihat).',
  },
  {
    id: 'c10',
    question: 'Apakah manfaat menjaga kebersihan diri?',
    options: [
      'Badan mudah mendapat penyakit',
      'Badan menjadi tidak selesa',
      'Tubuh kekal bersih, sihat dan selesa',
    ],
    correctIndex: 2,
    correctFeedback:
      'Tahniah! Apabila kita menjaga kebersihan diri, tubuh kekal bersih, sihat dan selesa setiap masa.',
    wrongGuidance:
      'Manfaat menjaga kebersihan diri ialah C (Tubuh kekal bersih, sihat dan selesa).',
  },
];

const CABARAN_STORAGE_KEY = 'bm-tahun5-cabaran-bijak-v3';

interface QuizSessionState {
  currentIndex: number;
  answers: Record<string, number>;
  completed: boolean;
}

const AchievementBadgeSvg: React.FC<{ tier: 'gold' | 'silver' | 'bronze' }> = ({ tier }) => {
  const fill = tier === 'gold' ? '#FFF0C9' : tier === 'silver' ? '#E2EFFF' : '#F8DCEB';
  const accent = tier === 'gold' ? '#F5C451' : tier === 'silver' ? '#9CC4FF' : '#F3A6C8';

  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 shrink-0" aria-hidden="true">
      <circle cx="50" cy="50" r="44" fill={fill} stroke="#62546A" strokeWidth="2.6" />
      <circle cx="50" cy="50" r="35" fill="#FFFFFF" stroke={accent} strokeWidth="2.8" />
      <path
        d="M50 23L57.5 38L73.5 40.3L61.8 51.5L64.6 67.5L50 59.8L35.4 67.5L38.2 51.5L26.5 40.3L42.5 38L50 23Z"
        fill={accent}
        stroke="#62546A"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M50 31L54.2 39.8L63.8 41.2L56.8 47.9L58.4 57.4L50 52.8"
        stroke="#FFFFFF"
        strokeOpacity="0.85"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Langkah3Page: React.FC<Langkah3PageProps> = ({ onNavigate }) => {
  const [session, setSession] = useState<QuizSessionState>(() => {
    try {
      const saved = localStorage.getItem(CABARAN_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore storage errors
    }
    return { currentIndex: 0, answers: {}, completed: false };
  });

  useEffect(() => {
    try {
      localStorage.setItem(CABARAN_STORAGE_KEY, JSON.stringify(session));
    } catch {
      // ignore storage errors
    }
  }, [session]);

  const currentQuestion = CABARAN_QUIZ[session.currentIndex] ?? CABARAN_QUIZ[0];
  const selectedChoice = session.answers[currentQuestion.id];
  const hasAnsweredCurrent = selectedChoice !== undefined;
  const isCurrentCorrect = selectedChoice === currentQuestion.correctIndex;

  const correctCount = CABARAN_QUIZ.filter(
    (q) => session.answers[q.id] === q.correctIndex
  ).length;
  const wrongCount = Object.keys(session.answers).length - correctCount;
  const rewardPoints = correctCount * 10;
  const answeredTotal = Object.keys(session.answers).length;
  const progressPercent = Math.round((answeredTotal / CABARAN_QUIZ.length) * 100);

  const handleChooseOption = (optionIndex: number) => {
    if (hasAnsweredCurrent || session.completed) return;
    setSession((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: optionIndex,
      },
    }));
  };

  const handleNextQuestion = () => {
    if (!hasAnsweredCurrent) return;
    if (session.currentIndex < CABARAN_QUIZ.length - 1) {
      setSession((prev) => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
      }));
    } else {
      setSession((prev) => ({
        ...prev,
        completed: true,
      }));
    }
  };

  const handleRetryQuiz = () => {
    setSession({
      currentIndex: 0,
      answers: {},
      completed: false,
    });
  };

  const getAchievementDetails = () => {
    if (correctCount >= 8) {
      return {
        tier: 'gold' as const,
        badgeName: 'Lencana Emas: Juara Kebersihan Bijak',
        starsEarned: 5,
        encouragement:
          'Tahniah! Pencapaian kamu sangat cemerlang. Kamu menguasai amalan kebersihan diri dan pembinaan ayat dengan baik sekali!',
      };
    }
    if (correctCount >= 5) {
      return {
        tier: 'silver' as const,
        badgeName: 'Lencana Perak: Sahabat Kebersihan Hebat',
        starsEarned: 4,
        encouragement:
          'Bagus sekali! Kamu sudah memahami kebanyakan amalan kebersihan diri dan cara membina ayat. Teruskan usaha untuk mencapai markah penuh!',
      };
    }
    return {
      tier: 'bronze' as const,
      badgeName: 'Lencana Gangsa: Peneroka Kebersihan Rajin',
      starsEarned: 3,
      encouragement:
        'Syabas kerana berani mencuba hingga tamat! Setiap latihan menjadikan kita lebih bijak. Kamu boleh mencuba lagi atau mencuba aktiviti pemulihan Kuiz Kebersihan Diri di bawah.',
    };
  };

  const achievement = getAchievementDetails();

  return (
    <div className="space-y-8">
      {/* Header Bahagian 5 */}
      <header className="space-y-2.5">
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#62546A]/80">
          Bahagian 5 · Langkah 3 (Pentaksiran & Gamifikasi)
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#62546A] text-balance">
          Langkah 3: Cabaran Bijak & Pentaksiran
        </h1>
        <p className="text-base font-bold text-[#62546A] max-w-2xl leading-relaxed">
          Uji kefahaman kamu melalui kuiz interaktif 10 soalan dengan pengiraan markah automatik,
          kemudian terokai aktiviti pengayaan Wordwall dan pemulihan Kuiz Kebersihan Diri.
        </p>
      </header>

      {/* Kuiz Interaktif 10 Soalan */}
      <section aria-labelledby="kuiz-interaktif-heading" className="kawaii-card p-6 sm:p-8 bg-white space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#D9B8D8]/45">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#F8DCEB] flex items-center justify-center shrink-0 text-[#62546A]">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h2
                id="kuiz-interaktif-heading"
                className="font-display text-2xl font-bold text-[#62546A]"
              >
                Kuiz Interaktif: Cabaran Bijak!
              </h2>
              <p className="text-sm font-bold text-[#62546A]/85">
                Jawab satu demi satu untuk mendapatkan maklum balas segera dan markah automatik.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-[#FFF0C9] flex items-center gap-2 text-sm font-extrabold text-[#62546A] tabular-nums">
              <Star className="w-4 h-4 fill-[#F5C451] text-[#62546A]" />
              <span>{rewardPoints} Mata</span>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-[#E2EFFF] text-sm font-extrabold text-[#62546A] tabular-nums">
              Skor: {correctCount} / {CABARAN_QUIZ.length}
            </div>
          </div>
        </div>

        {/* Bar Kemajuan */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs sm:text-sm font-extrabold text-[#62546A]/80 tabular-nums">
            <span>
              {session.completed
                ? 'Kuiz Selesai!'
                : `Soalan ${session.currentIndex + 1} daripada ${CABARAN_QUIZ.length}`}
            </span>
            <span>Kemajuan: {progressPercent}%</span>
          </div>
          <div className="h-3 w-full rounded-full bg-[#FFF2F6] overflow-hidden border border-[#D9B8D8]/40">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#F3A6C8] to-[#9CC4FF] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {!session.completed ? (
          <div className="rounded-3xl bg-gradient-to-br from-[#FFF2F6]/85 to-[#E2EFFF]/45 p-5 sm:p-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/70 tabular-nums">
                Soalan {session.currentIndex + 1}
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#62546A] leading-snug">
                {currentQuestion.question}
              </h3>
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const letter = String.fromCharCode(65 + idx);
                const isSelected = selectedChoice === idx;
                const isRightOption = idx === currentQuestion.correctIndex;

                let optionClass =
                  'bg-white hover:bg-[#FFF0C9]/70 border-[#D9B8D8]/60 text-[#62546A]';
                if (hasAnsweredCurrent) {
                  if (isRightOption) {
                    optionClass =
                      'bg-[#E3F5E9] border-[#2E6F40] ring-2 ring-[#2E6F40]/30 text-[#1F5E34]';
                  } else if (isSelected && !isRightOption) {
                    optionClass =
                      'bg-[#FDE6E4] border-[#9F3A38] ring-2 ring-[#9F3A38]/25 text-[#8E2B2A]';
                  } else {
                    optionClass = 'bg-white/65 border-[#D9B8D8]/40 text-[#62546A]/65';
                  }
                }

                return (
                  <button
                    key={option}
                    type="button"
                    disabled={hasAnsweredCurrent}
                    onClick={() => handleChooseOption(idx)}
                    className={`kawaii-btn w-full p-4 rounded-2xl border text-left flex items-center justify-between gap-3 transition-colors ${
                      hasAnsweredCurrent ? 'cursor-default' : 'cursor-pointer kawaii-shadow-sm'
                    } ${optionClass}`}
                  >
                    <span className="flex items-center gap-3 text-sm sm:text-base font-bold">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-[#F8DCEB]/70 text-[#62546A] font-extrabold shrink-0">
                        {letter}
                      </span>
                      <span>{option}</span>
                    </span>

                    {hasAnsweredCurrent && isRightOption && (
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-[#1F5E34]" />
                    )}
                    {hasAnsweredCurrent && isSelected && !isRightOption && (
                      <Info className="w-5 h-5 shrink-0 text-[#8E2B2A]" />
                    )}
                  </button>
                );
              })}
            </div>

            {hasAnsweredCurrent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl p-4 sm:p-5 flex items-start gap-3 ${
                  isCurrentCorrect ? 'bg-[#E3F5E9] text-[#1F5E34]' : 'bg-[#FFF0C9] text-[#62546A]'
                }`}
                role="status"
              >
                {isCurrentCorrect ? (
                  <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                ) : (
                  <Info className="w-5 h-5 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <p className="font-display text-base font-bold">
                    {isCurrentCorrect
                      ? 'Jawapan Betul! (+10 Mata Ganjaran)'
                      : 'Kurang Tepat — Jom Semak Panduan'}
                  </p>
                  <p className="text-sm font-semibold leading-relaxed">
                    {isCurrentCorrect
                      ? currentQuestion.correctFeedback
                      : currentQuestion.wrongGuidance}
                  </p>
                </div>
              </motion.div>
            )}

            <div className="flex items-center justify-between gap-4 pt-1">
              <button
                type="button"
                onClick={handleRetryQuiz}
                className="kawaii-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-xs sm:text-sm font-bold text-[#62546A] hover:bg-[#F8DCEB] cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Mula Semula</span>
              </button>

              <button
                type="button"
                disabled={!hasAnsweredCurrent}
                onClick={handleNextQuestion}
                className="kawaii-btn inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#62546A] text-[#FFF2F6] font-bold text-sm sm:text-base hover:bg-[#52445A] disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer kawaii-shadow-sm"
              >
                <span>
                  {session.currentIndex < CABARAN_QUIZ.length - 1
                    ? 'Soalan Seterusnya'
                    : 'Lihat Keputusan Akhir'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl bg-gradient-to-br from-[#F8DCEB]/60 via-[#FFF2F6] to-[#E2EFFF]/70 p-6 sm:p-8 space-y-6"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <AchievementBadgeSvg tier={achievement.tier} />

              <div className="text-center md:text-left space-y-2 flex-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/75">
                  Keputusan Pentaksiran Kuiz
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#62546A]">
                  {achievement.badgeName}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#62546A]/90 leading-relaxed max-w-2xl">
                  {achievement.encouragement}
                </p>

                <div className="flex items-center justify-center md:justify-start gap-1.5 pt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < achievement.starsEarned
                          ? 'fill-[#F5C451] text-[#62546A]'
                          : 'text-[#62546A]/25'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-extrabold text-[#62546A] tabular-nums">
                    {rewardPoints} / 100 Mata
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white p-4 text-center kawaii-shadow-sm">
                <p className="text-xs font-extrabold text-[#62546A]/70">Skor Keseluruhan</p>
                <p className="font-display text-3xl font-bold text-[#62546A] tabular-nums mt-1">
                  {correctCount} / {CABARAN_QUIZ.length}
                </p>
              </div>
              <div className="rounded-2xl bg-[#E3F5E9] p-4 text-center kawaii-shadow-sm">
                <p className="text-xs font-extrabold text-[#1F5E34]/80">Jawapan Betul</p>
                <p className="font-display text-3xl font-bold text-[#1F5E34] tabular-nums mt-1">
                  {correctCount}
                </p>
              </div>
              <div className="rounded-2xl bg-[#FFF0C9] p-4 text-center kawaii-shadow-sm">
                <p className="text-xs font-extrabold text-[#62546A]/80">Jawapan Salah</p>
                <p className="font-display text-3xl font-bold text-[#62546A] tabular-nums mt-1">
                  {wrongCount}
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <button
                type="button"
                onClick={handleRetryQuiz}
                className="kawaii-btn inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#62546A] text-[#FFF2F6] font-bold text-sm sm:text-base hover:bg-[#52445A] cursor-pointer kawaii-shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Cuba Lagi</span>
              </button>
            </div>
          </motion.div>
        )}
      </section>

      {/* Pengayaan Wordwall & Pemulihan Google Sites */}
      <section aria-labelledby="aktiviti-lanjutan-heading" className="space-y-5">
        <div className="flex items-center gap-2.5">
          <Award className="w-6 h-6 text-[#62546A]" aria-hidden="true" />
          <div>
            <h2
              id="aktiviti-lanjutan-heading"
              className="font-display text-2xl font-bold text-[#62546A]"
            >
              Aktiviti Pengayaan dan Pemulihan
            </h2>
            <p className="text-sm font-bold text-[#62546A]">
              Aktiviti susulan disediakan mengikut tahap murid: Pengayaan melalui Wordwall dan
              Pemulihan melalui Google Sites.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="kawaii-card p-6 sm:p-7 bg-[#E2EFFF]/75 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 text-[#62546A] kawaii-shadow-sm">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#62546A]/75">
                    Aktiviti Susulan · Pengayaan
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#62546A]">
                    Pengayaan: Wordwall
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base font-semibold text-[#62546A]/90 leading-relaxed">
                Murid yang telah menguasai kemahiran membina ayat boleh mencuba aktiviti pengayaan
                di Wordwall untuk menyusun perkataan menjadi ayat lengkap.
              </p>
            </div>

            <div>
              <a
                href="https://wordwall.net/resource/110936232"
                target="_blank"
                rel="noopener noreferrer"
                className="kawaii-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#62546A] text-[#FFF2F6] font-bold text-sm sm:text-base hover:bg-[#52445A] kawaii-shadow-sm"
              >
                <span>Buka Aktiviti Wordwall</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>

          <div className="kawaii-card p-6 sm:p-7 bg-[#F8DCEB]/75 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 text-[#62546A] kawaii-shadow-sm">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#62546A]/75">
                    Aktiviti Susulan · Pemulihan (Google Sites)
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#62546A]">
                    Pemulihan – Kuiz Kebersihan Diri
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base font-semibold text-[#62546A]/90 leading-relaxed">
                Murid yang memerlukan bimbingan tambahan boleh menjawab kuiz pemulihan ini untuk
                mengukuhkan kefahaman tentang amalan kebersihan diri.
              </p>
            </div>

            <div>
              <a
                href="https://sites.google.com/moe-dl.edu.my/kuiz-pemulihan-bahasa-melayu-k/full-page-embed"
                target="_blank"
                rel="noopener noreferrer"
                className="kawaii-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#62546A] text-[#FFF2F6] font-bold text-sm sm:text-base hover:bg-[#52445A] kawaii-shadow-sm"
              >
                <span>Mula Kuiz Pemulihan</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageFooterNav currentPage="langkah-3" onNavigate={onNavigate} />
    </div>
  );
};
