import React from 'react';

export default function AboutPage({ onRegisterClick }) {
  const coreCommittee = [
    { name: "HARI Prasad", title: "PDCA President", file: "hp.jpeg" },
    { name: "Surya Prakash", title: "PDCA Vice President", file: "sp.jpeg" },
    { name: "Bolla Suresh", title: "Legal Advisor", file: "bs.jpeg" },
    { name: "Praveen Gali", title: "Technical Head", file: "pg.jpeg" }
  ];

  return (
    <div className="space-y-10 max-w-5xl mx-auto pb-12 animate-fadeIn">
      
      {/* HERO BANNER SECTION */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-950 via-black to-slate-900 border border-[#39FF14]/20 p-6 md:p-10 text-center">
        <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase animate-pulse">
          Season 2026 Confirmed
        </div>
        <span className="text-xs font-black tracking-widest text-[#39FF14] uppercase block mb-2">The Ultimate Cricket Carnival</span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase drop-shadow-md">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-emerald-400">ITPL 2026</span>
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
          The Inter-District Premier League is expanding to reshape regional cricket infrastructure. Bringing together raw local talent, standard turf tournament matrices, and unmatched media visibility under one umbrella.
        </p>
        
        {/* MOCK TIMELINE / KEY DATES CARD */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-black/50 border border-gray-800 p-4 rounded-xl">
            <span className="text-[10px] uppercase font-bold text-gray-500 block">Enrollment Phase</span>
            <span className="text-sm font-black text-[#39FF14] mt-1 block">Oct 01 – Nov 15, 2026</span>
          </div>
          <div className="bg-black/50 border border-gray-800 p-4 rounded-xl">
            <span className="text-[10px] uppercase font-bold text-gray-500 block">Zonal Group Clashes</span>
            <span className="text-sm font-black text-white mt-1 block">Dec 05 – Dec 28, 2026</span>
          </div>
          <div className="bg-black/50 border border-gray-800 p-4 rounded-xl">
            <span className="text-[10px] uppercase font-bold text-gray-500 block">Grand Finale Night</span>
            <span className="text-sm font-black text-yellow-400 mt-1 block">Jan 10, 2027</span>
          </div>
        </div>
      </div>

      {/* STAR-STUDDED GUEST LIST & MONSTER PRIZE POOLS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#181818] border border-gray-800 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/10 rounded-full blur-xl pointer-events-none" />
          <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2 mb-3">
            ✨ <span className="text-purple-400">Dignitaries & Celebrities</span>
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            The opening ceremony and key weekend fixtures are scheduled to be graced by top-tier **state political leaders** alongside stellar **Tollywood film personalities**. Red carpet presentations, live brand interactive meets, and high-octane stadium entertainment will make it unforgettable.
          </p>
        </div>

        <div className="bg-[#181818] border border-gray-800 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
          <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2 mb-3">
            💰 <span className="text-amber-400">Bumper Cash Rewards</span>
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            We are committing to a historic prize spectrum this season! The tournament champion takes home a massive **₹ 5,00,000 Grand Cash Prize**, while the runner-up secures **₹ 2,500,000**. Additional individual financial incentives are reserved for the Player of the Tournament, Best Bowler, and Maximum Sixes awards.
          </p>
        </div>
      </div>

      {/* TOURNAMENT BLUEPRINT & ENROLLMENT GUIDELINES */}
      <div className="bg-[#161616] border border-gray-800 rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-xl font-black text-white uppercase tracking-wide">Tournament Structure & Blueprint</h3>
          <p className="text-xs text-gray-400 mt-1">Four strategic zones engineered to filter down regional champions.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['North Zone', 'East Zone', 'West Zone', 'South Zone'].map((zone, idx) => (
            <div key={idx} className="bg-black/40 border border-gray-800/80 rounded-xl p-4">
              <span className="text-[10px] font-bold text-[#39FF14] block uppercase">0{idx + 1} // {zone}</span>
              <p className="text-xs font-semibold text-gray-300 mt-2">7 Dedicated Districts</p>
              <p className="text-[11px] text-gray-500 mt-0.5">Maximum 12 Clubs Per District</p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-800/60 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">How to Secure a Team Spot:</h4>
            <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
              <li>Navigate to your home Zone panel via the system interface dashboard.</li>
              <li>Select your home district profile card to unlock registration availability.</li>
              <li>Process the dynamic transaction module gate and upload your final 15-player core roster.</li>
            </ul>
          </div>
          <button 
            onClick={onRegisterClick}
            className="w-full lg:w-auto px-6 py-3 bg-gradient-to-r from-[#39FF14] to-emerald-400 text-black font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-[0_0_15px_rgba(57,255,20,0.2)] active:scale-95"
          >
            Start Team Enrollment Now →
          </button>
        </div>
      </div>

      {/* CORE ADMINISTRATIVE GOVERNANCE COMMITTEE PANEL */}
      <div className="space-y-4">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-black text-white uppercase tracking-wider">Governing Council & Core Leadership</h3>
          <p className="text-xs text-gray-500">The executive board managing regulatory parameters and operational alignment for ITPL.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreCommittee.map((member, idx) => (
            <div key={idx} className="bg-[#1c1c1c] border border-gray-800 rounded-xl overflow-hidden flex flex-col">
              {/* IMAGE HOUSING CONTAINER */}
              <div className="w-full aspect-[3/4] bg-neutral-900 border-b border-gray-800 relative group overflow-hidden flex items-center justify-center">
                <img 
                  src={`/${member.file}`} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex-col justify-center items-center text-center p-4">
                  <span className="text-4xl mb-2 opacity-30">👤</span>
                  <span className="text-[10px] font-mono text-gray-500 bg-black/60 px-2 py-1 rounded border border-gray-800 max-w-[90%] break-all">
                    {member.file}
                  </span>
                </div>
              </div>
              
              <div className="p-3.5 bg-black/40 text-center mt-auto">
                <h4 className="text-sm font-black text-white tracking-wide">{member.name}</h4>
                <p className="text-[11px] text-[#39FF14] font-bold uppercase tracking-wider mt-0.5">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}