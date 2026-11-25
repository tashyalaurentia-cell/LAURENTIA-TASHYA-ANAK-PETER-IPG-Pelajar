// Maklumat awam pembangun yang dipaparkan pada halaman Pengenalan Diri
export const DEVELOPER_PUBLIC_PROFILE = {
  nama: 'Laurentia Tashya Anak Peter',
  angkaGiliran: '2025312440034',
  noMatriks: 'P24322975',
  kursus: 'EDUP3133 - Teknologi untuk Pengajaran dan Pembelajaran',
  program: 'Program Ijazah Sarjana Muda Perguruan (PISMP)',
  institusi: 'Institut Pendidikan Guru Malaysia, Kampus Tun Abdul Razak',
  initials: 'LT',
} as const;

// Ruang simpanan maklumat peribadi sulit yang TIDAK dipaparkan pada laman web awam.
// Kekalkan kosong atau simpan secara luar talian sahaja; jangan eksport ke komponen paparan.
export interface PrivateDeveloperRecord {
  angkaGiliran: string;
  noKadPengenalan: string;
}

const _PRIVATE_DEVELOPER_RECORD: PrivateDeveloperRecord = {
  angkaGiliran: '',
  noKadPengenalan: '',
};

void _PRIVATE_DEVELOPER_RECORD;
