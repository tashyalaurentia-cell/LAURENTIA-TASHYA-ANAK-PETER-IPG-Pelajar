import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  ClipboardCheck,
  Compass,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers,
  Lock,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  Users,
} from 'lucide-react';
import { CURRICULUM } from '../data/curriculum';
import { DEVELOPER_PUBLIC_PROFILE } from '../data/developerProfile';
import { PageId } from '../types/learning';
import { FruitMascot } from '../components/KawaiiArtwork';
import { PageFooterNav } from '../components/PageFooterNav';

interface RuangGuruPageProps {
  onNavigate: (page: PageId) => void;
}

type TeacherTab = 'semua' | 'pembangun-dskp' | 'rph-strategi' | 'pbd-kumpulan';

const RPH_PHASES: Array<{
  phase: string;
  duration: string;
  targetPage: PageId;
  focus: string;
  activities: string[];
  bbm: string;
}> = [
  {
    phase: 'Set Induksi',
    duration: '5 minit',
    targetPage: 'set-induksi',
    focus: 'Merangsang minat dan mengaitkan pengetahuan sedia ada murid.',
    activities: [
      'Murid menonton video “Jom Bersihkan Diri” dan menanda senarai semak pemerhatian.',
      'Guru bersoal jawab dengan murid mengenai amalan kebersihan sebelum ke sekolah.',
      'Murid menyumbang satu amalan kebersihan harian pada ruang perkongsian interaktif.',
    ],
    bbm: 'Video YouTube “Jom Bersihkan Diri”, video interaktif 4 titik semakan, kad Sahabat Kebersihan.',
  },
  {
    phase: 'Langkah 1',
    duration: '15 minit',
    targetPage: 'langkah-1',
    focus: 'Mengenal pasti amalan kebersihan diri dan membina satu ayat mudah secara individu.',
    activities: [
      'Murid meneliti poster digital “Kebersihan adalah Keutamaan” yang memaparkan empat amalan utama.',
      'Guru membimbing kosa kata penting dan permulaan ayat pendapat (“Pada pendapat saya...”).',
      'Setiap murid memilih satu amalan daripada poster, menulis satu ayat mudah dan menyemak jawapan.',
    ],
    bbm: 'Poster digital “Kebersihan adalah Keutamaan”, panduan kosa kata interaktif.',
  },
  {
    phase: 'Langkah 2',
    duration: '20 minit',
    targetPage: 'langkah-2',
    focus: 'Aktiviti penulisan berkumpulan secara terbeza mengikut tahap penguasaan murid.',
    activities: [
      'Kumpulan Betik (Murid Baik): Membina dan menulis 4 ayat lengkap menyatakan pendapat berdasarkan poster.',
      'Kumpulan Strawberi (Murid Sederhana): Memadankan frasa yang sesuai dan membina 3 ayat.',
      'Kumpulan Anggur (Murid Asas): Melengkapkan 5 tempat kosong dengan perkataan kebersihan diri yang tepat.',
    ],
    bbm: 'Kad tugasan interaktif Betik, Strawberi & Anggur serta rujukan poster.',
  },
  {
    phase: 'Langkah 3',
    duration: '15 minit',
    targetPage: 'langkah-3',
    focus: 'Pentaksiran kendiri, pengayaan dan pemulihan.',
    activities: [
      'Murid menjawab kuiz interaktif 10 soalan “Cabaran Bijak” dengan markah automatik dan lencana pencapaian.',
      'Pengayaan (Wordwall): Murid cemerlang menyusun perkataan menjadi ayat lengkap.',
      'Pemulihan (Google Sites): Murid dibimbing menjawab Kuiz Kebersihan Diri bagi mengukuhkan kefahaman asas.',
    ],
    bbm: 'Kuiz interaktif 10 soalan, pautan aktiviti Wordwall dan Google Sites.',
  },
  {
    phase: 'Penutup',
    duration: '5 minit',
    targetPage: 'penutup',
    focus: 'Rumusan isi pelajaran, refleksi kendiri dan penerapan nilai murni.',
    activities: [
      'Murid mengimbas empat rumusan utama pelajaran hari ini.',
      'Murid melengkapkan tiga soalan refleksi ringkas.',
      'Murid melafazkan slogan “Kebersihan amalan kita, hidup sihat setiap masa!” bersama guru.',
    ],
    bbm: 'Kad rumusan, borang refleksi kendiri dan paparan slogan.',
  },
];

