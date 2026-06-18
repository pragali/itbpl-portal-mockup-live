import React, { useState, useEffect } from 'react';

// ==========================================
// MOCK DATASET FOR ORGANIZER PREVIEW
// ==========================================
const titleSponsors = [
  { name: 'Mega Sports Corp', logo: '🏆 MEGA SPORTS', link: '#' },
  { name: 'NextGen Energy Drink', logo: '⚡ NEXTGEN ENERGY', link: '#' },
];

const associateSponsors = [
  'Alpha Bat Co.',
  'Delta Apparels',
  'Hydra Cricket Studio',
  'Palnadu Builders',
  'Zenith Electronics',
];

const northDistricts = [
  { id: 'asr', name: 'Alluri Sitharamaraju', sponsor: 'Godavari Agro Mills' },
  { id: 'akp', name: 'Anakapalli', sponsor: 'Anakapalli Jaggery Trader Assc.' },
  { id: 'plv', name: 'Polavaram', sponsor: 'Delta Infra Projects' },
  { id: 'pvp', name: 'Parvathipuram', sponsor: 'Manyam Rice Mills' },
  { id: 'skl', name: 'Srikakulam', sponsor: 'Kalinga Electronics' },
  { id: 'vzn', name: 'Vizianagaram', sponsor: 'Maharaja Textiles' },
  { id: 'vsp', name: 'Visakhapatnam', sponsor: 'Vizag Steel Hub' },
];

const mockTeamsByDistrict = {
  asr: [
    {
      name: 'Hero XI',
      captain: 'Praveen Kumar',
      primarySponsor: 'NTR Mobiles',
      jerseyColor: 'from-orange-500 to-black',
    },
    {
      name: 'Vikings 11',
      captain: 'Ravi Teja',
      primarySponsor: 'Srinivasa Real Estate',
      jerseyColor: 'from-blue-600 to-indigo-900',
    },
  ],
  akp: [
    {
      name: 'Anakapalli Warriors',
      captain: 'S. Murthy',
      primarySponsor: 'Jaggery King',
      jerseyColor: 'from-yellow-500 to-amber-700',
    },
  ],
};

