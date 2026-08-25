import React from 'react';

interface NavbarProps {
  onOpenEstimate?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimate }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-xl border-b border-white/5 py-4 px-6 sm:px-12 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat tracking-tight text-brand hover:opacity-90 transition-opacity">
          tucsoft
        </a>

        <div className="hidden sm:flex items-center gap-6 md:gap-8">
          <a href="#services" className="text-sm font-medium text-bodyText hover:text-heading transition-colors">
            Servicios
          </a>
          <a href="#mission" className="text-sm font-medium text-bodyText hover:text-heading transition-colors">
            Misión & Visión
          </a>
          <a href="#coldtrack" className="text-sm font-medium text-bodyText hover:text-heading transition-colors">
            ColdTrack IoT
          </a>
          <a href="#work" className="text-sm font-medium text-bodyText hover:text-heading transition-colors">
            Proyectos
          </a>
        </div>

        <button
          onClick={onOpenEstimate}
          className="relative text-sm sm:text-base font-bold font-montserrat text-heading hover:text-brand transition-colors py-1 group"
        >
          Solicitar Presupuesto
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand transform scale-x-100 group-hover:scale-x-110 transition-transform origin-left" />
        </button>
      </div>
    </header>
  );
};