const TEACHING_STRATEGIES = [
  {
    title: 'Pedagogi Terbeza (Differentiated Instruction)',
    detail:
      'Tugasan Langkah 2 dibezakan kepada Kumpulan Betik, Strawberi dan Anggur agar setiap murid mencapai SP 3.2.1 mengikut keupayaan masing-masing.',
  },
  {
    title: 'Pembelajaran Berasaskan Multimedia',
    detail:
      'Penggunaan video lagu, video interaktif bercheck-point dan poster digital membantu murid Tahun 5 menjana idea serta menyatakan pendapat dengan jelas.',
  },
  {
    title: 'Pembelajaran Berpusatkan Murid & Koperatif',
    detail:
      'Murid aktif meneroka, berbincang dalam kumpulan tahap serta menulis dan menyemak ayat secara kendiri dengan bimbingan guru sebagai pemudah cara.',
  },
  {
    title: 'Gamifikasi & Maklum Balas Segera',
    detail:
      'Elemen bintang, mata ganjaran, lencana pencapaian dan semakan ayat automatik mengekalkan motivasi murid sekolah rendah sepanjang PdP.',
  },
];

const GROUP_RATIONALE = [
  {
    group: 'Kumpulan Betik (Murid Baik)',
    fruit: 'betik' as const,
    bgClass: 'bg-[#FFF0C9]/75',
    task: 'Membina dan menulis empat ayat lengkap menyatakan pendapat berdasarkan poster.',
    rationale:
      'Memberikan cabaran penulisan bebas berpandukan kata kunci supaya murid berkebolehan tinggi mahir menggunakan kata hubung dan penanda wacana pendapat.',
  },
  {
    group: 'Kumpulan Strawberi (Murid Sederhana)',
    fruit: 'strawberi' as const,
    bgClass: 'bg-[#F8DCEB]/75',
    task: 'Memadankan frasa yang diberikan dan membina tiga ayat tentang amalan kebersihan diri.',
    rationale:
      'Menyediakan perancah (scaffolding) melalui padanan frasa sebab-akibat terlebih dahulu sebelum murid menggabungkannya menjadi ayat lengkap.',
  },
  {
    group: 'Kumpulan Anggur (Murid Asas)',
    fruit: 'anggur' as const,
    bgClass: 'bg-[#E2EFFF]/80',
    task: 'Melengkapkan lima tempat kosong tentang amalan kebersihan diri.',
    rationale:
      'Mengukuhkan penguasaan kosa kata asas kebersihan diri dan binaan struktur ayat mudah secara berperingkat tanpa membebankan murid.',
  },
];

const PBD_LEVELS = [
  {
    tp: 'TP 1 – TP 2',
    desc: 'Mengenal pasti amalan kebersihan diri daripada video dan melengkapkan ayat asas dengan bimbingan (Kumpulan Anggur & pemulihan Google Sites).',
  },
  {
    tp: 'TP 3 – TP 4',
    desc: 'Memadankan frasa serta membina ayat mudah yang jelas untuk menyatakan pendapat berdasarkan poster dengan bimbingan minimum.',
  },
  {
    tp: 'TP 5 – TP 6',
    desc: 'Membina dan menulis empat ayat menyatakan pendapat dengan tepat, bertatabahasa kemas serta menguasai aktiviti pengayaan Wordwall.',
  },
];

