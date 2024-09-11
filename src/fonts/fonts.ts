import { Amiri } from 'next/font/google';

export const montserrat = Amiri({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: false,
  variable: '--font-montserrat',
});
