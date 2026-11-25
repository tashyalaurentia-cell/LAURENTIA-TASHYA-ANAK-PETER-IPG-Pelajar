import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  Info,
  RotateCcw,
  Sparkles,
  User,
  X,
  ZoomIn,
} from 'lucide-react';
import { PageId } from '../types/learning';
import { PageFooterNav } from '../components/PageFooterNav';
import { ResilientImage } from '../components/KawaiiArtwork';
import { TeacherAudioButton } from '../components/TeacherAudioButton';
import {
  POSTER_PRACTICES,
  PosterPractice,
  PracticeIllustration,
  evaluateSentence,
} from '../utils/sentenceHelpers';

interface Langkah1PageProps {
  onNavigate: (page: PageId) => void;
}

const INDIVIDU_STORAGE_KEY = 'bm-tahun5-misi-individu-v1';

interface IndividuState {
  selectedPracticeId: PosterPractice['id'] | '';
  sentence: string;
  checked: boolean;
}

export const Langkah1Page: React.FC<Langkah1PageProps> = ({ onNavigate }) => {
  const [individu, setIndividu] = useState<IndividuState>(() => {
    try {
      const saved = localStorage.getItem(INDIVIDU_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore storage errors
    }
    return { selectedPracticeId: '', sentence: '', checked: false };
  });

  const [posterZoomed, setPosterZoomed] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(INDIVIDU_STORAGE_KEY, JSON.stringify(individu));
    } catch {
      // ignore storage errors
    }
  }, [individu]);

  useEffect(() => {
    if (!posterZoomed) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPosterZoomed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [posterZoomed]);

  const selectedPractice = POSTER_PRACTICES.find(
    (p) => p.id === individu.selectedPracticeId
  );

  const individuEval = evaluateSentence(
    individu.sentence,
    selectedPractice ? selectedPractice.keywords : []
  );

  const handleSelectPractice = (id: PosterPractice['id']) => {
    setIndividu((prev) => ({
      ...prev,
      selectedPracticeId: id,
      checked: false,
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header Bahagian 3 */}
      <header className="space-y-2.5">
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#62546A]/80">
          Bahagian 3 · Langkah 1 (Aktiviti Individu)
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#62546A] text-balance">
          Langkah 1: Poster & Bina Satu Ayat Mudah
        </h1>
        <div className="flex items-start gap-2.5 max-w-2xl">
          <p className="text-base font-bold text-[#62546A] leading-relaxed">
            Perhatikan poster “Kebersihan adalah Keutamaan”, kenal pasti amalan kebersihan diri dan
            bina satu ayat mudah secara individu.
          </p>
          <TeacherAudioButton clipId="langkah1-arahan" tone="pink" className="mt-0.5" />
        </div>
      </header>

      {/* Poster Digital & Aktiviti Individu */}
      <section aria-labelledby="langkah1-poster-heading" className="kawaii-card p-6 sm:p-8 bg-white space-y-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#D9B8D8]/45">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#F8DCEB] flex items-center justify-center shrink-0 text-[#62546A]">
              <User className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-[#62546A]/75">
                Misi Individu · SP 3.2.1
              </p>
              <h2
                id="langkah1-poster-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-[#62546A]"
              >
                Poster “Kebersihan adalah Keutamaan”
              </h2>
            </div>
          </div>

          <div className="px-4 py-2 rounded-xl bg-[#E2EFFF] text-xs sm:text-sm font-extrabold text-[#62546A] self-start sm:self-center">
            {individu.checked && individuEval.status === 'good' && selectedPractice
              ? 'Status: Ayat Lengkap Disahkan'
              : 'Status: Sedang Berlangsung'}
          </div>
        </div>

        {/* Poster Rangsangan + Pilihan 4 Amalan */}
        <div className="rounded-3xl bg-gradient-to-br from-[#F8DCEB]/50 via-[#FFF2F6] to-[#E2EFFF]/65 p-5 sm:p-7 space-y-6">
          <div className="text-left space-y-1.5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/80">
              Poster Digital Rangsangan
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#62546A]">
              “Kebersihan adalah Keutamaan”
            </h3>
            <div className="flex items-start gap-2.5 max-w-2xl">
              <p className="text-sm sm:text-base font-bold text-[#62546A]">
                Teliti poster di bawah, kemudian klik satu amalan kebersihan diri dan bina satu ayat
                mudah secara individu.
              </p>
              <TeacherAudioButton clipId="langkah1-poster" tone="pink" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Poster Sebenar Murid */}
            <div className="lg:col-span-5 flex flex-col items-center gap-3">
              <div className="w-full max-w-sm rounded-3xl bg-white p-3 border border-[#D9B8D8]/60 kawaii-shadow-sm">
                <ResilientImage
                  src="/assets/aistudio/image_85414118.png"
                  alt="Poster Kebersihan adalah Keutamaan yang memaparkan empat amalan kebersihan diri iaitu mencuci tangan sebelum makan, menggosok gigi setiap hari, mandi sekurang-kurangnya dua kali sehari dan memakai pakaian yang bersih."
                  fallbackTitle="Poster Kebersihan adalah Keutamaan"
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>
              <button
                type="button"
                onClick={() => setPosterZoomed(true)}
                className="kawaii-btn inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#62546A] text-xs sm:text-sm font-bold border border-[#D9B8D8]/70 hover:bg-[#FFF0C9] cursor-pointer kawaii-shadow-sm"
              >
                <ZoomIn className="w-4 h-4" />
                <span>Besarkan Poster</span>
              </button>
            </div>

            {/* 4 Kad Pilihan Amalan daripada Poster */}
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs sm:text-sm font-extrabold text-[#62546A]/80">
                Pilih Satu Amalan daripada Poster:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {POSTER_PRACTICES.map((practice) => {
                  const isSelected = individu.selectedPracticeId === practice.id;
                  return (
                    <button
                      key={practice.id}
                      type="button"
                      onClick={() => handleSelectPractice(practice.id)}
                      aria-pressed={isSelected}
                      className={`kawaii-btn p-4 rounded-2xl text-left flex flex-col items-center text-center gap-3 cursor-pointer kawaii-shadow-sm transition-all ${
                        practice.bgClass
                      } ${
                        isSelected
                          ? 'ring-3 ring-[#62546A] bg-white'
                          : 'hover:ring-2 hover:ring-[#D9B8D8]'
                      }`}
                    >
                      <div className="w-full flex items-center justify-between">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-xs font-extrabold text-[#62546A] tabular-nums">
                          {practice.number}
                        </span>
                        {isSelected && (
                          <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#62546A]">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Dipilih</span>
                          </span>
                        )}
                      </div>

                      <PracticeIllustration id={practice.id} />

                      <div className="space-y-1">
                        <p className="font-display text-base font-bold text-[#62546A] leading-snug">
                          {practice.title}
                        </p>
                        <p className="text-xs font-semibold text-[#62546A]/80 leading-relaxed">
                          {practice.caption}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Ruang Bina Ayat Individu */}
        <div className="rounded-3xl bg-[#FFF2F6]/70 p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <label
              htmlFor="individu-sentence-input"
              className="font-display text-lg font-bold text-[#62546A]"
            >
              Tulis Satu Ayat Mudah Kamu Secara Individu
            </label>
            <span className="text-xs sm:text-sm font-bold text-[#62546A]/80">
              {selectedPractice
                ? `Amalan dipilih: ${selectedPractice.title}`
                : 'Sila klik satu amalan pada poster di atas terlebih dahulu'}
            </span>
          </div>

          <textarea
            id="individu-sentence-input"
            rows={3}
            value={individu.sentence}
            onChange={(e) =>
              setIndividu((prev) => ({
                ...prev,
                sentence: e.target.value,
                checked: false,
              }))
            }
            className="w-full rounded-2xl bg-white p-4 text-base text-[#62546A] border border-[#D9B8D8]/70 focus:border-[#62546A] focus:outline-none"
          />

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIndividu((prev) => ({ ...prev, checked: true }))}
              className="kawaii-btn inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#62546A] text-[#FFF2F6] font-bold text-sm sm:text-base hover:bg-[#52445A] cursor-pointer kawaii-shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Semak Jawapan</span>
            </button>

            <button
              type="button"
              onClick={() => setIndividu({ selectedPracticeId: '', sentence: '', checked: false })}
              className="kawaii-btn inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-[#62546A] font-bold text-sm hover:bg-[#FFF0C9] cursor-pointer kawaii-shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Cuba Semula</span>
            </button>
          </div>

          {individu.checked && (
            <div
              className={`rounded-2xl p-4 sm:p-5 space-y-2 ${
                !selectedPractice || individuEval.status !== 'good'
                  ? 'bg-[#FFF0C9] text-[#62546A]'
                  : 'bg-[#E3F5E9] text-[#1F5E34]'
              }`}
              role="status"
            >
              {!selectedPractice ? (
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-display font-bold text-base">
                      Pilih satu amalan terlebih dahulu
                    </p>
                    <p className="text-sm font-semibold">
                      Sila klik salah satu daripada empat kad amalan pada poster “Kebersihan adalah
                      Keutamaan” di atas, kemudian semak jawapan kamu semula.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  {individuEval.status === 'good' ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <Info className="w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1.5">
                    <p className="font-display font-bold text-base">{individuEval.title}</p>
                    <p className="text-sm font-semibold leading-relaxed">
                      {individuEval.message}
                    </p>
                    <p className="text-xs sm:text-sm font-bold pt-1">
                      Contoh ayat rujukan: “{selectedPractice.sampleSentence}”
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <PageFooterNav currentPage="langkah-1" onNavigate={onNavigate} />

      {/* Modal Besarkan Poster */}
      {posterZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#62546A]/65 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Paparan Besar Poster Kebersihan adalah Keutamaan"
          onClick={() => setPosterZoomed(false)}
        >
          <div
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-4 sm:p-5 kawaii-shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 pb-3">
              <p className="font-display text-lg font-bold text-[#62546A]">
                Poster “Kebersihan adalah Keutamaan”
              </p>
              <button
                type="button"
                onClick={() => setPosterZoomed(false)}
                aria-label="Tutup paparan besar poster"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8DCEB] text-[#62546A] text-xs font-bold hover:bg-[#FFF0C9] cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>Tutup</span>
              </button>
            </div>
            <ResilientImage
              src="/assets/aistudio/image_85414118.png"
              alt="Poster Kebersihan adalah Keutamaan"
              fallbackTitle="Poster Kebersihan adalah Keutamaan"
              className="w-full h-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
