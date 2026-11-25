import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { CURRICULUM, PAGES } from './data/curriculum';
import { HalamanUtamaPage } from './pages/HalamanUtamaPage';
import { Langkah1Page } from './pages/Langkah1Page';
import { Langkah2Page } from './pages/Langkah2Page';
import { Langkah3Page } from './pages/Langkah3Page';
import { PenutupPage } from './pages/PenutupPage';
import { RuangGuruPage } from './pages/RuangGuruPage';
import { SetInduksiPage } from './pages/SetInduksiPage';
import { PageId, StudentProgress } from './types/learning';
import opdHygieneBg from './assets/images/opd_hygiene_background_clean_1795578109982.jpg';

const STORAGE_KEY = 'bm-tahun5-kebersihan-diri-v3';
const VALID_PAGE_IDS = new Set<PageId>(PAGES.map((p) => p.id));

const INITIAL_PROGRESS: StudentProgress = {
  visitedPages: ['halaman-utama'],
  activeGroup: 'betik',
  betikSentences: ['', '', '', ''],
  strawberiMatches: {},
  strawberiSentences: ['', '', ''],
  anggurBlanks: ['', '', '', '', ''],
  quizAnswers: {},
  quizSubmitted: false,
  reflection: {
    studentName: '',
    className: '',
    mood: '',
    amalanHarian: '',
    ayatPendapat: '',
    perasaan: '',
    savedAt: null,
  },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('halaman-utama');
  const [progress, setProgress] = useState<StudentProgress>(() => {
    try {
      const saved =
        localStorage.getItem(STORAGE_KEY) ??
        localStorage.getItem('bm-tahun5-kebersihan-diri-v2') ??
        localStorage.getItem('bm-tahun5-kebersihan-diri-v1');
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<StudentProgress>;
        const cleanVisited = Array.isArray(parsed.visitedPages)
          ? parsed.visitedPages.filter((id): id is PageId => VALID_PAGE_IDS.has(id))
          : [];
        return {
          ...INITIAL_PROGRESS,
          ...parsed,
          visitedPages: cleanVisited.length > 0 ? cleanVisited : ['halaman-utama'],
        };
      }
    } catch {
      // Ignore storage errors and fall back to initial state
    }
    return INITIAL_PROGRESS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage quota errors
    }
  }, [progress]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    setProgress((prev) => ({
      ...prev,
      visitedPages: prev.visitedPages.includes(page)
        ? prev.visitedPages
        : [...prev.visitedPages, page],
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative isolate min-h-screen flex flex-col text-[#62546A]">
      <div
        aria-hidden="true"
        className="no-print pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#FDF8EC]"
      >
        <img
          src={opdHygieneBg}
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-[#FDF8EC]/40 backdrop-blur-[1.5px]" />
      </div>

      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
        <div className="rounded-[2rem] bg-[#FDF8EC]/82 backdrop-blur-md border border-white/80 shadow-[0_14px_40px_-14px_rgba(98,84,106,0.12)] px-5 sm:px-8 lg:px-10 py-7 sm:py-10">
          {currentPage === 'halaman-utama' && (
            <HalamanUtamaPage
              onNavigate={handleNavigate}
              visitedPages={progress.visitedPages}
            />
          )}
        {currentPage === 'set-induksi' && (
          <SetInduksiPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'langkah-1' && (
          <Langkah1Page onNavigate={handleNavigate} />
        )}
        {currentPage === 'langkah-2' && (
          <Langkah2Page
            onNavigate={handleNavigate}
            progress={progress}
            onUpdateProgress={setProgress}
          />
        )}
        {currentPage === 'langkah-3' && (
          <Langkah3Page onNavigate={handleNavigate} />
        )}
        {currentPage === 'penutup' && (
          <PenutupPage onNavigate={handleNavigate} />
        )}
          {currentPage === 'ruang-guru' && (
            <RuangGuruPage onNavigate={handleNavigate} />
          )}
        </div>
      </main>

      <footer className="no-print border-t border-[#D9B8D8]/45 bg-white/88 backdrop-blur-md py-5 px-4 text-center">
        <p className="text-xs sm:text-sm font-bold text-[#62546A]">
          {CURRICULUM.title} · {CURRICULUM.subject} Tahun {CURRICULUM.year} · Tema{' '}
          {CURRICULUM.theme}
        </p>
      </footer>
    </div>
  );
}
