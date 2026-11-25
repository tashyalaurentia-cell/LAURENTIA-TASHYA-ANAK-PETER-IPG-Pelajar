import { PageMeta } from '../types/learning';

export const CURRICULUM = {
  title: 'Kebersihan Tanggungjawab Kita',
  subject: 'Bahasa Melayu',
  year: '5 Kreatif',
  theme: 'Kesihatan dan Kebersihan',
  focusSkill: 'Menulis',
  sk: {
    code: 'SK 3.2',
    description: 'Menulis perkataan, frasa dan ayat yang bermakna.',
  },
  sp: {
    code: 'SP 3.2.1',
    description:
      'Membina dan menulis ayat untuk menyatakan pendapat daripada sesuatu bahan multimedia.',
  },
  mainObjective:
    'Pada akhir proses pengajaran dan pembelajaran, murid belajar membina dan menulis empat ayat tentang amalan kebersihan diri untuk menyatakan pendapat berdasarkan poster tentang "Kebersihan adalah Keutamaan" dengan jelas dan tepat.',
  groupObjectives: [
    {
      group: 'Kumpulan Betik (Murid Baik)',
      text: 'Membina dan menulis empat ayat tentang amalan kebersihan diri berdasarkan poster "Kebersihan adalah Keutamaan" dengan jelas dan tepat.',
    },
    {
      group: 'Kumpulan Strawberi (Murid Sederhana)',
      text: 'Memadankan frasa dan membina tiga ayat tentang amalan kebersihan diri berdasarkan poster "Kebersihan adalah Keutamaan" dengan jelas dan tepat.',
    },
    {
      group: 'Kumpulan Anggur (Murid Asas)',
      text: 'Melengkapkan lima tempat kosong tentang amalan kebersihan diri berdasarkan poster "Kebersihan adalah Keutamaan" dengan betul.',
    },
  ],
  objectives: [
    'Membina dan menulis empat ayat lengkap tentang amalan kebersihan diri.',
    'Memadankan frasa dan membina tiga ayat.',
    'Melengkapkan lima ayat kosong tentang amalan kesihatan diri.',
  ],
} as const;

export const PAGES: PageMeta[] = [
  {
    id: 'halaman-utama',
    step: 1,
    title: 'Halaman Utama',
    shortTitle: 'Halaman Utama',
    subtitle: 'Paparan selamat datang, tajuk pelajaran, objektif dan mula belajar.',
  },
  {
    id: 'set-induksi',
    step: 2,
    title: 'Set Induksi',
    shortTitle: 'Set Induksi',
    subtitle: 'Video Jom Bersihkan Diri, soal jawab dan pengetahuan sedia ada.',
  },
  {
    id: 'langkah-1',
    step: 3,
    title: 'Langkah 1',
    shortTitle: 'Langkah 1',
    subtitle: 'Poster Kebersihan adalah Keutamaan dan bina satu ayat individu.',
  },
  {
    id: 'langkah-2',
    step: 4,
    title: 'Langkah 2',
    shortTitle: 'Langkah 2',
    subtitle: 'Aktiviti berkumpulan Betik, Strawberi dan Anggur mengikut tahap.',
  },
  {
    id: 'langkah-3',
    step: 5,
    title: 'Langkah 3',
    shortTitle: 'Langkah 3',
    subtitle: 'Kuiz pentaksiran 10 soalan, pengayaan Wordwall dan pemulihan Google Sites.',
  },
  {
    id: 'penutup',
    step: 6,
    title: 'Penutup',
    shortTitle: 'Penutup',
    subtitle: 'Rumusan pembelajaran, refleksi murid, slogan dan penghargaan.',
  },
  {
    id: 'ruang-guru',
    step: 7,
    title: 'Ruang Guru',
    shortTitle: 'Ruang Guru',
    subtitle: 'Profil pembangun, DSKP, RPH lengkap, strategi, BBM, PBD dan sumber.',
  },
];

