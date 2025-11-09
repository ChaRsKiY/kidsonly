'use client';

import { useState } from 'react';

export default function TestAPIPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testAPI = async (forceUpdate = false) => {
    setLoading(true);
    try {
      const response = await fetch('/api/parndorf/hours', {
        method: forceUpdate ? 'POST' : 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error:', error);
      setData({ error: 'Daten konnten nicht abgerufen werden' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Parndorf Öffnungszeiten API testen</h1>
      
      <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 rounded">
        <h2 className="text-lg font-semibold mb-2">ℹ️ Cron Job Informationen</h2>
        <p className="text-sm">
          <strong>Zeitplan:</strong> Täglich um 9:00 Uhr Wiener Zeit<br/>
          <strong>Datenquelle:</strong> Gecachte Daten (kein Echtzeit-Scraping)<br/>
          <strong>Erzwungenes Update:</strong> Verfügbar über POST-Anfrage zum Testen
        </p>
      </div>
      
      <div className="space-x-4 mb-6">
        <button 
          onClick={() => testAPI(false)}
          disabled={loading}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          {loading ? 'Lädt...' : 'Gecachte Daten abrufen (GET)'}
        </button>
        
        <button 
          onClick={() => testAPI(true)}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          {loading ? 'Lädt...' : 'Erzwungenes Update (POST)'}
        </button>
      </div>

      {data && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">API-Antwort:</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
          
          {data.success && data.data && data.data.openingHours && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Öffnungszeiten:</h3>
              <ul className="list-disc list-inside">
                {data.data.openingHours.map((item: any, index: number) => (
                  <li key={index} className="mb-1">
                    <strong>{item.day}:</strong> {item.hours}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