// ==========================================
// CORE APP WRAPPER COMPONENT
// ==========================================
export default function App() {
  const [activeTab, setActiveTab] = useState('North Zone');
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);

  // --- ADD THIS EFFECT TO FORCE TAILWIND TO LOAD ---
  useEffect(() => {
    // Check if script is already present
    if (!document.getElementById('tailwind-cdn')) {
      const script = document.createElement('script');
      script.id = 'tailwind-cdn';
      script.src = 'https://cdn.tailwindcss.com';
      document.head.appendChild(script);
    }
  }, []);
  // ------------------------------------------------

  // Auto-rotate Title Sponsor logo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTitleIdx((prev) => (prev + 1) % titleSponsors.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle Left Panel tab changes cleanly
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setSelectedDistrict(null); // Reset drill-down if they switch zones
  };

  const activeTeams = selectedDistrict
    ? mockTeamsByDistrict[selectedDistrict.id] || []
    : [];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans flex flex-col selection:bg-[#39FF14] selection:text-black">
      {/* 1. TOP SPONSOR BANNER */}
      <div className="w-full bg-gradient-to-r from-black via-[#1a1a1a] to-black border-b border-[#39FF14]/20 py-3 px-4 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">
            Official Title Sponsor
          </span>
          <span className="text-xl md:text-2xl font-black italic text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.3)] animate-pulse">
            {titleSponsors[currentTitleIdx].logo}
          </span>
        </div>
      </div>

      {/* CORE WORKSPACE FRAME */}
      <div className="flex flex-1 flex-col md:flex-row relative">
        {/* 2. LEFT NAVIGATION PANEL */}
        <aside className="w-full md:w-64 bg-[#181818] border-r border-gray-800 flex flex-col justify-between p-4 md:sticky md:top-0 md:h-[calc(100vh-56px)]">
          <div className="space-y-6">
            <div className="border-b border-gray-800 pb-4">
              <h1 className="text-lg font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-[#39FF14]">
                ITBPL PANEL
              </h1>
              <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                Palnadu District
              </p>
            </div>

            <nav className="space-y-1.5">
              {[
                'About',
                'North Zone',
                'East Zone',
                'West Zone',
                'South Zone',
              ].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-200 uppercase ${
                      isActive
                        ? 'bg-gradient-to-r from-[#39FF14]/20 to-transparent text-[#39FF14] border-l-4 border-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.1)]'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 w-full text-left px-4 py-3 rounded-lg font-bold text-sm text-red-500 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 uppercase tracking-wide transition-all mt-4"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                Live YouTube Link
              </a>
            </nav>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-800 text-center">
            <span className="text-[10px] text-gray-500 block uppercase tracking-widest mb-1">
              Powered By
            </span>
            <div className="bg-black/40 border border-gray-800 rounded p-2 text-xs font-black tracking-widest text-[#39FF14]">
              ⚡ POWER-GRID CO.
            </div>
          </div>
        </aside>

        {/* 3. MAIN CONTENT PANEL */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {activeTab !== 'North Zone' ? (
            <div className="h-64 flex items-center justify-center border border-dashed border-gray-800 rounded-xl text-gray-500 font-medium">
              Preview Mode: Click on "North Zone" to view the functional mockup
              flow.
            </div>
          ) : (
            <div className="space-y-6">
              {/* BREADCRUMBS */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-800 pb-4 gap-4">
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                    <span className="text-[#39FF14]">●</span> NORTH ZONE
                    DASHBOARD
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">
                    {selectedDistrict
                      ? `Districts → ${selectedDistrict.name}`
                      : 'Select a district below to see live rosters & regional sponsors'}
                  </p>
                </div>

                {selectedDistrict && (
                  <button
                    onClick={() => setSelectedDistrict(null)}
                    className="text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded text-gray-300 border border-gray-700 uppercase font-bold transition-all"
                  >
                    ← Back to Districts
                  </button>
                )}
              </div>

              {/* GRID SELECTION VIEW */}
              {!selectedDistrict ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {northDistricts.map((district) => (
                    <div
                      key={district.id}
                      onClick={() => setSelectedDistrict(district)}
                      className="bg-[#1c1c1c] border border-gray-800 hover:border-[#39FF14] rounded-xl p-5 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] group relative overflow-hidden"
                    >
                      <h3 className="text-lg font-black group-hover:text-[#39FF14] transition-colors">
                        {district.name}
                      </h3>
                      <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center justify-between">
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                          Local Sponsor:
                        </span>
                        <span className="text-xs font-semibold text-[#FFD700] italic">
                          {district.sponsor}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* DETAILED DISTRICT PROFILE ROW */
                <div className="space-y-6">
                  <div className="w-full bg-gradient-to-r from-purple-900/30 via-black to-purple-900/30 border border-purple-500/20 rounded-xl p-4 text-center">
                    <span className="text-[10px] uppercase tracking-widest text-purple-400 font-black block mb-1">
                      District Presenting Partner
                    </span>
                    <p className="text-xl font-extrabold tracking-wide text-white">
                      🏟️ {selectedDistrict.sponsor.toUpperCase()}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex justify-between items-center bg-[#181818] p-4 rounded-xl border border-gray-800">
                        <h4 className="text-sm font-black tracking-wider uppercase text-gray-300">
                          Registered Roster ({activeTeams.length})
                        </h4>
                        <button
                          onClick={() =>
                            alert(
                              `Opening Dynamic Mockup Registration Form for ${selectedDistrict.name}...`
                            )
                          }
                          className="bg-gradient-to-r from-[#39FF14] to-[#2ecc71] text-black font-black text-xs px-4 py-2.5 rounded-lg uppercase tracking-wider hover:scale-105 transition-all"
                        >
                          + Register New Team
                        </button>
                      </div>

                      {activeTeams.length === 0 ? (
                        <div className="bg-[#161616] border border-dashed border-gray-800 rounded-xl p-8 text-center text-gray-500 text-sm">
                          No teams registered yet for this district.
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {activeTeams.map((team, idx) => (
                            <div
                              key={idx}
                              className="bg-[#1c1c1c] border border-gray-800 rounded-xl p-4 flex flex-col justify-between"
                            >
                              <div>
                                <div
                                  className={`w-full h-24 bg-gradient-to-br ${team.jerseyColor} rounded-lg mb-3 relative flex items-center justify-center border border-white/10`}
                                >
                                  <span className="text-4xl">🏏</span>
                                  <div className="absolute bottom-1 right-2 bg-black/70 px-2 py-0.5 rounded text-[9px] font-bold text-gray-400 border border-gray-800">
                                    Kit Sp: {team.primarySponsor}
                                  </div>
                                </div>
                                <h5 className="text-base font-black text-white">
                                  {team.name}
                                </h5>
                                <p className="text-xs text-gray-400 mt-1">
                                  Captain:{' '}
                                  <strong className="text-gray-200">
                                    {team.captain}
                                  </strong>
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="bg-[#181818] p-4 rounded-xl border border-gray-800">
                        <h4 className="text-sm font-black tracking-wider uppercase text-gray-300">
                          Local Stream Feedback
                        </h4>
                      </div>
                      <div className="bg-black border border-gray-800 rounded-xl overflow-hidden aspect-video relative flex flex-col justify-center items-center text-center p-4">
                        <div className="absolute top-2 left-2 bg-red-600 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest animate-pulse">
                          LIVE FEED
                        </div>
                        <span className="text-4xl mb-2 opacity-60">📺</span>
                        <p className="text-xs font-bold text-gray-400">
                          Stream Frame Placement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* 4. RUNNING TEXT SPONSOR FOOTER */}
      <footer className="w-full bg-black border-t border-gray-800 overflow-hidden py-3 text-xs z-10">
        <div className="flex whitespace-nowrap gap-12 animate-[marquee_25s_linear_infinite]">
          {[...associateSponsors, ...associateSponsors].map((sponsor, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-gray-500 hover:text-[#39FF14] font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span className="text-[#39FF14]">★</span> {sponsor}
            </div>
          ))}
        </div>
      </footer>

     {/* GLOBAL CSS INJECT FOR MARQUEE AND MOBILE BACKGROUND FIX */}
     <style jsx="true" global="true">{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        body {
          background-color: #121212 !important;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}
