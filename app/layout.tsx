import './globals.css';

export const metadata = {
  title: 'Football in Norway',
  description: 'Alle kamper i Norge – alle nivåer, alle steder.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 shadow-md sticky top-0 bg-white z-10 flex justify-between items-center">
          <h1 className="text-xl font-bold">Football in Norway</h1>
          <nav>
            <a href="/" className="mr-4">🏟️ Matches</a>
            <a href="/oslo" className="mr-4">📍 Oslo</a>
            <a href="/no" className="text-sm">🇳🇴 Norsk</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}