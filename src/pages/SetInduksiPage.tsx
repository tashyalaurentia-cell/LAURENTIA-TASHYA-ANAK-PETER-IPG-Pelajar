import React, { useState } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  Film,
  HelpCircle,
  Info,
  PlayCircle,
  Sparkles,
} from 'lucide-react';
import { PageId } from '../types/learning';
import { PageFooterNav } from '../components/PageFooterNav';

interface SetInduksiPageProps {
  onNavigate: (page: PageId) => void;
}

interface SoalJawabItem {
  id: string;
  question: string;
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
  explanation: string;
}

const SOAL_JAWAB_ITEMS: SoalJawabItem[] = [
  {
    id: 'sj1',
    question: 'Apakah perkara utama yang ditunjukkan dalam video “Jom Bersihkan Diri”?',
    options: [
      'Amalan menjaga kebersihan diri seperti mencuci tangan, memberus gigi dan mandi',
      'Cara bermain permainan video sehingga lewat malam',
      'Cara membiarkan bilik tidur berselerak',
    ],
    correctIndex: 0,
    explanation:
      'Betul! Video tersebut mengajak kita mengamalkan langkah asas kebersihan diri setiap hari supaya sentiasa sihat dan ceria.',
  },
  {
    id: 'sj2',
    question: 'Bilakah amalan mencuci tangan dengan sabun paling penting dilakukan?',
    options: [
      'Apabila hendak tidur sahaja',
      'Sebelum makan dan selepas keluar dari tandas',
      'Seminggu sekali sahaja',
    ],
    correctIndex: 1,
    explanation:
      'Tepat! Mencuci tangan dengan sabun sebelum makan dan selepas ke tandas dapat menyingkirkan kuman yang melekat pada tangan.',
  },
  {
    id: 'sj3',
    question: 'Mengapakah kita perlu membersihkan badan dan memakai pakaian yang bersih setiap hari?',
    options: [
      'Supaya pakaian cepat kotor',
      'Supaya kita dapat ponteng sekolah',
      'Untuk menghindari kuman, bau kurang menyenangkan dan penyakit kulit',
    ],
    correctIndex: 2,
    explanation:
      'Syabas! Badan dan pakaian yang bersih mengelakkan pembiakan bakteria serta membuatkan kita berasa selesa sepanjang hari.',
  },
];

