import React, { useState, useEffect } from 'react';

// ==========================================
// UPGRADED MOCK DATASET FOR MOBILE PREVIEW
// ==========================================
const titleSponsors = [
  { name: "Mega Sports Corp", logo: "🏆 MEGA SPORTS", link: "#" },
  { name: "NextGen Energy Drink", logo: "⚡ NEXTGEN ENERGY", link: "#" }
];

const associateSponsors = [
  "Alpha Bat Co.", "Delta Apparels", "Hydra Cricket Studio", "Palnadu Builders", "Zenith Electronics"
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
    { name: "Hero XI", captain: "Praveen Kumar", primarySponsor: "NTR Mobiles", jerseyColor: "from-orange-500 to-black" },
    { name: "Vikings 11", captain: "Ravi Teja", primarySponsor: "Srinivasa Real Estate", jerseyColor: "from-blue-600 to-indigo-900" }
  ],
  akp: [
    { name: "Anakapalli Warriors", captain: "S. Murthy", primarySponsor: "Jaggery King", jerseyColor: "from-yellow-500 to-amber-700" }
  ]
};

export default function App() {
  const [activeTab, setActiveTab] = useState('North Zone');
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);

  // --- REGISTRATION FLOW STATE MACHINE ---
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [regStep, setRegStep] = useState(1); // 1: Login Account, 2: Payment Gate, 3: Roster Form, 4: Success
  const [formData, setFormData] = useState({ teamName: '', captainName: '', playerRoster: '', speciality: 'Batsman' });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTitleIdx((prev) => (prev + 1) % titleSponsors.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setSelectedDistrict(null);
  };

  const startRegistration = () => {
    setRegStep(1);
    setIsRegModalOpen(true);
  };

  const activeTeams = selectedDistrict ? (mockTeamsByDistrict[selectedDistrict.id] || []) : [];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans flex flex-col overflow-x-hidden selection:bg-[#39FF14] selection:text-black">
      
      {/* 1. TOP SPONSOR BARNER */}
      <div className="w-full bg-gradient-to-r from-black via-[#1a1a1a] to-black border-b border-[#39FF14]/20 py-2.5 px-4 text-center z-20">
        <div className="inline-flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold hidden sm:inline">Title Sponsor</span>
          <span className="text-base md:text-xl font-black italic text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.3)] animate-pulse">
            {titleSponsors[currentTitleIdx].logo}
          </span>
        </div>
      </div>

      {/* CORE FRAME LAYOUT - FULLY MOBILE RESPONSIVE */}
      <div className="flex flex-1 flex-col md:flex-row relative">
        
        {/* 2. NAVIGATION OVERHAUL: STICKY SIDEBAR ON DESKTOP, TOP ROW GRID ON MOBILE */}
        <aside className="w-full md:w-64 bg-[#181818] border-b md:border-b-0 md:border-r border-gray-800 flex flex-col justify-between p-4 md:sticky md:top-0 md:h-[calc(100vh-45px)] z-10">
          <div className="space-y-4 md:space-y-6">
            <div className="border-b border-gray-800 pb-3 text-center md:text-left">
              <h1 className="text-base md:text-lg font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-[#39FF14]">
                ITPL PORTAL
              </h1>
              <p className="text-[9px] text-gray-500 font-bold tracking-widest uppercase">Palnadu District League</p>
            </div>

            {/* Responsive Flex/Grid Menu for Navigation Elements */}
            <nav className="grid grid-cols-2 gap-1.5 sm:flex sm:flex-row md:flex-col md:space-y-1.5">
              {['About', 'North Zone', 'East Zone', 'West Zone', 'South Zone'].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`text-center md:text-left px-3 py-2 md:px-4 md:py-3 rounded-lg font-bold text-xs md:text-sm tracking-wide transition-all uppercase ${
                      isActive 
                        ? 'bg-[#39FF14]/20 text-[#39FF14] border-b-2 md:border-b-0 md:border-l-4 border-[#39FF14]' 
                        : 'text-gray-400 bg-white/5 md:bg-transparent hover:text-white'
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
                className="col-span-2 flex items-center justify-center md:justify-start gap-2 px-3 py-2 md:px-4 md:py-3 rounded-lg font-bold text-xs md:text-sm text-red-500 bg-red-500/10 border border-red-500/20 uppercase tracking-wide transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                Live Stream Link
              </a>
            </nav>
          </div>

          <div className="hidden md:block pt-4 border-t border-gray-800 text-center">
            <span className="text-[10px] text-gray-500 block uppercase tracking-widest mb-1">Powered By</span>
            <div className="bg-black/40 border border-gray-800 rounded p-2 text-xs font-black tracking-widest text-[#39FF14]">
              ⚡ POWER-GRID CO.
            </div>
          </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 p-4 md:p-8">
          {activeTab !== 'North Zone' ? (
            <div className="h-48 flex items-center justify-center border border-dashed border-gray-800 rounded-xl text-gray-500 font-bold text-xs uppercase tracking-wider text-center p-4">
              Click on "North Zone" in the menu above to test the interactive mockup flow!
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* DISTRICT PANEL HEADER */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-800 pb-4 gap-3">
                <div>
                  <h2 className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center gap-2">
                    <span className="text-[#39FF14]">●</span> NORTH ZONE COMPONENT
                  </h2>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {selectedDistrict ? `Districts → ${selectedDistrict.name}` : "Tap a district card below to see rosters & open registration"}
                  </p>
                </div>
                
                {selectedDistrict && (
                  <button 
                    onClick={() => setSelectedDistrict(null)}
                    className="w-full sm:w-auto text-center text-xs bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-gray-300 border border-gray-700 uppercase font-bold transition-all"
                  >
                    ← Back to Districts
                  </button>
                )}
              </div>

              {/* GRID STATE LINK */}
              {!selectedDistrict ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {northDistricts.map((district) => (
                    <div 
                      key={district.id}
                      onClick={() => setSelectedDistrict(district)}
                      className="bg-[#1c1c1c] border border-gray-800 active:border-[#39FF14] md:hover:border-[#39FF14] rounded-xl p-4.5 cursor-pointer transition-all duration-200 relative overflow-hidden"
                    >
                      <h3 className="text-base md:text-lg font-black text-white">{district.name}</h3>
                      <div className="mt-4 pt-2.5 border-t border-gray-800/60 flex items-center justify-between">
                        <span className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">Local Partner:</span>
                        <span className="text-xs font-bold text-[#FFD700] italic">{district.sponsor}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                
                /* SELECTED VIEW PANEL WITH INTERACTION SHORTCUTS */
                <div className="space-y-5">
                  <div className="w-full bg-gradient-to-r from-purple-900/30 via-black to-purple-900/30 border border-purple-500/20 rounded-xl p-3.5 text-center">
                    <span className="text-[9px] uppercase tracking-widest text-purple-400 font-black block mb-0.5">District Presenting Partner</span>
                    <p className="text-base md:text-lg font-black tracking-wide text-white">🏟/ {selectedDistrict.sponsor.toUpperCase()}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center bg-[#181818] p-3 rounded-xl border border-gray-800 gap-3">
                        <h4 className="text-xs font-black tracking-wider uppercase text-gray-400 flex items-center justify-center">Registered Roster ({activeTeams.length})</h4>
                        <button 
                          onClick={startRegistration}
                          className="bg-gradient-to-r from-[#39FF14] to-[#2ecc71] text-black font-black text-xs px-4 py-3 sm:py-2 rounded-lg uppercase tracking-wider text-center"
                        >
                          + Register New Team
                        </button>
                      </div>

                      {activeTeams.length === 0 ? (
                        <div className="bg-[#161616] border border-dashed border-gray-800 rounded-xl p-8 text-center text-gray-500 text-xs">
                          No teams registered yet for this district.
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {activeTeams.map((team, idx) => (
                            <div key={idx} className="bg-[#1c1c1c] border border-gray-800 rounded-xl p-4 flex flex-col justify-between">
                              <div>
                                <div className={`w-full h-20 bg-gradient-to-br ${team.jerseyColor} rounded-lg mb-2.5 relative flex items-center justify-center border border-white/10`}>
                                  <span className="text-3xl">🏏</span>
                                  <div className="absolute bottom-1 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[8px] font-bold text-gray-400 border border-gray-800">
                                    Kit Sp: {team.primarySponsor}
                                  </div>
                                </div>
                                <h5 className="text-sm font-black text-white">{team.name}</h5>
                                <p className="text-xs text-gray-400">Captain: <strong className="text-gray-200">{team.captain}</strong></p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="bg-[#181818] p-3 rounded-xl border border-gray-800">
                        <h4 className="text-xs font-black tracking-wider uppercase text-gray-400 text-center lg:text-left">Local Match Streaming Feed</h4>
                      </div>
                      <div className="bg-black border border-gray-800 rounded-xl overflow-hidden aspect-video relative flex flex-col justify-center items-center text-center p-4">
                        <div className="absolute top-2 left-2 bg-red-600 px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest animate-pulse">LIVE FEED</div>
                        <span className="text-2xl mb-1 opacity-50">📺</span>
                        <p className="text-xs font-bold text-gray-500">Live Camera Screen Frame</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* 4. RUNNING TICKER SPONSOR MARQUEE */}
      <footer className="w-full bg-black border-t border-gray-800 overflow-hidden py-3 text-[10px] z-10">
        <div className="flex whitespace-nowrap gap-8 animate-[marquee_20s_linear_infinite]">
          {[...associateSponsors, ...associateSponsors].map((sponsor, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-gray-500 font-bold uppercase tracking-wider">
              <span className="text-[#39FF14]">★</span> {sponsor}
            </div>
          ))}
        </div>
      </footer>

      {/* ======================================================= */}
      {/* 5. DYNAMIC INTERACTIVE REGISTRATION & MONETIZATION MODAL WIZARD */}
      {/* ======================================================= */}
      {isRegModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto animate-fadeIn">
          <div className="bg-[#1c1c1c] border border-gray-800 w-full max-w-md rounded-2xl p-5 md:p-6 space-y-5 shadow-2xl relative my-auto">
            
            {/* Modal Exit Cross */}
            <button 
              onClick={() => setIsRegModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white font-bold text-sm bg-black/30 w-7 h-7 rounded-full flex items-center justify-center border border-gray-800"
            >
              ✕
            </button>

            {/* Header Stage Tracker Banner */}
            <div className="text-center border-b border-gray-800 pb-3">
              <span className="text-[9px] font-black tracking-widest text-[#39FF14] uppercase">REGISTRATION ENGINE WIZARD</span>
              <h3 className="text-base font-black text-white mt-0.5">Registering for {selectedDistrict?.name}</h3>
              
              {/* Progress Bullet Line */}
              <div className="flex justify-center items-center gap-2 mt-3">
                {[1, 2, 3, 4].map((step) => (
                  <div 
                    key={step} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      regStep === step ? 'w-8 bg-[#39FF14]' : regStep > step ? 'w-3 bg-green-800' : 'w-3 bg-gray-800'
                    }`} 
                  />
                ))}
              </div>
            </div>

            {/* STAGE 1: CREATING LEAGUE ACCOUNT LOGIN IDENTITIES */}
            {regStep === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-[#39FF14]/5 border border-[#39FF14]/20 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-400 leading-relaxed">Captains must establish an authorized **League Access ID** before entering payment networks.</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider block mb-1">Mobile Number (For OTP Verification)</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" defaultValue="9876543210" className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-sm focus:border-[#39FF14] outline-none font-medium" disabled />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-wider block mb-1">Set Password Account Secure Pin</label>
                    <input type="password" value="******" className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-sm outline-none font-medium" disabled />
                  </div>
                </div>
                <button 
                  onClick={() => setRegStep(2)}
                  className="w-full bg-[#39FF14] text-black font-black py-2.5 rounded-xl text-xs uppercase tracking-widest transition-transform active:scale-95"
                >
                  Verify ID & Proceed to Pay →
                </button>
              </div>
            )}

            {/* STAGE 2: HIGH-INTENT SIMULATED PAYMENT GATE CO-BRANDED INTERFACE */}
            {regStep === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-gradient-to-r from-blue-900/30 to-black border border-blue-500/20 rounded-xl p-3 text-center relative">
                  <span className="absolute top-1 right-2 text-[8px] bg-blue-600 font-bold px-1 rounded text-white tracking-widest">PCI SECURED</span>
                  <p className="text-[9px] uppercase tracking-wider text-gray-500 font-bold">Transaction Routing Gateway</p>
                  <p className="text-lg font-black text-white mt-1">₹ 2,500 <span className="text-xs text-gray-400 font-normal">/ Team Entry Fee</span></p>
                </div>

                <div className="bg-black/50 border border-gray-800 rounded-xl p-3 space-y-2">
                  <span className="text-[9px] font-black tracking-widest text-gray-500 uppercase block mb-1">Select Payment Mode</span>
                  <div className="flex items-center justify-between border border-blue-500/30 bg-blue-500/5 p-2 rounded-lg cursor-pointer">
                    <span className="text-xs font-bold text-blue-400 flex items-center gap-2">📱 GooglePay / PhonePe UPI</span>
                    <span className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center"><span className="w-1.5 h-1.5 rounded-full bg-white"/></span>
                  </div>
                  <div className="flex items-center justify-between border border-gray-800 p-2 rounded-lg opacity-40">
                    <span className="text-xs font-bold text-gray-400">💳 Credit / Debit Card</span>
                    <span className="w-3 h-3 rounded-full border border-gray-700"/>
                  </div>
                </div>

                {/* HIGH VISIBILITY GATEWAY VOUCHER SPONSOR POSITION */}
                <div className="bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-xl p-2.5 text-center">
                  <p className="text-[10px] text-[#FFD700] font-medium">💥 Sponsor Perk: Pay now and instantly lock down a 20% Discount Code at **Alpha Bat Co.** on checkout completion!</p>
                </div>

                <button 
                  onClick={() => setRegStep(3)}
                  className="w-full bg-blue-600 text-white font-black py-2.5 rounded-xl text-xs uppercase tracking-widest transition-transform active:scale-95 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                >
                  Simulate Successful Payment ✓
                </button>
              </div>
            )}

            {/* STAGE 3: UNLOCKED ROSTER PROFILE SUBMISSION ENTRY FORM */}
            {regStep === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-2.5 text-center flex items-center justify-center gap-2 text-xs text-green-400 font-bold">
                  ✓ Payment Verified Token Received! Form Unlocked.
                </div>
                
                <div className="space-y-3 text-left">
                  <div>
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider block mb-0.5">Team Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Palnadu Lions XI" 
                      value={formData.teamName}
                      onChange={(e) => setFormData({...formData, teamName: e.target.value})}
                      className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-xs focus:border-[#39FF14] outline-none" 
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider block mb-0.5">Captain Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Gali Praveen" 
                      value={formData.captainName}
                      onChange={(e) => setFormData({...formData, captainName: e.target.value})}
                      className="w-full bg-black border border-gray-800 rounded-lg px-3 py-2 text-xs focus:border-[#39FF14] outline-none" 
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider block mb-0.5">Core Player Names (Comma Separated)</label>
                    <textarea 
                      rows="2" 
                      placeholder="Player 1, Player 2, Player 3..." 
                      value={formData.playerRoster}
                      onChange={(e) => setFormData({...formData, playerRoster: e.target.value})}
                      className="w-full bg-black border border-gray-800 rounded-lg p-2 text-xs focus:border-[#39FF14] outline-none resize-none" 
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider block mb-0.5">Captain Speciality</label>
                    <select 
                      value={formData.speciality}
                      onChange={(e) => setFormData({...formData, speciality: e.target.value})}
                      className="w-full bg-black border border-gray-800 rounded-lg px-2 py-2 text-xs text-gray-300 focus:border-[#39FF14] outline-none"
                    >
                      <option value="Batsman">Pure Batsman</option>
                      <option value="Bowler">Fast / Spin Bowler</option>
                      <option value="All-rounder">All-Rounder asset</option>
                    </select>
                  </div>
                </div>

                <button 
                  onClick={() => setRegStep(4)}
                  disabled={!formData.teamName || !formData.captainName}
                  className={`w-full font-black py-2.5 rounded-xl text-xs uppercase tracking-widest transition-transform ${
                    formData.teamName && formData.captainName ? 'bg-[#39FF14] text-black active:scale-95' : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Submit Roster Profile Submit →
                </button>
              </div>
            )}

            {/* STAGE 4: ONBOARDING COMPLETION SUCCESS LAYOUT */}
            {regStep === 4 && (
              <div className="text-center space-y-4 py-4 animate-fadeIn">
                <span className="text-5xl block animate-bounce">🎉</span>
                <h4 className="text-lg font-black text-white">Team Successfully Registered!</h4>
                <p className="text-xs text-gray-400 px-4 leading-relaxed">
                  Congratulations Captain! **{formData.teamName}** is locked in for the upcoming season in the **{selectedDistrict?.name}** roster database.
                </p>
                <div className="bg-black/60 border border-gray-800 rounded-xl p-3 text-xs inline-block mx-auto text-left space-y-1">
                  <p className="text-gray-400">🎫 Team ID: <strong className="text-[#39FF14]">ITPL-2026-{Math.floor(1000 + Math.random() * 9000)}</strong></p>
                  <p className="text-gray-400">👤 Captain: <span className="text-white font-medium">{formData.captainName}</span></p>
                </div>
                <button 
                  onClick={() => { setIsRegModalOpen(false); setSelectedDistrict(null); }}
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 rounded-xl text-xs uppercase tracking-wide border border-gray-700 transition-all"
                >
                  Close & Go Back to Hub
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* STYLESHEET CSS OVERLAYS FOR MARQUEE AND KEYFRAME TRANSITIONS */}
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
        .animate-fadeIn {
          animation: fIn 0.25s ease-out forwards;
        }
        @keyframes fIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}