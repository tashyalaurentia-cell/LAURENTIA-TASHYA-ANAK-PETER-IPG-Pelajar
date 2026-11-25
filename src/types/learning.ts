export type PageId =
  | 'halaman-utama'
  | 'set-induksi'
  | 'langkah-1'
  | 'langkah-2'
  | 'langkah-3'
  | 'penutup'
  | 'ruang-guru';

export interface PageMeta {
  id: PageId;
  step: number;
  title: string;
  shortTitle: string;
  subtitle: string;
}

export type GroupId = 'betik' | 'strawberi' | 'anggur';

export interface StudentProgress {
  visitedPages: PageId[];
  activeGroup: GroupId;
  betikSentences: string[];
  strawberiMatches: Record<string, string>;
  strawberiSentences: string[];
  anggurBlanks: string[];
  quizAnswers: Record<string, number>;
  quizSubmitted: boolean;
  reflection: {
    studentName: string;
    className: string;
    mood: 'gembira' | 'faham' | 'bimbingan' | '';
    amalanHarian: string;
    ayatPendapat: string;
    perasaan: string;
    savedAt: string | null;
  };
}
