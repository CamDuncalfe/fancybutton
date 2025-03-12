import localFont from 'next/font/local';

export const openSauceTwo = localFont({
  src: [
    {
      path: '../../public/fonts/open-sauce-two-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/open-sauce-two-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/open-sauce-two-latin-800-normal.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-open-sauce',
}); 