
import React from 'react';
import { Page } from '../types';

interface NavigationProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  return (
    <nav className="hidden lg:flex gap-8">
      {Object.values(Page).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`font-['Orbitron'] text-[10px] tracking-widest transition-all duration-300 relative group py-1 ${
            currentPage === page ? 'text-[#00e6e6]' : 'text-white/40 hover:text-white'
          }`}
        >
          {page}
          <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#00e6e6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
            currentPage === page ? 'scale-x-100' : ''
          }`} />
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
