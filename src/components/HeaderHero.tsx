import React from 'react';
import { ProductMockup } from './ProductMockup';
import { Sparkles, BookOpen, Printer, Monitor } from 'lucide-react';

export const HeaderHero: React.FC = () => {
  return (
    <header className="relative w-full bg-[#FAF8F5] border-b border-[#EBE5DB] py-3 sm:py-6 lg:py-16 min-h-[calc(100svh-44px)] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full my-auto">
        
        {/* Main Grid: Copy on left, Product highlight on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Simple explanation for a 7-year-old, No price, No buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-2.5 sm:space-y-4 order-2 lg:order-1 text-center lg:text-left">
            
            {/* Tag / Pretitle: ONLY ONCE in the header is Tamaño Carta mentioned as requested */}
            <div className="inline-flex items-center justify-center lg:justify-start self-center lg:self-start">
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#F0EAE1] text-[#7A4027] text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase border border-[#DFD5C5]">
                RUMBO 2027 · PLANNER IMPRIMIBLE EN TAMAÑO CARTA
              </span>
            </div>

            {/* Main Headline: Direct, shorter, focused on control and organization */}
            <h1 className="font-editorial text-xl sm:text-3xl lg:text-[42px] leading-[1.18] lg:leading-[1.12] text-[#191715] font-bold tracking-tight">
              La planificadora para llevar el control y{' '}
              <span className="italic font-normal text-[#8C4627]">
                organizar tu emprendimiento
              </span>
            </h1>

            {/* Subtitle: Simple, clear and aligned with control and organization */}
            <p className="text-xs sm:text-sm lg:text-base text-[#575249] leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
              La descargas, la imprimes y la tienes sobre tu mesa. Sin complicaciones ni programas difíciles: mantén tus prioridades claras y tu negocio siempre en orden.
            </p>

            {/* Mobile compact feature list (slim 2-row grid to fit in 1 mobile screen) */}
            <div className="grid grid-cols-2 gap-1.5 pt-1 lg:hidden text-left">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white border border-[#E8E0D2] shadow-2xs">
                <Printer className="w-3.5 h-3.5 text-[#8C4627] flex-shrink-0" />
                <span className="text-[11px] font-semibold text-[#1C1A18] truncate">Lista para imprimir</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white border border-[#E8E0D2] shadow-2xs">
                <BookOpen className="w-3.5 h-3.5 text-[#8C4627] flex-shrink-0" />
                <span className="text-[11px] font-semibold text-[#1C1A18] truncate">Escribe a mano</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white border border-[#E8E0D2] shadow-2xs">
                <Monitor className="w-3.5 h-3.5 text-[#8C4627] flex-shrink-0" />
                <span className="text-[11px] font-semibold text-[#1C1A18] truncate">Companion Digital</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white border border-[#E8E0D2] shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#8C4627] flex-shrink-0" />
                <span className="text-[11px] font-semibold text-[#1C1A18] truncate">Ruta paso a paso</span>
              </div>
            </div>

            {/* Feature Bullets in Simple Language (Visible on desktop screens) */}
            <div className="hidden lg:grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-[#E8E0D2] shadow-xs">
                <Printer className="w-5 h-5 text-[#8C4627] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1C1A18]">Lista para imprimir</h4>
                  <p className="text-[11px] text-[#6E675B] mt-0.5">
                    Lista para la impresora de tu casa o la papelería de tu barrio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-[#E8E0D2] shadow-xs">
                <BookOpen className="w-5 h-5 text-[#8C4627] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1C1A18]">Escribe a mano con calma</h4>
                  <p className="text-[11px] text-[#6E675B] mt-0.5">
                    Sin notificaciones ni pantallas que te distraigan del trabajo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-[#E8E0D2] shadow-xs">
                <Monitor className="w-5 h-5 text-[#8C4627] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1C1A18]">Herramienta Digital Companion</h4>
                  <p className="text-[11px] text-[#6E675B] mt-0.5">
                    Una herramienta en tu pantalla que hace las cuentas por ti.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-[#E8E0D2] shadow-xs">
                <Sparkles className="w-5 h-5 text-[#8C4627] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1C1A18]">Ruta Guiada Paso a Paso</h4>
                  <p className="text-[11px] text-[#6E675B] mt-0.5">
                    Vas marcando casillas hasta tener tus primeros clientes.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Highlighting Only the Product, Non-interactive, Simple */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <ProductMockup />
          </div>

        </div>
      </div>
    </header>
  );
};
