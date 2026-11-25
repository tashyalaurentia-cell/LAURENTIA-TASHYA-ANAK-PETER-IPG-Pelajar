import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Info,
  PenLine,
  RotateCcw,
  Sparkles,
  Users,
} from 'lucide-react';
import { CURRICULUM } from '../data/curriculum';
import { GroupId, PageId, StudentProgress } from '../types/learning';
import { FruitMascot, ResilientImage } from '../components/KawaiiArtwork';
import { PageFooterNav } from '../components/PageFooterNav';
import { TeacherAudioButton } from '../components/TeacherAudioButton';
import { stopTeacherAudio } from '../utils/teacherAudio';
import {
  POSTER_PRACTICES,
  PracticeIllustration,
  evaluateSentence,
} from '../utils/sentenceHelpers';

interface Langkah2PageProps {
  onNavigate: (page: PageId) => void;
  progress: StudentProgress;
  onUpdateProgress: React.Dispatch<React.SetStateAction<StudentProgress>>;
}

const STRAWBERI_POSTER_PAIRS = [
  {
    id: 'p1',
    left: 'Mencuci tangan sebelum makan',
    rightId: 'r1',
    right: 'untuk menyingkirkan kotoran dan kuman.',
  },
  {
    id: 'p2',
    left: 'Memberus gigi setiap hari',
    rightId: 'r2',
    right: 'supaya gigi kekal sihat dan tidak berlubang.',
  },
  {
    id: 'p3',
    left: 'Mandi dua kali sehari',
    rightId: 'r3',
    right: 'agar badan berasa segar dan selesa.',
  },
  {
    id: 'p4',
    left: 'Memakai pakaian yang bersih',
    rightId: 'r4',
    right: 'kerana pakaian bersih menjamin kesihatan diri.',
  },
] as const;

const STRAWBERI_RIGHT_CHOICES = [
  { id: 'r3', text: 'agar badan berasa segar dan selesa.' },
  { id: 'r1', text: 'untuk menyingkirkan kotoran dan kuman.' },
  { id: 'r4', text: 'kerana pakaian bersih menjamin kesihatan diri.' },
  { id: 'r2', text: 'supaya gigi kekal sihat dan tidak berlubang.' },
] as const;

const ANGGUR_WORDS = ['sabun', 'gigi', 'mandi', 'pakaian', 'tuala'] as const;

const ANGGUR_POSTER_QUESTIONS = [
  {
    id: 'ang1',
    before: 'Kita perlu mencuci tangan dengan',
    after: 'sebelum makan.',
    answer: 'sabun',
    explanation: 'Sabun membantu menanggalkan kotoran dan kuman pada tangan sebelum kita makan.',
  },
  {
    id: 'ang2',
    before: 'Menggosok',
    after: 'setiap hari dapat mengelakkan kerosakan gigi.',
    answer: 'gigi',
    explanation: 'Kita perlu menggosok gigi setiap hari supaya gigi kekal kuat dan sihat.',
  },
  {
    id: 'ang3',
    before: 'Saya',
    after: 'dua kali sehari supaya badan sentiasa segar.',
    answer: 'mandi',
    explanation: 'Amalan mandi dua kali sehari menjadikan badan bersih dan segar.',
  },
  {
    id: 'ang4',
    before: 'Murid yang berdisiplin sentiasa memakai',
    after: 'yang bersih ke sekolah.',
    answer: 'pakaian',
    explanation: 'Memakai pakaian yang bersih menjadikan kita kemas dan selesa.',
  },
  {
    id: 'ang5',
    before: 'Selepas mandi, kita hendaklah mengelap badan menggunakan',
    after: 'yang kering.',
    answer: 'tuala',
    explanation: 'Tuala yang kering dan bersih digunakan untuk mengeringkan badan selepas mandi.',
  },
] as const;

