import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PAGES } from '../data/curriculum';
import { PageId } from '../types/learning';
import { SoapMascot } from './KawaiiArtwork';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentMeta = PAGES.find((p) => p.id === currentPage) ?? PAGES[0];

  const handleSelect = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileOpen(false);
  };

  return (
    <header className="no-print sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#D9B8D8]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Penjenamaan rasmi laman web di sebelah kiri */}
          <button
            type="button"
            onClick={() => handleSelect('halaman-utama')}
            className="flex items-center gap-2 text-left whitespace-nowrap shrink-0 cursor-pointer group"
          >
            <SoapMascot className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform duration-200 group-hover:scale-105" />
            <span className="font-display text-sm sm:text-base xl:text-lg font-bold text-[#62546A] tracking-tight flex items-center gap-1.5">
              <span>Kebersihan Tanggungjawab Kita</span>
              <span
                aria-hidden="true"
                className="hidden sm:inline-flex items-center gap-0.5 text-[#8FB8E8]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F3A6C8]" />
                <span className="w-2 h-2 rounded-full bg-[#9CC4FF]" />
              </span>
            </span>
          </button>

          {/* Bar menu mendatar 7 bahagian */}
          <nav
            aria-label="Navigasi Utama Tujuh Bahagian"
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 overflow-x-auto no-scrollbar"
          >
            {PAGES.map((page) => {
              const isActive = page.id === currentPage;
              const isTeacherSpace = page.id === 'ruang-guru';
              return (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => handleSelect(page.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-2.5 xl:px-3.5 py-2.5 rounded-t-xl text-xs xl:text-sm font-bold whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-150 ${
                    isTeacherSpace
                      ? isActive
                        ? 'bg-[#E2EFFF] text-[#62546A]'
                        : 'text-[#62546A]/85 bg-[#E2EFFF]/40 hover:bg-[#E2EFFF]/80 hover:text-[#62546A]'
                      : isActive
                      ? 'bg-[#F8DCEB]/85 text-[#62546A]'
                      : 'text-[#62546A]/80 hover:bg-[#F8DCEB]/45 hover:text-[#62546A]'
                  }`}
                >
                  <span>{page.title}</span>
                  {/* Garisan penanda aktif */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-2.5 right-2.5 bottom-0 h-[3px] rounded-full transition-opacity duration-150 ${
                      isActive ? 'bg-[#62546A] opacity-100' : 'opacity-0'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Paparan ringkas semasa & butang buka/tutup menu pada tablet dan telefon */}
          <div className="flex items-center gap-2.5 lg:hidden shrink-0">
            <span className="text-xs font-extrabold text-[#62546A]/85 whitespace-nowrap">
              {currentMeta.title}
            </span>
            <span className="text-xs font-bold text-[#62546A]/70 tabular-nums whitespace-nowrap">
              ({currentMeta.step}/{PAGES.length})
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[#F8DCEB] text-[#62546A] hover:bg-[#E2EFFF] transition-colors cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Jalur kemajuan nipis */}
      <div className="h-1 w-full bg-[#F8DCEB]/65">
        <div
          className="h-full bg-[#D9B8D8] transition-all duration-300"
          style={{ width: `${(currentMeta.step / PAGES.length) * 100}%` }}
        />
      </div>

      {/* Menu boleh buka dan tutup untuk tablet & telefon pintar */}
      {mobileOpen && (
        <nav
          aria-label="Menu Navigasi Mudah Alih"
          className="lg:hidden bg-white border-b border-[#D9B8D8]/55 px-4 py-3 shadow-md"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl mx-auto">
            {PAGES.map((page) => {
              const isActive = page.id === currentPage;
              return (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => handleSelect(page.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between gap-3 px-4 py-3 rounded-2xl text-left text-sm font-bold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#F8DCEB] text-[#62546A] border-b-2 border-[#62546A]'
                      : 'bg-[#FFF2F6]/65 text-[#62546A] hover:bg-[#E2EFFF]'
                  }`}
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-xs font-extrabold text-[#62546A] shrink-0 tabular-nums">
                      {page.step}
                    </span>
                    <span className="truncate">{page.title}</span>
                  </span>
                  {isActive && (
                    <span className="text-[11px] font-extrabold text-[#62546A]/80 shrink-0">
                      Aktif
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};
