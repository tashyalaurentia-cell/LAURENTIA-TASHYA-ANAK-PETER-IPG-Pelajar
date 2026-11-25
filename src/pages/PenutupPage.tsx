import React, { useState } from 'react';
import {
  Award,
  BookCheck,
  CheckCircle2,
  Info,
  RotateCcw,
  Send,
  Sparkles,
  Star,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageId } from '../types/learning';
import modernSoapBubblesImg from '../assets/images/modern_3d_soap_bubbles_1795532486219.jpg';
import modernDentalTowelImg from '../assets/images/modern_3d_dental_towel_1795532487329.jpg';
import { ResilientImage } from '../components/KawaiiArtwork';
import { PageFooterNav } from '../components/PageFooterNav';
import { TeacherAudioButton } from '../components/TeacherAudioButton';

interface PenutupPageProps {
  onNavigate: (page: PageId) => void;
}

const RUMUSAN_ITEMS = [
  'Mengetahui kepentingan menjaga kebersihan diri.',
  'Mengenal pasti amalan kebersihan diri dalam kehidupan seharian.',
  'Membina dan menulis ayat berdasarkan bahan multimedia.',
  'Menggunakan perkataan yang sesuai untuk menyatakan pendapat.',
] as const;

export const PenutupPage: React.FC<PenutupPageProps> = ({ onNavigate }) => {
  const [perkaraBaharu, setPerkaraBaharu] = useState('');
  const [amalanHarian, setAmalanHarian] = useState('');
  const [ayatAmalan, setAyatAmalan] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [pledged, setPledged] = useState(false);

  const handleSubmitReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!perkaraBaharu.trim() || !amalanHarian.trim() || !ayatAmalan.trim()) {
      setValidationError(true);
      setSubmitted(false);
      return;
    }
    setValidationError(false);
    setSubmitted(true);
  };

  const handleResetReflection = () => {
    setPerkaraBaharu('');
    setAmalanHarian('');
    setAyatAmalan('');
    setSubmitted(false);
    setValidationError(false);
  };

  return (
    <div className="space-y-8">
      {/* Header Bahagian 6 */}
      <header className="space-y-2.5">
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#62546A]/80">
          Bahagian 6 · Penutup Pembelajaran
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#62546A] text-balance">
          Penutup: Rumusan & Refleksi Pembelajaran
        </h1>
        <div className="flex items-start gap-2.5 max-w-2xl">
          <p className="text-base font-bold text-[#62546A] leading-relaxed">
            Syabas! Imbas kembali rumusan pembelajaran hari ini, kongsikan refleksi ringkas kamu dan
            lafazkan slogan kebersihan bersama-sama.
          </p>
          <TeacherAudioButton clipId="penutup-arahan" tone="pink" className="mt-0.5" />
        </div>
      </header>

      {/* 1. Rumusan Pembelajaran */}
      <section aria-labelledby="rumusan-heading" className="kawaii-card p-6 sm:p-8 bg-white space-y-6">
        <div className="flex items-center gap-3.5 pb-4 border-b border-[#D9B8D8]/45">
          <div className="w-12 h-12 rounded-2xl bg-[#F8DCEB] flex items-center justify-center shrink-0 text-[#62546A]">
            <BookCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-extrabold text-[#62546A]/75">
              Bahagian 1 · Ringkasan Isi Pelajaran
            </p>
            <h2 id="rumusan-heading" className="font-display text-2xl font-bold text-[#62546A]">
              Rumusan Pembelajaran
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {RUMUSAN_ITEMS.map((item, idx) => {
            const cardTints = [
              'bg-[#F8DCEB]/60',
              'bg-[#E2EFFF]/75',
              'bg-[#D9B8D8]/40',
              'bg-[#FFF0C9]/80',
            ];
            return (
              <div
                key={item}
                className={`rounded-2xl p-5 flex items-start gap-3.5 kawaii-shadow-sm ${cardTints[idx]}`}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-sm font-extrabold text-[#62546A] shrink-0 tabular-nums">
                  {idx + 1}
                </span>
                <p className="text-sm sm:text-base font-bold text-[#62546A] leading-relaxed pt-0.5">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Refleksi Ringkas Murid */}
      <section aria-labelledby="refleksi-heading" className="kawaii-card p-6 sm:p-8 bg-white space-y-6">
        <div className="flex items-center gap-3.5 pb-4 border-b border-[#D9B8D8]/45">
          <div className="w-12 h-12 rounded-2xl bg-[#E2EFFF] flex items-center justify-center shrink-0 text-[#62546A]">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-extrabold text-[#62546A]/75">
              Bahagian 2 · Perkongsian Kendiri
            </p>
            <h2 id="refleksi-heading" className="font-display text-2xl font-bold text-[#62546A]">
              Refleksi Ringkas Murid
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmitReflection} className="space-y-5">
          <div className="rounded-2xl bg-[#FFF2F6]/70 p-4 sm:p-5 space-y-2">
            <label htmlFor="ref-q1" className="block font-display text-base sm:text-lg font-bold text-[#62546A]">
              1. Apakah perkara baharu yang kamu pelajari hari ini?
            </label>
            <textarea
              id="ref-q1"
              rows={2}
              value={perkaraBaharu}
              onChange={(e) => {
                setPerkaraBaharu(e.target.value);
                setValidationError(false);
                setSubmitted(false);
              }}
              placeholder="Taipkan jawapan kamu di sini..."
              className="w-full rounded-2xl bg-white p-3.5 text-sm sm:text-base text-[#62546A] placeholder:text-[#62546A]/45 border border-[#D9B8D8]/65 focus:border-[#62546A] focus:outline-none"
            />
          </div>

          <div className="rounded-2xl bg-[#E2EFFF]/45 p-4 sm:p-5 space-y-2">
            <label htmlFor="ref-q2" className="block font-display text-base sm:text-lg font-bold text-[#62546A]">
              2. Apakah amalan kebersihan diri yang akan kamu lakukan setiap hari?
            </label>
            <textarea
              id="ref-q2"
              rows={2}
              value={amalanHarian}
              onChange={(e) => {
                setAmalanHarian(e.target.value);
                setValidationError(false);
                setSubmitted(false);
              }}
              placeholder="Taipkan jawapan kamu di sini..."
              className="w-full rounded-2xl bg-white p-3.5 text-sm sm:text-base text-[#62546A] placeholder:text-[#62546A]/45 border border-[#D9B8D8]/65 focus:border-[#62546A] focus:outline-none"
            />
          </div>

          <div className="rounded-2xl bg-[#FFF0C9]/55 p-4 sm:p-5 space-y-2">
            <label htmlFor="ref-q3" className="block font-display text-base sm:text-lg font-bold text-[#62546A]">
              3. Bina satu ayat tentang amalan kebersihan diri.
            </label>
            <textarea
              id="ref-q3"
              rows={2}
              value={ayatAmalan}
              onChange={(e) => {
                setAyatAmalan(e.target.value);
                setValidationError(false);
                setSubmitted(false);
              }}
              className="w-full rounded-2xl bg-white p-3.5 text-sm sm:text-base text-[#62546A] border border-[#D9B8D8]/65 focus:border-[#62546A] focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="submit"
              className="kawaii-btn inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#62546A] text-[#FFF2F6] font-bold text-sm sm:text-base hover:bg-[#52445A] cursor-pointer kawaii-shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Hantar Refleksi</span>
            </button>

            <button
              type="button"
              onClick={handleResetReflection}
              className="kawaii-btn inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#FFF2F6] text-[#62546A] font-bold text-sm hover:bg-[#F8DCEB] cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Padam & Tulis Semula</span>
            </button>
          </div>

          {validationError && (
            <div
              className="rounded-2xl bg-[#FFF0C9] p-4 flex items-start gap-3 text-sm font-semibold text-[#62546A]"
              role="status"
            >
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <p>
                Sila lengkapkan ketiga-tiga soalan refleksi di atas terlebih dahulu sebelum menekan
                butang “Hantar Refleksi”.
              </p>
            </div>
          )}

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl bg-[#E3F5E9] p-5 flex items-start gap-3 text-[#1F5E34]"
              role="status"
            >
              <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-display text-lg font-bold">
                  Syabas dan terima kasih atas refleksi kamu!
                </p>
                <p className="text-sm font-semibold leading-relaxed">
                  Jawapan kamu menunjukkan usaha yang baik dalam memahami amalan kebersihan diri dan
                  membina ayat dengan bermakna. Jangan lupa melafazkan slogan kebersihan di bawah!
                </p>
              </div>
            </motion.div>
          )}
        </form>
      </section>

      {/* 3. Slogan Bersama */}
      <section
        aria-labelledby="lafaz-heading"
        className="kawaii-card p-6 sm:p-10 bg-gradient-to-br from-[#F8DCEB]/85 via-[#FFF2F6] to-[#E2EFFF]/85 text-center space-y-6"
      >
        <p id="lafaz-heading" className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#62546A]/80">
          Slogan Kebersihan Diri
        </p>

        <div className="flex items-center justify-center gap-4" aria-hidden="true">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white border-2 border-white kawaii-shadow-sm">
            <ResilientImage
              src={modernSoapBubblesImg}
              alt=""
              fallbackTitle="Sabun & Buih"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white border-2 border-white kawaii-shadow-sm">
            <ResilientImage
              src={modernDentalTowelImg}
              alt=""
              fallbackTitle="Berus Gigi & Tuala"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <blockquote className="max-w-3xl mx-auto flex items-center justify-center gap-3">
          <p className="font-display text-2xl sm:text-4xl font-bold leading-snug text-[#62546A] text-balance">
            “Kebersihan amalan kita, hidup sihat setiap masa!”
          </p>
          <TeacherAudioButton clipId="penutup-slogan" tone="blue" />
        </blockquote>

        <div className="pt-1">
          <button
            type="button"
            onClick={() => setPledged(true)}
            aria-pressed={pledged}
            className={`kawaii-btn inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-sm sm:text-base cursor-pointer kawaii-shadow-sm ${
              pledged
                ? 'bg-[#FFF0C9] text-[#62546A] ring-2 ring-[#62546A]'
                : 'bg-white text-[#62546A] hover:bg-[#FFF0C9]'
            }`}
          >
            <Star className={`w-5 h-5 ${pledged ? 'fill-[#F5C451]' : ''}`} />
            <span>
              {pledged
                ? 'Tahniah! Kamu Telah Melafazkan Slogan Bersama'
                : 'Klik untuk Lafazkan Bersama'}
            </span>
          </button>
        </div>
      </section>

      {/* Penghargaan */}
      <section aria-labelledby="penghargaan-heading" className="kawaii-card p-6 sm:p-8 bg-[#FFF0C9]/75">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          <div className="w-14 h-14 rounded-3xl bg-white flex items-center justify-center shrink-0 text-[#62546A] kawaii-shadow-sm">
            <Award className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 id="penghargaan-heading" className="font-display text-2xl font-bold text-[#62546A]">
              Penghargaan Murid Cemerlang
            </h2>
            <p className="text-base sm:text-lg font-bold text-[#62546A] leading-relaxed">
              “Tahniah! Kamu telah berjaya menyelesaikan semua aktiviti pembelajaran. Terus amalkan
              kebersihan diri dalam kehidupan seharian kerana kebersihan bermula daripada diri kita
              sendiri!”
            </p>
          </div>
        </div>
      </section>

      <PageFooterNav currentPage="penutup" onNavigate={onNavigate} />
    </div>
  );
};
