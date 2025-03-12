import './globals.css';
import type { Metadata } from 'next';
import { openSauceTwo } from './lib/fonts';

export const metadata: Metadata = {
  title: 'Fancy Button Demo',
  description: 'A demonstration of our fancy button component',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={openSauceTwo.className}>
        <main className="min-h-screen flex items-center justify-center p-4">
          {children}
        </main>
      </body>
    </html>
  );
} 