export const RuangGuruPage: React.FC<RuangGuruPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<TeacherTab>('semua');

  const showDeveloperDskp = activeTab === 'semua' || activeTab === 'pembangun-dskp';
  const showRphStrategy = activeTab === 'semua' || activeTab === 'rph-strategi';
  const showPbdGroups = activeTab === 'semua' || activeTab === 'pbd-kumpulan';

  return (
    <div className="space-y-8">
      {/* Banner Khas Ruang Guru (Berbeza daripada paparan pembelajaran murid) */}
      <header className="rounded-3xl bg-gradient-to-br from-[#E2EFFF] via-white to-[#F8DCEB]/55 border border-[#D9B8D8]/60 p-6 sm:p-8 kawaii-shadow-sm space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#62546A] text-[#FFF2F6] flex items-center justify-center shrink-0 kawaii-shadow-sm">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/75">
                Portal Rujukan Guru & Dokumentasi Pedagogi · EDUP3133
              </p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#62546A]">
                Ruang Guru
              </h1>
              <p className="text-sm sm:text-base font-semibold text-[#62546A]/85 max-w-3xl leading-relaxed">
                Bahagian khas untuk rujukan guru dan pensyarah yang menghimpunkan profil pembangun,
                DSKP, Rancangan Pengajaran Harian (RPH), strategi pengajaran, BBM, PBD serta
                rasional pembelajaran terbeza.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('halaman-utama')}
            className="kawaii-btn inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-[#D9B8D8]/70 text-[#62546A] font-bold text-sm hover:bg-[#FFF0C9] cursor-pointer self-start lg:self-center shrink-0"
          >
            <span>Lihat Paparan Murid</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Penapis Bahagian Ruang Guru */}
        <div
          role="tablist"
          aria-label="Penapis Kandungan Ruang Guru"
          className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#D9B8D8]/45"
        >
          {[
            { id: 'semua', label: 'Semua Maklumat' },
            { id: 'pembangun-dskp', label: 'Pembangun & DSKP' },
            { id: 'rph-strategi', label: 'RPH, Strategi & BBM' },
            { id: 'pbd-kumpulan', label: 'PBD, Kumpulan & Kredit' },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(tab.id as TeacherTab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#62546A] text-[#FFF2F6]'
                    : 'bg-white/90 text-[#62546A] hover:bg-[#FFF0C9]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* BAHAGIAN A: PENGENALAN PEMBANGUN & MAKLUMAT DSKP */}
      {showDeveloperDskp && (
        <div className="space-y-8">
          {/* 1. Profil Pembangun */}
          <section
            aria-labelledby="profil-pembangun-heading"
            className="kawaii-card p-6 sm:p-8 bg-white border border-[#E2EFFF] space-y-6"
          >
            <div className="flex flex-col sm:flex-row items-center gap-5 pb-6 border-b border-[#D9B8D8]/45 text-center sm:text-left">
              <div className="relative shrink-0">
                <div className="w-28 h-36 sm:w-32 sm:h-40 p-1.5 rounded-[1.65rem] bg-gradient-to-br from-[#F8DCEB] via-[#FFF0C9]/75 to-[#E2EFFF] border border-[#D9B8D8]/70 kawaii-shadow-sm">
                  <div className="w-full h-full rounded-[1.25rem] overflow-hidden border-2 border-white bg-[#FFF2F6]">
                    <img
                      src="/assets/aistudio/image_63960c63.png"
                      alt={`Foto profil ${DEVELOPER_PUBLIC_PROFILE.nama}`}
                      className="w-full h-full object-cover object-[50%_32%]"
                    />
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 -right-1.5 w-8 h-8 rounded-full bg-white border border-[#D9B8D8]/70 flex items-center justify-center kawaii-shadow-sm"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <circle cx="12" cy="7" r="3" fill="#F8DCEB" stroke="#62546A" strokeWidth="1.3" />
                    <circle cx="16.8" cy="10.5" r="3" fill="#E2EFFF" stroke="#62546A" strokeWidth="1.3" />
                    <circle cx="15" cy="16" r="3" fill="#D9B8D8" stroke="#62546A" strokeWidth="1.3" />
                    <circle cx="9" cy="16" r="3" fill="#F8DCEB" stroke="#62546A" strokeWidth="1.3" />
                    <circle cx="7.2" cy="10.5" r="3" fill="#E2EFFF" stroke="#62546A" strokeWidth="1.3" />
                    <circle cx="12" cy="12" r="2.3" fill="#FFF0C9" stroke="#62546A" strokeWidth="1.3" />
                  </svg>
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/70">
                  1. Pengenalan Pembangun
                </p>
                <h2
                  id="profil-pembangun-heading"
                  className="font-display text-2xl sm:text-3xl font-bold text-[#62546A]"
                >
                  {DEVELOPER_PUBLIC_PROFILE.nama}
                </h2>
                <p className="text-sm sm:text-base font-bold text-[#62546A]/85">
                  {DEVELOPER_PUBLIC_PROFILE.program}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#FFF2F6]/80 p-4 sm:p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#62546A] kawaii-shadow-sm">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#62546A]/70">1. Nama Penuh</p>
                  <p className="font-display text-base sm:text-lg font-bold text-[#62546A]">
                    {DEVELOPER_PUBLIC_PROFILE.nama}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#E2EFFF]/70 p-4 sm:p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#62546A] kawaii-shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#62546A]/70">2. Angka Giliran</p>
                  <p className="font-display text-base sm:text-lg font-bold text-[#62546A] tabular-nums">
                    {DEVELOPER_PUBLIC_PROFILE.angkaGiliran}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#FFF0C9]/75 p-4 sm:p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#62546A] kawaii-shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#62546A]/70">3. No. Matriks</p>
                  <p className="font-display text-base sm:text-lg font-bold text-[#62546A] tabular-nums">
                    {DEVELOPER_PUBLIC_PROFILE.noMatriks}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#D9B8D8]/35 p-4 sm:p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#62546A] kawaii-shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#62546A]/70">4. Kod / Nama Kursus</p>
                  <p className="font-display text-base sm:text-lg font-bold text-[#62546A]">
                    {DEVELOPER_PUBLIC_PROFILE.kursus}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#FFF2F6] p-4 flex items-start gap-3 text-xs sm:text-sm font-semibold text-[#62546A]/90">
              <Lock className="w-4 h-4 shrink-0 mt-0.5 text-[#62546A]" />
              <p>
                <strong>Perlindungan Privasi:</strong> Nombor kad pengenalan dan maklumat peribadi
                sensitif pembangun mahupun murid tidak dipaparkan pada laman web awam ini.
              </p>
            </div>
          </section>

          {/* 2. Maklumat Mata Pelajaran, DSKP & Objektif Pembelajaran */}
          <section
            aria-labelledby="dskp-guru-heading"
            className="kawaii-card p-6 sm:p-8 bg-white border border-[#E2EFFF] space-y-6"
          >
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/70">
                2. Maklumat Kurikulum & DSKP
              </p>
              <h2
                id="dskp-guru-heading"
                className="font-display text-2xl font-bold text-[#62546A]"
              >
                Maklumat Mata Pelajaran, SK, SP & Objektif Pembelajaran
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {[
                { label: 'Mata Pelajaran', value: CURRICULUM.subject, bg: 'bg-[#F8DCEB]/65' },
                { label: 'Tahun / Kelas', value: `Tahun ${CURRICULUM.year}`, bg: 'bg-[#E2EFFF]/75' },
                { label: 'Tema', value: CURRICULUM.theme, bg: 'bg-[#FFF0C9]/80' },
                { label: 'Tajuk', value: CURRICULUM.title, bg: 'bg-[#D9B8D8]/35' },
                { label: 'Fokus Kemahiran', value: CURRICULUM.focusSkill, bg: 'bg-[#FFF2F6]' },
              ].map((item) => (
                <div key={item.label} className={`rounded-2xl p-4 ${item.bg} space-y-1`}>
                  <p className="text-xs font-extrabold text-[#62546A]/70">{item.label}</p>
                  <p className="font-display text-base font-bold text-[#62546A] leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl p-5 bg-[#F8DCEB]/45 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#62546A] kawaii-shadow-sm">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-extrabold text-[#62546A]/75">
                    Standard Kandungan ({CURRICULUM.sk.code})
                  </p>
                  <p className="font-display text-base sm:text-lg font-semibold text-[#62546A]">
                    {CURRICULUM.sk.description}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl p-5 bg-[#E2EFFF]/65 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#62546A] kawaii-shadow-sm">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-extrabold text-[#62546A]/75">
                    Standard Pembelajaran ({CURRICULUM.sp.code})
                  </p>
                  <p className="font-display text-base sm:text-lg font-semibold text-[#62546A]">
                    {CURRICULUM.sp.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-5 bg-[#FFF0C9]/70 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#62546A] kawaii-shadow-sm">
                <Target className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-extrabold text-[#62546A]/75">
                  Objektif Pembelajaran Utama RPH
                </p>
                <p className="text-sm sm:text-base font-bold text-[#62546A] leading-relaxed">
                  {CURRICULUM.mainObjective}
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* BAHAGIAN B: RANCANGAN PENGAJARAN HARIAN (RPH), STRATEGI & BBM */}
      {showRphStrategy && (
        <div className="space-y-8">
          {/* 3. Rancangan Pengajaran Harian (RPH) */}
          <section
            aria-labelledby="rph-lengkap-heading"
            className="kawaii-card p-6 sm:p-8 bg-white border border-[#E2EFFF] space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/70">
                  3. Rancangan Pengajaran Harian (RPH)
                </p>
                <h2
                  id="rph-lengkap-heading"
                  className="font-display text-2xl font-bold text-[#62546A]"
                >
                  Aliran Pengajaran & Pembelajaran (60 Minit)
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#62546A]/80 bg-[#E2EFFF] px-3.5 py-2 rounded-xl self-start sm:self-center">
                <FileText className="w-4 h-4" />
                <span>5 Fasa Pelaksanaan PdP</span>
              </span>
            </div>

            <div className="space-y-4">
              {RPH_PHASES.map((item, idx) => (
                <div
                  key={item.phase}
                  className="rounded-2xl bg-[#FFF2F6]/60 border border-[#D9B8D8]/45 p-5 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-xs font-extrabold text-[#62546A] tabular-nums kawaii-shadow-sm">
                        {idx + 1}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#62546A]">
                        {item.phase}
                      </h3>
                      <span className="text-xs font-extrabold text-[#62546A]/75 tabular-nums">
                        · {item.duration}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onNavigate(item.targetPage)}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#62546A] bg-white px-3.5 py-1.5 rounded-xl hover:bg-[#FFF0C9] cursor-pointer self-start sm:self-center kawaii-shadow-sm"
                    >
                      <span>Buka {item.phase}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-sm font-bold text-[#62546A]">{item.focus}</p>

                  <ul className="space-y-1 text-sm font-semibold text-[#62546A]/90 list-disc pl-5">
                    {item.activities.map((act) => (
                      <li key={act}>{act}</li>
                    ))}
                  </ul>

                  <p className="text-xs font-bold text-[#62546A]/75 pt-1">
                    <strong>BBM Fasa Ini:</strong> {item.bbm}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Strategi Pengajaran & Bahan Bantu Mengajar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <section
              aria-labelledby="strategi-heading"
              className="kawaii-card p-6 sm:p-7 bg-white border border-[#E2EFFF] space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#62546A]" aria-hidden="true" />
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/70">
                    4. Pendekatan Pedagogi
                  </p>
                  <h2 id="strategi-heading" className="font-display text-xl font-bold text-[#62546A]">
                    Strategi & Pendekatan Pengajaran
                  </h2>
                </div>
              </div>

              <div className="space-y-3">
                {TEACHING_STRATEGIES.map((s) => (
                  <div key={s.title} className="rounded-2xl bg-[#E2EFFF]/55 p-4 space-y-1">
                    <h3 className="font-display text-base font-bold text-[#62546A]">{s.title}</h3>
                    <p className="text-sm font-semibold text-[#62546A]/85 leading-relaxed">
                      {s.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section
              aria-labelledby="bbm-heading"
              className="kawaii-card p-6 sm:p-7 bg-white border border-[#E2EFFF] space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-[#62546A]" aria-hidden="true" />
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/70">
                    5. Media & Sumber PdP
                  </p>
                  <h2 id="bbm-heading" className="font-display text-xl font-bold text-[#62546A]">
                    Bahan Bantu Mengajar (BBM)
                  </h2>
                </div>
              </div>

              <ul className="space-y-2.5 text-sm font-semibold text-[#62546A]/90">
                <li className="rounded-2xl bg-[#FFF2F6]/80 p-3.5">
                  <strong>Video Set Induksi:</strong> Klip lagu & situasi “Jom Bersihkan Diri”
                  (YouTube rasmi guru) serta video interaktif 4 titik semakan.
                </li>
                <li className="rounded-2xl bg-[#FFF0C9]/70 p-3.5">
                  <strong>Poster Digital Rangsangan:</strong> Poster bergambar “Kebersihan adalah
                  Keutamaan” (4 amalan utama kebersihan diri).
                </li>
                <li className="rounded-2xl bg-[#F8DCEB]/55 p-3.5">
                  <strong>Kad Aktiviti Terbeza & Kosa Kata:</strong> Kad interaktif Kumpulan Betik,
                  Strawberi, Anggur dan panduan membina ayat pendapat.
                </li>
                <li className="rounded-2xl bg-[#E2EFFF]/65 p-3.5">
                  <strong>Alat Pentaksiran Digital:</strong> Kuiz 10 soalan dalam laman web,
                  permainan pengayaan Wordwall dan latihan pemulihan Google Sites.
                </li>
              </ul>
            </section>
          </div>
        </div>
      )}

      {/* BAHAGIAN C: PEMBAHAGIAN KUMPULAN, PBD & KREDIT SUMBER */}
      {showPbdGroups && (
        <div className="space-y-8">
          {/* 6. Pembahagian Kumpulan & Rasional Aktiviti Berbeza */}
          <section
            aria-labelledby="kumpulan-rasional-heading"
            className="kawaii-card p-6 sm:p-8 bg-white border border-[#E2EFFF] space-y-5"
          >
            <div className="flex items-center gap-2.5">
              <Users className="w-6 h-6 text-[#62546A]" aria-hidden="true" />
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/70">
                  6. Pembelajaran Terbeza (Langkah 2)
                </p>
                <h2
                  id="kumpulan-rasional-heading"
                  className="font-display text-2xl font-bold text-[#62546A]"
                >
                  Pembahagian Kumpulan Murid & Rasional Aktiviti Berbeza
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {GROUP_RATIONALE.map((g) => (
                <div key={g.group} className={`rounded-3xl p-5 space-y-3 ${g.bgClass}`}>
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-2xl bg-white kawaii-shadow-sm">
                      <FruitMascot group={g.fruit} className="w-10 h-10" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#62546A] leading-snug">
                      {g.group}
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-white/90 p-3.5 space-y-1">
                    <p className="text-xs font-extrabold text-[#62546A]/70">Tugasan Murid</p>
                    <p className="text-sm font-bold text-[#62546A]">{g.task}</p>
                  </div>

                  <div className="rounded-2xl bg-white/80 p-3.5 space-y-1">
                    <p className="text-xs font-extrabold text-[#62546A]/70">Rasional Pedagogi</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#62546A]/90 leading-relaxed">
                      {g.rationale}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. PBD & Kaedah Pentaksiran */}
          <section
            aria-labelledby="pbd-heading"
            className="kawaii-card p-6 sm:p-8 bg-white border border-[#E2EFFF] space-y-5"
          >
            <div className="flex items-center gap-2.5">
              <ClipboardCheck className="w-6 h-6 text-[#62546A]" aria-hidden="true" />
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/70">
                  7. Pentaksiran Bilik Darjah (PBD)
                </p>
                <h2 id="pbd-heading" className="font-display text-2xl font-bold text-[#62546A]">
                  PBD & Kaedah Pentaksiran
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-[#FFF2F6]/80 p-4 space-y-1.5">
                <h3 className="font-display text-base font-bold text-[#62546A]">
                  Pemerhatian & Lisan
                </h3>
                <p className="text-sm font-semibold text-[#62546A]/85 leading-relaxed">
                  Ditaksir semasa Set Induksi melalui aktiviti soal jawab video dan perkongsian
                  pengalaman amalan kebersihan diri murid.
                </p>
              </div>
              <div className="rounded-2xl bg-[#FFF0C9]/70 p-4 space-y-1.5">
                <h3 className="font-display text-base font-bold text-[#62546A]">
                  Penulisan (SP 3.2.1)
                </h3>
                <p className="text-sm font-semibold text-[#62546A]/85 leading-relaxed">
                  Ditaksir melalui semakan ayat individu pada Langkah 1 dan hasil penulisan kumpulan
                  Betik, Strawberi serta Anggur pada Langkah 2.
                </p>
              </div>
              <div className="rounded-2xl bg-[#E2EFFF]/70 p-4 space-y-1.5">
                <h3 className="font-display text-base font-bold text-[#62546A]">
                  Pentaksiran Digital Kendiri
                </h3>
                <p className="text-sm font-semibold text-[#62546A]/85 leading-relaxed">
                  Skor automatik daripada 10 soalan kuiz Langkah 3, latihan Wordwall/Google Sites serta
                  refleksi kendiri murid di halaman Penutup.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#E2EFFF]/45 p-5 space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/75">
                Panduan Tahap Penguasaan (TP) PBD — Kemahiran Menulis (SP 3.2.1)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {PBD_LEVELS.map((lvl) => (
                  <div key={lvl.tp} className="rounded-2xl bg-white p-4 space-y-1">
                    <p className="font-display text-base font-bold text-[#62546A]">{lvl.tp}</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#62546A]/85 leading-relaxed">
                      {lvl.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 8. Kredit & Sumber Bahan */}
          <section
            aria-labelledby="kredit-heading"
            className="kawaii-card p-6 sm:p-8 bg-[#FFF2F6]/75 border border-[#D9B8D8]/50 space-y-5"
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-[#62546A]" aria-hidden="true" />
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/70">
                  8. Kredit, Sumber Bahan & Etika Digital
                </p>
                <h2 id="kredit-heading" className="font-display text-2xl font-bold text-[#62546A]">
                  Penghargaan Sumber Bahan Pembelajaran
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-white p-5 space-y-2.5">
                <h3 className="font-display text-base font-bold text-[#62546A]">
                  Sumber Bahan & Pautan Rasmi PdP
                </h3>
                <ul className="space-y-2 text-[#62546A]/90 font-semibold list-disc pl-5">
                  <li>
                    Video Set Induksi “Jom Bersihkan Diri”:{' '}
                    <a
                      href="https://youtu.be/_tXdekxLEGQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 underline hover:text-[#52445A]"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>
                    Poster rangsangan “Kebersihan adalah Keutamaan” disediakan khas oleh pembangun
                    untuk Langkah 1 dan rujukan Langkah 2.
                  </li>
                  <li>
                    Aktiviti Pengayaan:{' '}
                    <a
                      href="https://wordwall.net/resource/110936232"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 underline hover:text-[#52445A]"
                    >
                      <span>Wordwall</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>
                    Aktiviti Pemulihan:{' '}
                    <a
                      href="https://sites.google.com/moe-dl.edu.my/kuiz-pemulihan-bahasa-melayu-k/full-page-embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 underline hover:text-[#52445A]"
                    >
                      <span>Google Sites (Kuiz Kebersihan Diri)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-5 space-y-2.5">
                <h3 className="font-display text-base font-bold text-[#62546A]">
                  Privasi & Keselamatan Pengguna
                </h3>
                <ul className="space-y-2 text-[#62546A]/90 font-semibold list-disc pl-5">
                  <li>
                    Semua ilustrasi kawaii ialah karya generik pendidikan tanpa sebarang watak
                    berlesen atau hak cipta pihak ketiga.
                  </li>
                  <li>
                    Tiada maklumat peribadi sensitif (seperti nombor kad pengenalan atau angka
                    giliran) dipaparkan kepada pengunjung awam.
                  </li>
                  <li>
                    Semua kemajuan latihan murid, skor kuiz dan refleksi diproses secara tempatan
                    pada pelayar peranti sahaja.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}

      <PageFooterNav currentPage="ruang-guru" onNavigate={onNavigate} />
    </div>
  );
};