export const Langkah2Page: React.FC<Langkah2PageProps> = ({
  onNavigate,
  progress,
  onUpdateProgress,
}) => {
  const [openedGroup, setOpenedGroup] = useState<GroupId | null>(null);
  const [showPosterRef, setShowPosterRef] = useState(false);

  const [betikChecked, setBetikChecked] = useState(false);

  const [selectedLeftId, setSelectedLeftId] = useState<string | null>(null);
  const [strawberiMatchChecked, setStrawberiMatchChecked] = useState(false);
  const [strawberiSentencesChecked, setStrawberiSentencesChecked] = useState(false);

  const [selectedBankWord, setSelectedBankWord] = useState<string | null>(null);
  const [anggurChecked, setAnggurChecked] = useState(false);

  const handleOpenGroup = (group: GroupId) => {
    stopTeacherAudio();
    setOpenedGroup(group);
    onUpdateProgress((prev) => ({ ...prev, activeGroup: group }));
  };

  const handleBackToActivities = () => {
    stopTeacherAudio();
    setOpenedGroup(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Betik Handlers ---
  const handleBetikChange = (index: number, value: string) => {
    setBetikChecked(false);
    onUpdateProgress((prev) => {
      const updated = [...prev.betikSentences];
      updated[index] = value;
      return { ...prev, betikSentences: updated };
    });
  };

  const handleResetBetik = () => {
    setBetikChecked(false);
    onUpdateProgress((prev) => ({
      ...prev,
      betikSentences: ['', '', '', ''],
    }));
  };

  const betikGoodCount = progress.betikSentences.filter(
    (s, idx) =>
      evaluateSentence(s, POSTER_PRACTICES[idx]?.keywords ?? []).status === 'good'
  ).length;

  // --- Strawberi Handlers ---
  const handleSelectLeft = (leftId: string) => {
    setStrawberiMatchChecked(false);
    setSelectedLeftId((prev) => (prev === leftId ? null : leftId));
  };

  const handleSelectRight = (rightId: string) => {
    if (!selectedLeftId) return;
    setStrawberiMatchChecked(false);
    onUpdateProgress((prev) => ({
      ...prev,
      strawberiMatches: {
        ...prev.strawberiMatches,
        [selectedLeftId]: rightId,
      },
    }));
    setSelectedLeftId(null);
  };

  const handleResetStrawberi = () => {
    setStrawberiMatchChecked(false);
    setStrawberiSentencesChecked(false);
    setSelectedLeftId(null);
    onUpdateProgress((prev) => ({
      ...prev,
      strawberiMatches: {},
      strawberiSentences: ['', '', ''],
    }));
  };

  const handleStrawberiSentenceChange = (index: number, value: string) => {
    setStrawberiSentencesChecked(false);
    onUpdateProgress((prev) => {
      const updated = [...prev.strawberiSentences];
      updated[index] = value;
      return { ...prev, strawberiSentences: updated };
    });
  };

  const strawberiMatchScore = STRAWBERI_POSTER_PAIRS.filter(
    (p) => progress.strawberiMatches[p.id] === p.rightId
  ).length;

  const strawberiSentencesGoodCount = progress.strawberiSentences.filter(
    (s) => evaluateSentence(s).status === 'good'
  ).length;

  // --- Anggur Handlers ---
  const handleSelectBlank = (index: number) => {
    setAnggurChecked(false);
    if (selectedBankWord) {
      onUpdateProgress((prev) => {
        const updated = [...prev.anggurBlanks];
        updated[index] = selectedBankWord;
        return { ...prev, anggurBlanks: updated };
      });
      setSelectedBankWord(null);
    } else if (progress.anggurBlanks[index]) {
      onUpdateProgress((prev) => {
        const updated = [...prev.anggurBlanks];
        updated[index] = '';
        return { ...prev, anggurBlanks: updated };
      });
    }
  };

  const handleResetAnggur = () => {
    setAnggurChecked(false);
    setSelectedBankWord(null);
    onUpdateProgress((prev) => ({
      ...prev,
      anggurBlanks: ['', '', '', '', ''],
    }));
  };

  const anggurScore = ANGGUR_POSTER_QUESTIONS.filter(
    (q, idx) => progress.anggurBlanks[idx] === q.answer
  ).length;

  return (
    <div className="space-y-8">
      {/* Header Bahagian 4 */}
      <header className="space-y-2.5">
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#62546A]/80">
          Bahagian 4 · Langkah 2 (Aktiviti Berkumpulan Mengikut Tahap)
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#62546A] text-balance">
            Langkah 2: Aktiviti Kumpulan (Betik, Strawberi & Anggur)
          </h1>

          {openedGroup && (
            <button
              type="button"
              onClick={handleBackToActivities}
              className="kawaii-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-[#D9B8D8]/70 text-[#62546A] font-bold text-sm hover:bg-[#F8DCEB] cursor-pointer kawaii-shadow-sm self-start sm:self-center shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Pilihan Kumpulan</span>
            </button>
          )}
        </div>
        <div className="flex items-start gap-2.5 max-w-2xl">
          <p className="text-base font-bold text-[#62546A] leading-relaxed">
            Pilih kumpulan mengikut tahap penguasaan masing-masing untuk menyiapkan tugasan membina
            ayat berdasarkan poster “Kebersihan adalah Keutamaan”.
          </p>
          <TeacherAudioButton clipId="langkah2-arahan" tone="lavender" className="mt-0.5" />
        </div>
      </header>

      {/* Poster Rujukan Ringkas (Boleh dibuka/tutup ketika menyiapkan tugasan kumpulan) */}
      <div className="kawaii-card p-5 bg-white space-y-4">
        <button
          type="button"
          onClick={() => setShowPosterRef((prev) => !prev)}
          aria-expanded={showPosterRef}
          className="w-full flex items-center justify-between gap-3 text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF0C9] flex items-center justify-center shrink-0 text-[#62546A]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-[#62546A]">
                Rujukan Poster “Kebersihan adalah Keutamaan”
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#62546A]/85">
                Klik di sini untuk melihat empat amalan daripada poster Langkah 1 semasa membincangkan jawapan kumpulan.
              </p>
            </div>
          </div>
          {showPosterRef ? (
            <ChevronUp className="w-5 h-5 shrink-0 text-[#62546A]" />
          ) : (
            <ChevronDown className="w-5 h-5 shrink-0 text-[#62546A]" />
          )}
        </button>

        {showPosterRef && (
          <div className="pt-4 border-t border-[#D9B8D8]/40 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-3 flex justify-center">
              <div className="w-44 sm:w-48 rounded-2xl bg-[#FFF2F6] p-2 border border-[#D9B8D8]/50">
                <ResilientImage
                  src="/assets/aistudio/image_85414118.png"
                  alt="Poster Kebersihan adalah Keutamaan"
                  fallbackTitle="Poster Kebersihan adalah Keutamaan"
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
            </div>
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {POSTER_PRACTICES.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-2xl p-4 ${item.bgClass} flex items-center gap-3`}
                >
                  <PracticeIllustration id={item.id} />
                  <div>
                    <p className="font-display text-sm font-bold text-[#62546A]">{item.title}</p>
                    <p className="text-xs font-semibold text-[#62546A]/80 mt-0.5">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Pilihan 3 Kumpulan */}
      {openedGroup === null && (
        <section aria-label="Pilihan Aktiviti Kumpulan" className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* A. Kumpulan Betik */}
          <div className="kawaii-card p-6 bg-[#FFF0C9]/70 flex flex-col justify-between gap-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <FruitMascot group="betik" className="w-12 h-12" />
                <span className="text-xs font-extrabold text-[#62546A]/80 tabular-nums">
                  Kemajuan: {betikGoodCount} / 4
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-extrabold text-[#62546A]/75">A. Murid Baik</p>
                <h2 className="font-display text-xl font-bold text-[#62546A]">Kumpulan Betik</h2>
              </div>
              <p className="text-sm font-semibold text-[#62546A]/90 leading-relaxed">
                Membina empat ayat lengkap tentang amalan kebersihan diri berdasarkan poster.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleOpenGroup('betik')}
              className="kawaii-btn w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#62546A] text-[#FFF2F6] font-bold text-sm hover:bg-[#52445A] cursor-pointer"
            >
              <span>Buka Aktiviti Betik</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* B. Kumpulan Strawberi */}
          <div className="kawaii-card p-6 bg-[#F8DCEB]/75 flex flex-col justify-between gap-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <FruitMascot group="strawberi" className="w-12 h-12" />
                <span className="text-xs font-extrabold text-[#62546A]/80 tabular-nums">
                  Padanan: {strawberiMatchScore} / 4
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-extrabold text-[#62546A]/75">B. Murid Sederhana</p>
                <h2 className="font-display text-xl font-bold text-[#62546A]">Kumpulan Strawberi</h2>
              </div>
              <p className="text-sm font-semibold text-[#62546A]/90 leading-relaxed">
                Memadankan frasa yang diberikan dan membina tiga ayat tentang amalan kebersihan diri.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleOpenGroup('strawberi')}
              className="kawaii-btn w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#62546A] text-[#FFF2F6] font-bold text-sm hover:bg-[#52445A] cursor-pointer"
            >
              <span>Buka Aktiviti Strawberi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* C. Kumpulan Anggur */}
          <div className="kawaii-card p-6 bg-[#E2EFFF]/80 flex flex-col justify-between gap-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <FruitMascot group="anggur" className="w-12 h-12" />
                <span className="text-xs font-extrabold text-[#62546A]/80 tabular-nums">
                  Isian: {progress.anggurBlanks.filter(Boolean).length} / 5
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-extrabold text-[#62546A]/75">C. Murid Asas</p>
                <h2 className="font-display text-xl font-bold text-[#62546A]">Kumpulan Anggur</h2>
              </div>
              <p className="text-sm font-semibold text-[#62546A]/90 leading-relaxed">
                Melengkapkan lima tempat kosong dalam ayat tentang amalan kebersihan diri.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleOpenGroup('anggur')}
              className="kawaii-btn w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#62546A] text-[#FFF2F6] font-bold text-sm hover:bg-[#52445A] cursor-pointer"
            >
              <span>Buka Aktiviti Anggur</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* A. KUMPULAN BETIK */}
      {openedGroup === 'betik' && (
        <div className="kawaii-card p-6 sm:p-8 bg-white space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#D9B8D8]/45">
            <div className="flex items-center gap-3.5">
              <FruitMascot group="betik" className="w-12 h-12 shrink-0" />
              <div>
                <p className="text-xs font-extrabold text-[#62546A]/75">
                  Kumpulan Betik · Murid Baik
                </p>
                <h2 className="font-display text-2xl font-bold text-[#62546A]">
                  Bina dan Tulis Empat Ayat Lengkap
                </h2>
              </div>
            </div>
            <p className="px-4 py-2 rounded-xl bg-[#FFF0C9] text-sm font-extrabold text-[#62546A] tabular-nums self-start sm:self-center">
              Skor Ayat Lengkap: {betikGoodCount} / 4
            </p>
          </div>

          <div className="rounded-2xl bg-[#FFF0C9]/55 border-l-4 border-[#62546A] px-4 py-3 flex items-start sm:items-center justify-between gap-3">
            <p className="text-sm sm:text-base font-bold text-[#62546A]">
              Arahan: {CURRICULUM.groupObjectives[0].text}
            </p>
            <TeacherAudioButton clipId="langkah2-betik" tone="cream" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {POSTER_PRACTICES.map((practice, idx) => {
              const value = progress.betikSentences[idx] || '';
              const evalResult = evaluateSentence(value, practice.keywords);
              return (
                <div key={practice.id} className="rounded-2xl bg-[#FFF2F6]/70 p-5 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FFF0C9] text-xs font-extrabold text-[#62546A] tabular-nums shrink-0">
                      {idx + 1}
                    </span>
                    <label
                      htmlFor={`betik-input-${idx}`}
                      className="font-display text-base font-bold text-[#62546A]"
                    >
                      Amalan {idx + 1}: {practice.title}
                    </label>
                  </div>

                  <textarea
                    id={`betik-input-${idx}`}
                    rows={3}
                    value={value}
                    onChange={(e) => handleBetikChange(idx, e.target.value)}
                    className="w-full rounded-2xl bg-white p-3.5 text-sm sm:text-base text-[#62546A] border border-[#D9B8D8]/65 focus:border-[#62546A] focus:outline-none"
                  />

                  {betikChecked ? (
                    <div
                      className={`rounded-xl p-3 text-xs sm:text-sm font-semibold flex items-start gap-2 ${
                        evalResult.status === 'good'
                          ? 'bg-[#E3F5E9] text-[#1F5E34]'
                          : 'bg-[#FFF0C9] text-[#62546A]'
                      }`}
                    >
                      {evalResult.status === 'good' ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                      ) : (
                        <Info className="w-4 h-4 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="font-extrabold">{evalResult.title}</p>
                        <p>{evalResult.message}</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs font-bold text-[#62546A]/65 flex items-center gap-1.5">
                      <PenLine className="w-3.5 h-3.5 shrink-0" />
                      <span>Mulakan dengan huruf besar dan akhiri dengan tanda noktah (.).</span>
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {betikChecked && (
            <div
              className={`rounded-2xl p-4 flex items-center gap-3 text-sm font-bold ${
                betikGoodCount === 4
                  ? 'bg-[#E3F5E9] text-[#1F5E34]'
                  : 'bg-[#FFF0C9]/85 text-[#62546A]'
              }`}
              role="status"
            >
              <Award className="w-5 h-5 shrink-0" />
              <span>
                {betikGoodCount === 4
                  ? 'Syabas, Kumpulan Betik! Keempat-empat ayat kamu lengkap, jelas dan tepat.'
                  : `Bagus mencuba! ${betikGoodCount} daripada 4 ayat kamu sudah lengkap. Semak panduan di atas untuk membaiki ayat yang lain.`}
              </span>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setBetikChecked(true)}
                className="kawaii-btn inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#62546A] text-[#FFF2F6] font-bold text-sm hover:bg-[#52445A] cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Semak Jawapan</span>
              </button>
              <button
                type="button"
                onClick={handleResetBetik}
                className="kawaii-btn inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#FFF2F6] text-[#62546A] font-bold text-sm hover:bg-[#FFF0C9] cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Cuba Semula</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleBackToActivities}
              className="kawaii-btn inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#E2EFFF] text-[#62546A] font-bold text-sm hover:bg-[#F8DCEB] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Pilihan Kumpulan</span>
            </button>
          </div>
        </div>
      )}

      {/* B. KUMPULAN STRAWBERI */}
      {openedGroup === 'strawberi' && (
        <div className="kawaii-card p-6 sm:p-8 bg-white space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#D9B8D8]/45">
            <div className="flex items-center gap-3.5">
              <FruitMascot group="strawberi" className="w-12 h-12 shrink-0" />
              <div>
                <p className="text-xs font-extrabold text-[#62546A]/75">
                  Kumpulan Strawberi · Murid Sederhana
                </p>
                <h2 className="font-display text-2xl font-bold text-[#62546A]">
                  Padankan Frasa dan Bina Tiga Ayat
                </h2>
              </div>
            </div>
            <p className="px-4 py-2 rounded-xl bg-[#F8DCEB] text-sm font-extrabold text-[#62546A] tabular-nums self-start sm:self-center">
              Padanan Betul: {strawberiMatchScore} / 4 · Ayat: {strawberiSentencesGoodCount} / 3
            </p>
          </div>

          <div className="rounded-2xl bg-[#F8DCEB]/55 border-l-4 border-[#62546A] px-4 py-3 flex items-start sm:items-center justify-between gap-3">
            <p className="text-sm sm:text-base font-bold text-[#62546A]">
              Arahan: {CURRICULUM.groupObjectives[1].text}
            </p>
            <TeacherAudioButton clipId="langkah2-strawberi" tone="pink" />
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-[#62546A]">
                Bahagian A: Padankan Frasa
              </h3>
              <div className="flex items-start gap-2">
                <p className="text-sm font-bold text-[#62546A]/85">
                  Klik satu frasa amalan di sebelah kiri, kemudian klik sambungan frasa yang tepat di
                  sebelah kanan.
                </p>
                <TeacherAudioButton clipId="langkah2-strawberi-a" tone="pink" />
              </div>
            </div>

            {selectedLeftId && (
              <div className="rounded-xl bg-[#FFF0C9] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#62546A] flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>
                  Sedang memilih padanan untuk:{' '}
                  {STRAWBERI_POSTER_PAIRS.find((p) => p.id === selectedLeftId)?.left}. Klik satu
                  sambungan frasa di sebelah kanan sekarang.
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-3">
                {STRAWBERI_POSTER_PAIRS.map((pair, idx) => {
                  const matchedRightId = progress.strawberiMatches[pair.id];
                  const matchedOption = STRAWBERI_RIGHT_CHOICES.find(
                    (o) => o.id === matchedRightId
                  );
                  const isSelected = selectedLeftId === pair.id;
                  const isCorrect = matchedRightId === pair.rightId;

                  return (
                    <button
                      key={pair.id}
                      type="button"
                      onClick={() => handleSelectLeft(pair.id)}
                      className={`w-full p-4 rounded-2xl text-left transition-colors cursor-pointer border ${
                        isSelected
                          ? 'bg-[#F8DCEB] border-[#62546A] ring-2 ring-[#62546A]/25'
                          : 'bg-[#FFF2F6]/70 border-[#D9B8D8]/50 hover:bg-[#F8DCEB]/55'
                      }`}
                    >
                      <p className="text-xs font-extrabold text-[#62546A]/70 mb-1 tabular-nums">
                        Frasa {idx + 1}
                      </p>
                      <p className="text-sm sm:text-base font-bold text-[#62546A]">{pair.left}</p>
                      {matchedOption && (
                        <div className="mt-2 pt-2 border-t border-[#D9B8D8]/45 text-xs sm:text-sm font-semibold space-y-1">
                          <p className="text-[#62546A]">
                            Padanan kamu: <span className="font-bold">{matchedOption.text}</span>
                          </p>
                          {strawberiMatchChecked && (
                            <p
                              className={`inline-flex items-center gap-1.5 font-extrabold ${
                                isCorrect ? 'text-[#1F5E34]' : 'text-[#8E2B2A]'
                              }`}
                            >
                              {isCorrect ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                                  <span>Tepat! Gabungan frasa ini sangat bermakna.</span>
                                </>
                              ) : (
                                <>
                                  <Info className="w-4 h-4 shrink-0" />
                                  <span>
                                    Kurang tepat. Padanan yang sesuai ialah “{pair.right}”
                                  </span>
                                </>
                              )}
                            </p>
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-3">
                {STRAWBERI_RIGHT_CHOICES.map((opt) => {
                  const isUsed = Object.values(progress.strawberiMatches).includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectRight(opt.id)}
                      disabled={!selectedLeftId}
                      className={`w-full p-4 rounded-2xl text-left transition-colors border ${
                        selectedLeftId
                          ? 'bg-[#E2EFFF] border-[#62546A] hover:bg-[#FFF0C9] cursor-pointer'
                          : isUsed
                          ? 'bg-[#E2EFFF]/45 border-[#D9B8D8]/45 text-[#62546A]/80'
                          : 'bg-[#FFF2F6]/45 border-[#D9B8D8]/45 text-[#62546A]/70'
                      }`}
                    >
                      <p className="text-xs font-extrabold text-[#62546A]/70 mb-1">
                        Sambungan Frasa
                      </p>
                      <p className="text-sm sm:text-base font-bold text-[#62546A]">{opt.text}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setStrawberiMatchChecked(true)}
                className="kawaii-btn px-5 py-2.5 rounded-xl bg-[#62546A] text-[#FFF2F6] text-sm font-bold hover:bg-[#52445A] cursor-pointer"
              >
                Semak Padanan
              </button>
              {strawberiMatchChecked && (
                <p className="text-sm font-extrabold text-[#62546A]">
                  {strawberiMatchScore === 4
                    ? 'Hebat! Semua empat padanan frasa kamu tepat!'
                    : `Kamu berjaya memadankan ${strawberiMatchScore} daripada 4 frasa dengan betul.`}
                </p>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-[#D9B8D8]/45 space-y-4">
            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-[#62546A]">
                Bahagian B: Bina Tiga Ayat Tentang Amalan Kebersihan Diri
              </h3>
              <div className="flex items-start gap-2">
                <p className="text-sm font-bold text-[#62546A]/85">
                  Gunakan frasa yang telah dipadankan untuk membina tiga ayat lengkap.
                </p>
                <TeacherAudioButton clipId="langkah2-strawberi-b" tone="pink" />
              </div>
            </div>

            <div className="space-y-4">
              {[0, 1, 2].map((idx) => {
                const val = progress.strawberiSentences[idx] || '';
                const evalResult = evaluateSentence(val);
                return (
                  <div key={idx} className="rounded-2xl bg-[#FFF2F6]/65 p-4 space-y-2.5">
                    <label
                      htmlFor={`strawberi-ayat-${idx}`}
                      className="block font-display text-base font-bold text-[#62546A]"
                    >
                      Ayat {idx + 1}
                    </label>
                    <input
                      id={`strawberi-ayat-${idx}`}
                      type="text"
                      value={val}
                      onChange={(e) => handleStrawberiSentenceChange(idx, e.target.value)}
                      className="w-full rounded-2xl bg-white px-4 py-3 text-sm sm:text-base text-[#62546A] border border-[#D9B8D8]/65 focus:border-[#62546A] focus:outline-none"
                    />
                    {strawberiSentencesChecked && (
                      <div
                        className={`rounded-xl p-3 text-xs sm:text-sm font-semibold flex items-start gap-2 ${
                          evalResult.status === 'good'
                            ? 'bg-[#E3F5E9] text-[#1F5E34]'
                            : 'bg-[#FFF0C9] text-[#62546A]'
                        }`}
                      >
                        {evalResult.status === 'good' ? (
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                        ) : (
                          <Info className="w-4 h-4 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="font-extrabold">{evalResult.title}</p>
                          <p>{evalResult.message}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setStrawberiMatchChecked(true);
                    setStrawberiSentencesChecked(true);
                  }}
                  className="kawaii-btn inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#62546A] text-[#FFF2F6] font-bold text-sm hover:bg-[#52445A] cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Semak Jawapan</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetStrawberi}
                  className="kawaii-btn inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#FFF2F6] text-[#62546A] font-bold text-sm hover:bg-[#FFF0C9] cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Cuba Semula</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleBackToActivities}
                className="kawaii-btn inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#E2EFFF] text-[#62546A] font-bold text-sm hover:bg-[#F8DCEB] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Pilihan Kumpulan</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* C. KUMPULAN ANGGUR */}
      {openedGroup === 'anggur' && (
        <div className="kawaii-card p-6 sm:p-8 bg-white space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#D9B8D8]/45">
            <div className="flex items-center gap-3.5">
              <FruitMascot group="anggur" className="w-12 h-12 shrink-0" />
              <div>
                <p className="text-xs font-extrabold text-[#62546A]/75">
                  Kumpulan Anggur · Murid Asas
                </p>
                <h2 className="font-display text-2xl font-bold text-[#62546A]">
                  Lengkapkan Lima Tempat Kosong
                </h2>
              </div>
            </div>
            <p className="px-4 py-2 rounded-xl bg-[#E2EFFF] text-sm font-extrabold text-[#62546A] tabular-nums self-start sm:self-center">
              {anggurChecked
                ? `Skor: ${anggurScore} / 5`
                : `Diisi: ${progress.anggurBlanks.filter(Boolean).length} / 5`}
            </p>
          </div>

          <div className="rounded-2xl bg-[#E2EFFF]/65 border-l-4 border-[#62546A] px-4 py-3 flex items-start sm:items-center justify-between gap-3">
            <p className="text-sm sm:text-base font-bold text-[#62546A]">
              Arahan: {CURRICULUM.groupObjectives[2].text}
            </p>
            <TeacherAudioButton clipId="langkah2-anggur" tone="blue" />
          </div>

          <div className="rounded-2xl bg-[#E2EFFF]/70 p-4 sm:p-5 space-y-2.5">
            <div className="flex items-start gap-2">
              <p className="text-sm font-bold text-[#62546A]">
                Pilihan Perkataan (Klik satu perkataan, kemudian klik tempat kosong pada ayat):
              </p>
              <TeacherAudioButton clipId="langkah2-anggur-kata" tone="blue" />
            </div>
            <div className="flex flex-wrap gap-2.5">
              {ANGGUR_WORDS.map((word) => {
                const isSelected = selectedBankWord === word;
                return (
                  <button
                    key={word}
                    type="button"
                    onClick={() => setSelectedBankWord((prev) => (prev === word ? null : word))}
                    aria-pressed={isSelected}
                    className={`kawaii-btn px-4 py-2 rounded-xl text-sm font-extrabold cursor-pointer kawaii-shadow-sm ${
                      isSelected
                        ? 'bg-[#62546A] text-[#FFF2F6]'
                        : 'bg-white text-[#62546A] hover:bg-[#FFF0C9]'
                    }`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            {ANGGUR_POSTER_QUESTIONS.map((q, idx) => {
              const chosen = progress.anggurBlanks[idx];
              const isCorrect = chosen === q.answer;

              return (
                <div key={q.id} className="rounded-2xl bg-[#FFF2F6]/65 p-4 sm:p-5 space-y-2.5">
                  <p className="text-sm sm:text-base font-semibold text-[#62546A] leading-relaxed">
                    <span className="font-extrabold mr-2 tabular-nums">{idx + 1}.</span>
                    {q.before}{' '}
                    <button
                      type="button"
                      onClick={() => handleSelectBlank(idx)}
                      className={`inline-flex items-center px-3.5 py-1 mx-1 rounded-xl font-extrabold text-sm transition-colors cursor-pointer border ${
                        chosen
                          ? 'bg-[#FFF0C9] border-[#62546A] text-[#62546A]'
                          : selectedBankWord
                          ? 'bg-white border-dashed border-[#62546A] text-[#62546A]'
                          : 'bg-white border-dashed border-[#D9B8D8] text-[#62546A]/65'
                      }`}
                    >
                      {chosen || 'klik untuk isi'}
                    </button>{' '}
                    {q.after}
                  </p>

                  {anggurChecked && (
                    <div
                      className={`rounded-xl p-3 text-xs sm:text-sm font-semibold flex items-start gap-2 ${
                        isCorrect ? 'bg-[#E3F5E9] text-[#1F5E34]' : 'bg-[#FDE6E4] text-[#8E2B2A]'
                      }`}
                    >
                      {isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                      ) : (
                        <Info className="w-4 h-4 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="font-extrabold">
                          {isCorrect
                            ? `Tepat sekali! Jawapan kamu "${chosen}" betul.`
                            : `Pembetulan: Jawapan yang betul ialah "${q.answer}".`}
                        </p>
                        <p>{q.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {anggurChecked && (
            <div className="rounded-2xl bg-[#FFF0C9]/80 p-4 flex items-center gap-3 text-sm font-bold text-[#62546A]">
              <Award className="w-5 h-5 shrink-0" />
              <span>
                {anggurScore === 5
                  ? 'Tahniah! Kamu mendapat markah penuh 5 / 5 untuk Kumpulan Anggur!'
                  : `Bagus mencuba! Kamu mendapat ${anggurScore} daripada 5. Semak pembetulan di atas dan cuba lagi jika perlu.`}
              </span>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setAnggurChecked(true)}
                className="kawaii-btn inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#62546A] text-[#FFF2F6] font-bold text-sm hover:bg-[#52445A] cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Semak Jawapan</span>
              </button>
              <button
                type="button"
                onClick={handleResetAnggur}
                className="kawaii-btn inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#FFF2F6] text-[#62546A] font-bold text-sm hover:bg-[#FFF0C9] cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Cuba Semula</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleBackToActivities}
              className="kawaii-btn inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#E2EFFF] text-[#62546A] font-bold text-sm hover:bg-[#F8DCEB] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Pilihan Kumpulan</span>
            </button>
          </div>
        </div>
      )}

      <PageFooterNav currentPage="langkah-2" onNavigate={onNavigate} />
    </div>
  );
};
