'use client';
import { useState } from 'react';
const matchData = [
  {
    date: 'Saturday 30. August',
    matches: [
      { time: '18:00', teams: 'Vålerenga vs Bryne', level: 'OBOS-ligaen', stadium: 'Intility Arena', city: 'Oslo', link: '/kamp/2025-08-30-vif-bryne' },
      { time: '15:00', teams: 'Skeid vs Kjelsås', level: '2. divisjon', stadium: 'Nordre Åsen', city: 'Oslo', link: '#' },
    ]
  },
  {
    date: 'Sunday 31. August',
    matches: [
      { time: '19:00', teams: 'Viking vs Rosenborg', level: 'Eliteserien', stadium: 'SR-Bank Arena', city: 'Stavanger', link: '#' },
      { time: '14:00', teams: 'Frigg vs Ready', level: '3. divisjon', stadium: 'Tørteberg', city: 'Oslo', link: '#' }
    ]
  }
];

export default function Page() {
  const [open, setOpen] = useState(null);
  return (
    <main className="p-4">
      <h2 className="text-xl mb-4 font-semibold">Upcoming matches in Norway</h2>
      {matchData.map((day, idx) => (
        <div key={idx} className="mb-4">
          <button onClick={() => setOpen(open === idx ? null : idx)} className="text-left w-full font-medium text-blue-700">
            {day.date}
          </button>
          {open === idx && (
            <div className="mt-2 border-l border-gray-300 pl-4">
              {day.matches.map((match, i) => (
                <a href={match.link} key={i} className="block py-1 hover:bg-gray-100">
                  <div className="grid grid-cols-5 text-sm">
                    <span>{match.time}</span>
                    <span>{match.teams}</span>
                    <span>{match.level}</span>
                    <span>{match.stadium}</span>
                    <span>{match.city}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}