export const SetInduksiPage: React.FC<SetInduksiPageProps> = ({ onNavigate }) => {
  const [qaAnswers, setQaAnswers] = useState<Record<string, number>>({});
  const [priorHabitInput, setPriorHabitInput] = useState('');
  const [priorHabitShared, setPriorHabitShared] = useState(false);

  const qaCorrectCount = SOAL_JAWAB_ITEMS.filter(
    (item) => qaAnswers[item.id] === item.correctIndex
  ).length;

  return (
    <div className="space-y-8">
      {/* Header Bahagian 2 */}
      <header className="space-y-2.5">
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#62546A]/80">
          Bahagian 2 · Set Induksi (Pengenalan Konsep)
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#62546A] text-balance">
          Set Induksi: Jom Bersihkan Diri!
        </h1>
        <p className="text-base font-bold text-[#62546A] max-w-2xl leading-relaxed">
          Tonton video “Jom Bersihkan Diri”, jawab aktiviti soal jawab ringkas dan kaitkan amalan
          harian kamu dengan tajuk pembelajaran hari ini.
        </p>
      </header>

      {/* 1. Video YouTube "Jom Bersihkan Diri" */}
      <section aria-labelledby="video-asal-heading" className="kawaii-card p-6 sm:p-8 bg-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E2EFFF] flex items-center justify-center shrink-0 text-[#62546A]">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h2
                id="video-asal-heading"
                className="font-display text-xl sm:text-2xl font-bold text-[#62546A]"
              >
                Video Pengenalan: “Jom Bersihkan Diri”
              </h2>
              <p className="text-sm font-bold text-[#62546A]/85">
                Tonton video di bawah untuk mengenal pasti amalan kebersihan diri dalam kehidupan
                seharian.
              </p>
            </div>
          </div>

          <a
            href="https://youtu.be/_tXdekxLEGQ"
            target="_blank"
            rel="noopener noreferrer"
            className="kawaii-btn inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E2EFFF] text-[#62546A] text-xs font-bold hover:bg-[#FFF0C9] self-start sm:self-center whitespace-nowrap"
          >
            <PlayCircle className="w-4 h-4 shrink-0" />
            <span>Buka di YouTube</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>

        <div className="rounded-3xl overflow-hidden bg-[#E2EFFF]/55 p-3 sm:p-4 max-w-4xl">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#62546A]/10">
            <iframe
              src="https://www.youtube.com/embed/_tXdekxLEGQ?rel=0"
              title="Video Set Induksi: Jom Bersihkan Diri"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
          <p className="text-xs font-bold text-[#62546A]/75 mt-2.5 px-1">
            Pautan video: https://youtu.be/_tXdekxLEGQ
          </p>
        </div>
      </section>

      {/* 2. Aktiviti Soal Jawab Berdasarkan Video & Hubung Kait Pengetahuan Sedia Ada */}
      <section aria-labelledby="soal-jawab-heading" className="kawaii-card p-6 sm:p-8 bg-white space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#D9B8D8]/45">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#F8DCEB] flex items-center justify-center shrink-0 text-[#62546A]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 id="soal-jawab-heading" className="font-display text-2xl font-bold text-[#62546A]">
                Aktiviti Soal Jawab Set Induksi
              </h2>
              <p className="text-sm font-bold text-[#62546A]/85">
                Jawab soalan berdasarkan video untuk menghubungkan pengalaman harian kamu dengan
                tajuk “Kebersihan Tanggungjawab Kita”.
              </p>
            </div>
          </div>

          <span className="px-4 py-2 rounded-xl bg-[#FFF0C9] text-xs sm:text-sm font-extrabold text-[#62546A] tabular-nums self-start sm:self-center">
            Betul: {qaCorrectCount} / {SOAL_JAWAB_ITEMS.length}
          </span>
        </div>

        {/* 3 Soalan Soal Jawab Interaktif */}
        <div className="space-y-4">
          {SOAL_JAWAB_ITEMS.map((item, qIdx) => {
            const selected = qaAnswers[item.id];
            const answered = selected !== undefined;
            const isCorrect = selected === item.correctIndex;

            return (
              <div key={item.id} className="rounded-2xl bg-[#FFF2F6]/70 p-5 space-y-3">
                <p className="font-display text-base sm:text-lg font-bold text-[#62546A]">
                  {qIdx + 1}. {item.question}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                  {item.options.map((opt, optIdx) => {
                    const isPicked = selected === optIdx;
                    const isRight = optIdx === item.correctIndex;
                    let btnStyle = 'bg-white hover:bg-[#E2EFFF] border-[#D9B8D8]/60 text-[#62546A]';
                    if (answered) {
                      if (isRight) {
                        btnStyle = 'bg-[#E3F5E9] border-[#2E6F40] text-[#1F5E34]';
                      } else if (isPicked) {
                        btnStyle = 'bg-[#FDE6E4] border-[#9F3A38] text-[#8E2B2A]';
                      } else {
                        btnStyle = 'bg-white/60 border-[#D9B8D8]/40 text-[#62546A]/65';
                      }
                    }

                    return (
                      <button
                        key={opt}
                        type="button"
                        disabled={answered}
                        onClick={() =>
                          setQaAnswers((prev) => ({ ...prev, [item.id]: optIdx }))
                        }
                        className={`p-3.5 rounded-2xl border text-left text-sm font-bold transition-colors ${
                          answered ? 'cursor-default' : 'cursor-pointer'
                        } ${btnStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {answered && (
                  <div
                    className={`rounded-xl p-3.5 text-sm font-semibold flex items-start gap-2 ${
                      isCorrect ? 'bg-[#E3F5E9] text-[#1F5E34]' : 'bg-[#FFF0C9] text-[#62546A]'
                    }`}
                    role="status"
                  >
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    ) : (
                      <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    )}
                    <span>{item.explanation}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Soalan Perkongsian Pengalaman Kendiri */}
        <div className="rounded-2xl bg-[#FFF0C9]/55 p-5 space-y-3">
          <label
            htmlFor="prior-habit-input"
            className="block font-display text-base sm:text-lg font-bold text-[#62546A]"
          >
            Perkongsian Sedia Ada: Apakah satu amalan kebersihan yang telah kamu lakukan sebelum
            memulakan kelas hari ini?
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="prior-habit-input"
              type="text"
              value={priorHabitInput}
              onChange={(e) => {
                setPriorHabitInput(e.target.value);
                setPriorHabitShared(false);
              }}
              className="flex-1 rounded-2xl bg-white px-4 py-3 text-sm sm:text-base text-[#62546A] border border-[#D9B8D8]/70 focus:border-[#62546A] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => {
                if (priorHabitInput.trim()) setPriorHabitShared(true);
              }}
              className="kawaii-btn px-5 py-3 rounded-2xl bg-[#62546A] text-[#FFF2F6] text-sm font-bold hover:bg-[#52445A] cursor-pointer whitespace-nowrap"
            >
              Kongsi Jawapan
            </button>
          </div>
          {priorHabitShared && (
            <p className="text-sm font-bold text-[#1F5E34] flex items-center gap-2" role="status">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>
                Syabas! Amalan baik tersebut sangat berkait rapat dengan pembelajaran menulis ayat hari
                ini.
              </span>
            </p>
          )}
        </div>
      </section>

      <PageFooterNav currentPage="set-induksi" onNavigate={onNavigate} />
    </div>
  );
};
