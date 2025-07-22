import './globals.css';
export const metadata = {
  title: 'Football in Norway',
  description: 'Se alle fotballkamper i Norge – alle nivåer, alle steder.',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 shadow-md flex justify-between items-center sticky top-0 bg-white z-10">
          <h1 className="text-xl font-bold">Football in Norway</h1>
          <nav>
            <a href="/" className="mr-4">Matches</a>
            <a href="/no" className="text-sm">🇳🇴 Norsk</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}