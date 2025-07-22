export default function Home() {
  const kamper = [
    { dato: "Lørdag 30. august", tid: "18:00", kamp: "Vålerenga – Bryne", nivå: "Eliteserien", sted: "Oslo" },
    { dato: "Søndag 31. august", tid: "17:00", kamp: "Viking – Rosenborg", nivå: "Eliteserien", sted: "Stavanger" }
  ];

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Football in Norway</h1>
      <p className="mb-6">Finn din neste fotballkamp i Norge.</p>
      <ul className="space-y-4">
        {kamper.map((kamp, index) => (
          <li key={index} className="border rounded-xl p-4 shadow-sm">
            <p className="font-semibold">{kamp.dato}</p>
            <p>{kamp.tid} – {kamp.kamp}</p>
            <p className="text-sm text-gray-600">{kamp.nivå} • {kamp.sted}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
