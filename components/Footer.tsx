
import React from 'react';

interface FooterProps {
  designerName: string;
}

const Footer: React.FC<FooterProps> = ({ designerName }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} {designerName}. All rights reserved.
        </p>
        <p className="text-slate-500 text-xs mt-2">
          Powered by Creativity & Code
        </p>
      </div>
    </footer>
  );
};

export default Footer;
