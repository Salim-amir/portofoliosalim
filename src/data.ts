/**
 * Data Profil Portofolio Salim Amir
 * Catatan TODO bagi pemilik:
 * - TODO: Masukkan file foto portrait di photoUrl (misal: '/foto-salim.jpg')
 * - TODO: Letakkan file CV Anda di public/cv.pdf
 * - TODO: Masukkan URL repositori proyek jika sudah dipublikasikan di githubRepo
 * - TODO: Masukkan URL demo langsung jika sudah tersedia di demoUrl
 * - TODO: Tambahkan screenshot proyek di screenshotUrl jika mock/tangkapan layar siap
 */

export interface Project {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  // TODO: Masukkan URL repositori GitHub proyek saat sudah dibuat (contoh: 'https://github.com/Salim-amir/skillconnect')
  githubRepo: string | null;
  // TODO: Masukkan URL demo langsung proyek bila sudah dideploy
  demoUrl: string | null;
  // TODO: Masukkan path gambar screenshot (misal: '/projects/skillconnect.png')
  screenshotUrl: string | null;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  period: string;
  institution: string;
  program: string;
}

export const personalData = {
  name: 'SALIM AMIR',
  role: 'Web Developer',
  subRole: 'Laravel · React · Tailwind CSS',
  status: 'Terbuka untuk proyek dan kolaborasi',
  headline:
    'Mahasiswa Sistem Informasi Bisnis di POLINEMA yang membangun aplikasi web dan mobile, dari database sampai antarmuka.',
  location: 'Malang, Jawa Timur',
  email: 'salimamir2005@gmail.com',
  phone: '+6285963013232',
  whatsappUrl: 'https://wa.me/6285963013232',
  github: 'https://github.com/Salim-amir',
  // TODO: Letakkan file CV di public/cv.pdf
  cvUrl: '/cv.pdf',
  // TODO: Letakkan file foto di public/ dan isi path di sini (contoh: '/foto-salim.jpg')
  photoUrl: '' as string | null,
  profile:
    'Mahasiswa D4 Sistem Informasi Bisnis POLINEMA yang mengerjakan pengembangan web dan aplikasi. Stack utama saya Laravel, MySQL, React, dan Tailwind CSS. Proyek yang sudah saya kerjakan mencakup platform pencarian tim dan aplikasi marketplace sayuran.',
  infoStrip: {
    campus: 'POLINEMA',
    focus: 'Web & Mobile',
    stack: 'Laravel, MySQL, React',
  },
};

export const educationData: EducationItem[] = [
  {
    period: '2024–Sekarang',
    institution: 'Politeknik Negeri Malang',
    program: 'D4 Sistem Informasi Bisnis',
  },
  {
    period: '2021–2024',
    institution: 'SMA Laboratorium UM Malang',
    program: 'Jurusan IPS',
  },
];

export const skillsData: SkillCategory[] = [
  {
    category: 'Backend',
    items: ['PHP', 'Laravel', 'MySQL'],
  },
  {
    category: 'Frontend',
    items: ['HTML', 'Tailwind CSS', 'React'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub'],
  },
];

export const projectsData: Project[] = [
  {
    number: '01',
    title: 'SkillConnect',
    subtitle: 'Platform Pencarian Tim Proyek',
    description:
      'Membantu pengguna menemukan anggota tim berdasarkan keterampilan. Proyek pengembangan platform kolaborasi tim terfokus.',
    stack: ['Laravel', 'MySQL', 'Frontend Sesuai Implementasi'],
    // TODO: Ganti dengan link repo spesifik (misal: 'https://github.com/Salim-amir/skillconnect')
    githubRepo: null,
    // TODO: Masukkan URL demo langsung jika sudah tersedia
    demoUrl: null,
    // TODO: Masukkan file screenshot (misal: '/projects/skillconnect.png')
    screenshotUrl: null,
  },
  {
    number: '02',
    title: 'SayurKu',
    subtitle: 'Aplikasi Marketplace Sayuran',
    description:
      'Proyek kelompok aplikasi mobile yang menghubungkan pembeli dengan pengepul sayuran secara langsung.',
    stack: ['Flutter', 'Firebase'],
    // TODO: Ganti dengan link repo spesifik (misal: 'https://github.com/Salim-amir/sayurku')
    githubRepo: null,
    // TODO: Masukkan URL demo langsung jika sudah tersedia
    demoUrl: null,
    // TODO: Masukkan file screenshot (misal: '/projects/sayurku.png')
    screenshotUrl: null,
  },
];
