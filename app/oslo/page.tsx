export default function Oslo() {
  return (
    <main className="p-4 space-y-2">
      <h1 className="text-xl font-bold mb-2">Kamper i Oslo</h1>
      <ul className="list-disc list-inside">
        <li>30. august – Vålerenga vs Bryne (Intility Arena)</li>
        <li>30. august – Skeid vs Kjelsås (Nordre Åsen)</li>
        <li>31. august – Frigg vs Ready (Tørteberg)</li>
      </ul>
      <p className="mt-4">✈️ Flyplass: Oslo Lufthavn (OSL)</p>
      <p>🚌 Lokal transport: <a className="text-blue-700" href="https://ruter.no" target="_blank">Ruter</a></p>
    </main>
  );
}