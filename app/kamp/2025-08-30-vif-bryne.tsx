export default function KampSide() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Vålerenga – Bryne</h1>
      <p className="text-gray-600 mb-4">Eliteserien – Lørdag 30. august 2025 kl. 18:00</p>

      <div className="space-y-2 mb-6">
        <p><strong>Stadion:</strong> Intility Arena</p>
        <p><strong>By:</strong> Oslo</p>
        <p><strong>Billetter:</strong> <a href="https://www.vif-fotball.no/billetter" className="text-blue-600 underline" target="_blank">Kjøp billetter</a></p>
        <p><strong>Hotell:</strong> <a href="https://www.booking.com/city/no/oslo.no.html" className="text-blue-600 underline" target="_blank">Finn hotell i Oslo</a></p>
        <p><strong>Transport:</strong> <a href="https://ruter.no" className="text-blue-600 underline" target="_blank">Se Ruter.no</a></p>
        <p><strong>Flyplass:</strong> Oslo Lufthavn (OSL)</p>
        <p><strong>Klubber:</strong> 
          <a href="https://www.vif-fotball.no" className="text-blue-600 underline ml-1" target="_blank">Vålerenga</a> og 
          <a href="https://www.brynefk.no" className="text-blue-600 underline ml-1" target="_blank">Bryne</a>
        </p>
      </div>

      <p className="text-sm text-gray-500">Sist oppdatert: 22. juli 2025</p>
    </main>
  );
}
