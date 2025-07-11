import localFont from 'next/font/local';

export const TormentaFont = localFont({
  src: [
    {
      path: '../../../../public/assets/fonts/Tormenta20.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-tormenta-font',
});