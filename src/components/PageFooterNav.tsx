import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PAGES } from '../data/curriculum';
import { PageId } from '../types/learning';

interface PageFooterNavProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const PageFooterNav: React.FC<PageFooterNavProps> = ({
  currentPage,
  onNavigate,
}) => {
  const currentIndex = PAGES.findIndex((p) => p.id === currentPage);
  const prevPage = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null;

  return (
    <div className="no-print mt-12 pt-8 border-t border-[#D9B8D8]/45 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
      <div className="flex-1">
        {prevPage ? (
          <button
            type="button"
            onClick={() => onNavigate(prevPage.id)}
            className="kawaii-btn w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-3 px-5 py-3 rounded-2xl bg-white border border-[#D9B8D8]/60 text-[#62546A] font-bold text-sm hover:bg-[#E2EFFF] cursor-pointer kawaii-shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span className="whitespace-nowrap">Kembali: {prevPage.title}</span>
          </button>
        ) : (
          <div />
        )}
      </div>

      <p className="text-center text-xs font-extrabold text-[#62546A] tabular-nums whitespace-nowrap">
        Bahagian {currentIndex + 1} daripada {PAGES.length}
      </p>

      <div className="flex-1 flex justify-end">
        {nextPage ? (
          <button
            type="button"
            onClick={() => onNavigate(nextPage.id)}
            className="kawaii-btn w-full sm:w-auto inline-flex items-center justify-center sm:justify-end gap-3 px-6 py-3 rounded-2xl bg-[#62546A] text-[#FFF2F6] font-bold text-sm hover:bg-[#52445A] cursor-pointer kawaii-shadow-sm"
          >
            <span className="whitespace-nowrap">Seterusnya: {nextPage.title}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onNavigate('halaman-utama')}
            className="kawaii-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-[#F8DCEB] text-[#62546A] font-bold text-sm hover:bg-[#FFF0C9] cursor-pointer kawaii-shadow-sm"
          >
            <span className="whitespace-nowrap">Kembali ke Halaman Utama</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        )}
      </div>
    </div>
  );
};
