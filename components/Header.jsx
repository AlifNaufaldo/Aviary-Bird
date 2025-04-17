'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Header({ isDesktop }) {
  const navItems = ['Beranda', 'Lindungi Burung', 'Donasi', 'Pemantauan Live'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return isDesktop ? (  
    <header className="w-full bg-white border-b p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
        <Image 
            src="/aviary-bird-logo.png" 
            width={30} 
            height={30} 
            alt="Logo" 
            style={{ filter: 'invert(32%) sepia(100%) saturate(3746%) hue-rotate(186deg)' }} 
          />

          <div className="flex flex-col leading-tight">
            <span className="font-bold text-black text-sm">Aviary</span>
            <span className="font-bold text-black text-sm">Bird</span>
          </div>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className="font-bold text-black hover:text-gray-900"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex space-x-2">
          <button className="px-4 py-1 border border-black text-black rounded-2xl text-sm cursor-pointer">
            Our Work
          </button>
          <button className="px-4 py-1 border border-black text-black rounded-2xl text-sm cursor-pointer">
            Get Involved
          </button>
        </div>
      </div>
    </header>
  ) : (
    <header className="w-full bg-white p-4 relative flex justify-between items-center md:hidden">
    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
      <Image 
        src="/aviary-bird-logo.png" 
        width={24} 
        height={24} 
        alt="Logo" 
      />
      <span className="font-semibold text-sm text-gray-700">
        Aviary Bird
      </span>
    </div>
    <button 
      className="text-gray-700 z-20"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
        className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" 
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
    {isMenuOpen && (
      <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 z-10">
        <ul className="flex flex-col space-y-2">
          <li><a href="#" className="text-sm font-semibold text-gray-800">Beranda</a></li>
          <li><a href="#" className="text-sm font-semibold text-gray-800">Lindungi Burung</a></li>
          <li><a href="#" className="text-sm font-semibold text-gray-800">Donasi</a></li>
          <li><a href="#" className="text-sm font-semibold text-gray-800">Pemantauan Live</a></li>
        </ul>
      </div>
    )}
  </header>
)
}