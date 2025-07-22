import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Football in Norway',
  description: 'Finn din neste fotballkamp i Norge.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}