export const HYGIENE_FRIENDS = [
  {
    id: 'sabun',
    name: 'Sabun Ceria',
    item: 'Sabun dan Buih',
    role: 'Menanggalkan kotoran, kuman dan bakteria pada tangan serta badan.',
    whenToUse: 'Sebelum makan, selepas keluar dari tandas, dan semasa mandi.',
    opinionExample:
      'Pada pendapat saya, penggunaan sabun sangat penting untuk menghindari kuman dan menjaga kebersihan diri.',
    bgClass: 'bg-[#F8DCEB]',
  },
  {
    id: 'berus',
    name: 'Berus Gigi Pintar',
    item: 'Berus Gigi dan Ubat Gigi',
    role: 'Membersihkan sisa makanan dan menjaga kesihatan gigi serta gusi.',
    whenToUse: 'Sekurang-kurangnya dua kali sehari, iaitu pada waktu pagi dan sebelum tidur.',
    opinionExample:
      'Saya berpendapat bahawa memberus gigi setiap hari dapat mengelakkan gigi berlubang.',
    bgClass: 'bg-[#E2EFFF]',
  },
  {
    id: 'tuala',
    name: 'Tuala Gebu',
    item: 'Tuala Bersih',
    role: 'Mengeringkan badan selepas mandi supaya kulit kekal selesa dan bebas daripada bakteria.',
    whenToUse: 'Selepas mandi dan selepas mencuci muka atau tangan.',
    opinionExample:
      'Kita mestilah menggunakan tuala yang bersih dan kering agar terhindar daripada kuman.',
    bgClass: 'bg-[#FFF0C9]',
  },
  {
    id: 'buih',
    name: 'Pakaian Kemas & Air Bersih',
    item: 'Air Bersih dan Pakaian Bersih',
    role: 'Menjadikan badan segar, selesa dan berkeyakinan sepanjang hari di sekolah.',
    whenToUse: 'Setiap hari selepas mandi dan apabila pakaian kotor.',
    opinionExample:
      'Pada pandangan saya, memakai pakaian yang bersih menjaga kesihatan dan keceriaan kita.',
    bgClass: 'bg-[#E9DDF2]',
  },
] as const;

export const EXPLORATION_SITUATIONS = [
  {
    id: 'tangan',
    title: 'Mencuci Tangan Sebelum Makan',
    keywords: ['mencuci tangan', 'sabun', 'kuman', 'air bersih'],
    starter: 'Pada pendapat saya, kita perlu mencuci tangan menggunakan sabun agar...',
    sampleOpinion:
      'Pada pendapat saya, kita perlu mencuci tangan menggunakan sabun agar kuman tidak masuk ke dalam badan.',
  },
  {
    id: 'gigi',
    title: 'Memberus Gigi Setiap Hari',
    keywords: ['memberus gigi', 'ubat gigi', 'kesihatan', 'gigi bersih'],
    starter: 'Saya berpendapat bahawa amalan memberus gigi setiap hari dapat...',
    sampleOpinion:
      'Saya berpendapat bahawa amalan memberus gigi setiap hari dapat menjaga kesihatan gigi dan menyegarkan nafas.',
  },
  {
    id: 'mandi',
    title: 'Mandi Dua Kali Sehari',
    keywords: ['mandi', 'bakteria', 'tuala bersih', 'segar'],
    starter: 'Pada pandangan saya, mandi dua kali sehari sangat penting kerana...',
    sampleOpinion:
      'Pada pandangan saya, mandi dua kali sehari sangat penting kerana dapat membersihkan badan daripada peluh dan bakteria.',
  },
  {
    id: 'pakaian',
    title: 'Memakai Pakaian yang Bersih',
    keywords: ['pakaian bersih', 'menghindari', 'kemas', 'kebersihan diri'],
    starter: 'Kita wajarlah memakai pakaian yang bersih setiap hari supaya...',
    sampleOpinion:
      'Kita wajarlah memakai pakaian yang bersih setiap hari supaya kita selesa dan terhindar daripada penyakit kulit.',
  },
] as const;

export const STRAWBERI_PAIRS = [
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

export const ANGGUR_QUESTIONS = [
  { id: 'ang1', answer: 'sabun' },
  { id: 'ang2', answer: 'gigi' },
  { id: 'ang3', answer: 'mandi' },
  { id: 'ang4', answer: 'pakaian' },
  { id: 'ang5', answer: 'tuala' },
] as const;
