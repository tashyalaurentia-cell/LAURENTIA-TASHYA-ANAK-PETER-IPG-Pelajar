import React from 'react';
import {
  ArrowRight,
  BookOpen,
  Compass,
  GraduationCap,
  Layers,
  PenLine,
  Sparkles,
  Target,
} from 'lucide-react';
import { PageId } from '../types/learning';
import modernHeroStudentsImg from '../assets/images/modern_hero_students_1795532486084.jpg';
import modernStudentsWavingImg from '../assets/images/modern_students_waving_1795540022341.jpg';
import modernTeacherGuidanceImg from '../assets/images/modern_teacher_guidance_1795532486597.jpg';
import modernSoapBubblesImg from '../assets/images/modern_3d_soap_bubbles_1795532486219.jpg';
import modernDentalTowelImg from '../assets/images/modern_3d_dental_towel_1795532487329.jpg';
import { ResilientImage } from '../components/KawaiiArtwork';

interface HalamanUtamaPageProps {
  onNavigate: (page: PageId) => void;
  visitedPages?: PageId[];
}

export const HalamanUtamaPage: React.FC<HalamanUtamaPageProps> = ({ onNavigate }) => {

  const curriculumCards = [
    {
      label: 'Mata Pelajaran',
      value: 'Bahasa Melayu',
      bg: 'bg-[#F8DCEB]/75',
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      label: 'Tahun',
      value: 'Tahun 5',
      bg: 'bg-[#E2EFFF]/85',
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      label: 'Tema',
      value: 'Kesihatan dan Kebersihan',
      bg: 'bg-[#FFF0C9]/85',
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      label: 'Tajuk',
      value: 'Kebersihan Tanggungjawab Kita',
      bg: 'bg-[#D9B8D8]/45',
      icon: <Layers className="w-5 h-5" />,
    },
    {
      label: 'Fokus Kemahiran',
      value: 'Menulis',
      bg: 'bg-white',
      icon: <PenLine className="w-5 h-5" />,
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-14 pb-4">
      {/* SECTION 1 — HERO / SELAMAT DATANG */}
      <section
        aria-label="Bahagian Pembukaan Selamat Datang"
        className="relative pt-2 sm:pt-4 lg:pt-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Kolum Kiri: Maklumat Kecil, Tajuk Besar, Penerangan & 2 Butang */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <p className="text-sm sm:text-base font-extrabold tracking-wide text-[#62546A]/80 hero-enter">
              Bahasa Melayu Tahun 5 <span aria-hidden="true" className="mx-1.5 text-[#D9B8D8]">·</span> Tema Kesihatan dan Kebersihan
            </p>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.06] text-[#62546A] text-balance hero-enter-delay-1">
              Jom Belajar{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Kebersihan!</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-1.5 sm:bottom-2 h-3.5 sm:h-4 rounded-full bg-[#FFF0C9] -z-0"
                />
              </span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed font-bold text-[#62546A] max-w-2xl hero-enter-delay-2">
              Kenali amalan kebersihan diri, bina ayat dan kuasai Bahasa Melayu melalui aktiviti
              pembelajaran yang menarik dan menyeronokkan!
            </p>

            <div className="pt-2 hero-enter-delay-3">
              <button
                type="button"
                onClick={() => onNavigate('set-induksi')}
                className="kawaii-btn inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#62546A] hover:bg-[#52445A] text-[#FFF2F6] font-display font-bold text-base sm:text-lg ring-4 ring-[#F8DCEB] cursor-pointer kawaii-shadow-sm whitespace-nowrap shrink-0"
              >
                <span>Mulakan Pembelajaran</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Kolum Kanan: Ilustrasi Editorial Moden Murid Tahun 5 */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end hero-enter-delay-2">
            <div className="w-full max-w-md">
              <ResilientImage
                src={modernHeroStudentsImg}
                alt="Ilustrasi moden dua orang murid Tahun 5 menjaga kebersihan diri di sudut pembelajaran yang bersih dan ceria"
                fallbackTitle="Kebersihan Tanggungjawab Kita"
                className="w-full aspect-[4/3] object-cover rounded-[1.75rem] border-4 border-white kawaii-shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PENGENALAN PEMBELAJARAN (Terbuka, bukan dalam kotak besar) */}
      <section
        aria-labelledby="pengenalan-pembelajaran-heading"
        className="relative pt-8 border-t border-[#D9B8D8]/45"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Ilustrasi di Sebelah Kiri */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="w-full max-w-sm">
              <ResilientImage
                src={modernStudentsWavingImg}
                alt="Ilustrasi moden dua orang murid Tahun 5 tersenyum ceria sambil melambai tangan menyambut pengunjung"
                fallbackTitle="Selamat Datang ke Dunia Kebersihan"
                className="w-full aspect-[4/3] object-cover rounded-[1.6rem] border-4 border-white kawaii-shadow-sm"
              />
            </div>
          </div>

          {/* Teks Terbuka di Sebelah Kanan */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left space-y-4">
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#62546A]/75">
              Pengenalan Pembelajaran
            </p>
            <h2
              id="pengenalan-pembelajaran-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#62546A] leading-tight text-balance"
            >
              Selamat Datang ke Dunia Kebersihan!
            </h2>
            <p className="text-base sm:text-lg leading-relaxed font-bold text-[#62546A] max-w-2xl">
              Dalam pembelajaran ini, murid akan mengenali amalan kebersihan diri, memahami
              kepentingannya dan belajar membina ayat berdasarkan bahan yang diberikan melalui
              aktiviti yang menarik dan menyeronokkan.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PESANAN UNTUK MURID */}
      <section
        aria-labelledby="pesanan-murid-heading"
        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#F8DCEB]/65 via-white to-[#E2EFFF]/75 border border-[#F8DCEB] p-6 sm:p-10 kawaii-shadow-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h2
              id="pesanan-murid-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#62546A]"
            >
              Hai, Murid-murid! 🌸
            </h2>

            <p className="text-base sm:text-lg leading-relaxed font-semibold text-[#62546A]/90 max-w-2xl">
              Hai, murid-murid! Hari ini kita akan belajar tentang kebersihan diri. Kita akan
              melihat, berfikir, berkongsi idea dan membina ayat tentang amalan kebersihan yang
              penting dalam kehidupan seharian. Bersedia untuk belajar? Jom kita mulakan
              bersama-sama!
            </p>
          </div>

          {/* Ilustrasi Editorial Bimbingan Guru & Murid */}
          <div className="lg:col-span-4 flex flex-col items-center gap-3">
            <div className="w-full max-w-xs sm:max-w-sm">
              <ResilientImage
                src={modernTeacherGuidanceImg}
                alt="Ilustrasi editorial guru membimbing murid Tahun 5 membina ayat amalan kebersihan diri"
                fallbackTitle="Bimbingan Guru & Murid"
                className="w-full aspect-[4/3] object-cover rounded-[1.5rem] border-4 border-white kawaii-shadow-sm"
              />
            </div>
            <p className="text-xs font-extrabold text-[#62546A]/85 text-center">
              Belajar memerhati, berfikir & membina ayat bersama cikgu!
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — KENALI PEMBELAJARAN KITA */}
      <section aria-labelledby="kenali-pembelajaran-heading" className="space-y-6">
        <div className="text-left space-y-1.5">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#62546A]/80">
            Maklumat Kurikulum
          </p>
          <h2
            id="kenali-pembelajaran-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-[#62546A]"
          >
            Kenali Pembelajaran Kita
          </h2>
        </div>

        {/* 5 Kad Kecil Maklumat Asas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {curriculumCards.map((item) => (
            <div
              key={item.label}
              className={`kawaii-card p-5 ${item.bg} border border-[#F8DCEB]/80 flex flex-col justify-between gap-3`}
            >
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#62546A] kawaii-shadow-sm">
                {item.icon}
              </div>
              <div className="space-y-1">
                <p className="text-xs font-extrabold text-[#62546A]/70">{item.label}</p>
                <p className="font-display text-lg font-bold text-[#62546A] leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Kad Standard Kandungan & Standard Pembelajaran */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="kawaii-card p-6 sm:p-7 bg-[#F8DCEB]/55 border border-[#F8DCEB] flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 text-[#62546A] kawaii-shadow-sm">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/75">
                Standard Kandungan
              </p>
              <p className="font-display text-lg sm:text-xl font-bold text-[#62546A] leading-snug">
                <span className="inline-block px-2.5 py-0.5 rounded-lg bg-white mr-2 text-base tabular-nums kawaii-shadow-sm">
                  3.2
                </span>
                Menulis perkataan, frasa dan ayat yang bermakna.
              </p>
            </div>
          </div>

          <div className="kawaii-card p-6 sm:p-7 bg-[#E2EFFF]/70 border border-[#D9B8D8]/45 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 text-[#62546A] kawaii-shadow-sm">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#62546A]/75">
                Standard Pembelajaran
              </p>
              <p className="font-display text-lg sm:text-xl font-bold text-[#62546A] leading-snug">
                <span className="inline-block px-2.5 py-0.5 rounded-lg bg-white mr-2 text-base tabular-nums kawaii-shadow-sm">
                  3.2.1
                </span>
                Membina dan menulis ayat untuk menyatakan pendapat daripada sesuatu bahan
                multimedia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — OBJEKTIF PEMBELAJARAN */}
      <section aria-labelledby="objektif-pembelajaran-heading">
        <div className="kawaii-card p-6 sm:p-9 bg-gradient-to-br from-[#FFF0C9]/90 via-[#FFF2F6] to-[#D9B8D8]/35 border border-[#F8DCEB] space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 text-[#62546A] kawaii-shadow-sm">
              <Target className="w-6 h-6" aria-hidden="true" />
            </div>
            <h2
              id="objektif-pembelajaran-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-[#62546A]"
            >
              Apa yang Akan Kita Pelajari? 🎯
            </h2>
          </div>

          <p className="text-base sm:text-xl leading-relaxed font-bold text-[#62546A]">
            Pada akhir pembelajaran, murid dapat membina dan menulis empat ayat tentang amalan
            kebersihan diri untuk menyatakan pendapat berdasarkan poster ‘Kebersihan adalah
            Keutamaan’ dengan jelas dan tepat.
          </p>
        </div>
      </section>

      {/* SECTION 6 — CTA / AJAKAN MEMULAKAN PEMBELAJARAN */}
      <section
        aria-labelledby="cta-mula-heading"
        className="kawaii-card p-8 sm:p-12 bg-gradient-to-br from-[#F8DCEB]/85 via-[#FFF2F6] to-[#E2EFFF]/85 border border-[#D9B8D8]/50 text-center space-y-6"
      >
        <div className="flex items-center justify-center gap-4" aria-hidden="true">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white kawaii-shadow-sm bg-white">
            <ResilientImage
              src={modernSoapBubblesImg}
              alt=""
              fallbackTitle="Sabun & Buih"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white kawaii-shadow-sm bg-white">
            <ResilientImage
              src={modernDentalTowelImg}
              alt=""
              fallbackTitle="Berus Gigi & Tuala"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-3 max-w-2xl mx-auto">
          <h2
            id="cta-mula-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#62546A] text-balance"
          >
            SUDAH BERSEDIA UNTUK BELAJAR?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-semibold text-[#62546A]/90">
            Jom terokai setiap aktiviti, selesaikan tugasan dan buktikan bahawa kamu juga boleh
            menjadi jaguh kebersihan! Bersama-sama kita belajar, bermain dan membina ayat dengan
            yakin.
          </p>
        </div>

        <div className="pt-1">
          <button
            type="button"
            onClick={() => onNavigate('set-induksi')}
            className="kawaii-btn inline-flex items-center gap-3 px-9 py-4.5 rounded-2xl bg-[#62546A] hover:bg-[#52445A] text-[#FFF2F6] font-display font-bold text-lg sm:text-xl tracking-wide ring-4 ring-white/80 cursor-pointer kawaii-shadow-sm whitespace-nowrap"
          >
            <span>JOM MULA!</span>
            <ArrowRight className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
};
