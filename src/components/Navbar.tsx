import React from "react";

const Navbar: React.FC<{ activeTab: string; onTabChange: (tab: string) => void }> = ({ activeTab, onTabChange }) => (
  <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-10 py-5 bg-white/10 backdrop-blur-md shadow-2xl border-b border-white/10">
    <div className="text-3xl font-extrabold text-emerald-300 tracking-wide select-none uppercase">
      Moviedbpp
    </div>
    <div className="flex gap-8">
      <button
        className={`text-lg font-semibold px-4 py-2 rounded transition-colors duration-150 ${activeTab === 'top' ? 'bg-emerald-300 text-neutral-900 shadow' : 'text-white hover:bg-white/20'}`}
        onClick={() => onTabChange('top')}
      >
        Top Movies
      </button>
      <button
        className={`text-lg font-semibold px-4 py-2 rounded transition-colors duration-150 ${activeTab === 'search' ? 'bg-emerald-300 text-neutral-900 shadow' : 'text-white hover:bg-white/20'}`}
        onClick={() => onTabChange('search')}
      >
        Search Movies
      </button>
    </div>
  </nav>
);

export default Navbar;
