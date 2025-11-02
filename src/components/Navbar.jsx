import React from 'react';
import { ShoppingBag, User, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#A020F0] to-[#00FFFF] shadow-[0_0_20px_#A020F0]" />
            <span className="text-xl font-extrabold tracking-widest">ALONZO.CO</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm uppercase tracking-widest hover:text-[#00FFFF] transition" href="#shop">Shop</a>
            <a className="text-sm uppercase tracking-widest hover:text-[#00FFFF] transition" href="#customize">Customize</a>
            <a className="text-sm uppercase tracking-widest hover:text-[#00FFFF] transition" href="#lookbook">Lookbook</a>
            <a className="text-sm uppercase tracking-widest hover:text-[#00FFFF] transition" href="#about">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button aria-label="Account" className="p-2 rounded-full hover:bg-white/5">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="relative p-2 rounded-full hover:bg-white/5">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 h-4 min-w-[16px] px-1 rounded-full bg-[#A020F0] text-[10px] flex items-center justify-center">2</span>
            </button>
            <button aria-label="Menu" className="md:hidden p-2 rounded-full hover:bg-white/5">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
