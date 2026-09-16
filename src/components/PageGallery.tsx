import React, { useState } from 'react';
import { PLANNER_SHEETS } from '../data/copyData';
import { PlannerSheet } from '../types';
import { Eye, ZoomIn } from 'lucide-react';
import { PrintableSheetVector } from './PrintableSheetVector';

interface PageGalleryProps {
  onSelectSheet: (sheet: PlannerSheet) => void;
  onBuyClick?: () => void;
}

const SheetCardCanvas: React.FC<{ sheet: PlannerSheet; onClick: () => void }> = ({ sheet, onClick }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      onClick={onClick}
      className="relative bg-gradient-to-b from-[#FAF8F5] to-[#F0EBE1] p-3 sm:p-4 aspect-[4/3.2] flex flex-col justify-between border-b border-[#E8E1D4] cursor-pointer overflow-hidden group"
    >
      {sheet.image && !imgFailed ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={sheet.image}
            alt={sheet.title}
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-contain drop-shadow-md rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      ) : (
        <PrintableSheetVector sheet={sheet} className="drop-shadow-md group-hover:scale-[1.02] transition-transform duration-300" />
      )}

      {/* Hover overlay hint */}
      <div className="absolute inset-0 bg-[#1A1816]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[1px]">
        <span className="px-3 py-1.5 rounded-full bg-white text-[#1A1816] text-xs font-semibold shadow-lg flex items-center gap-1.5">
          <ZoomIn className="w-3.5 h-3.5 text-[#8C4627]" />
          Ver Hoja en Grande
        </span>
      </div>
    </div>
  );
};

export const PageGallery: React.FC<PageGalleryProps> = ({ onSelectSheet }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Planificación', 'Contenido', 'Finanzas', 'Estrategia', 'Estructura'];

  const filteredSheets = activeFilter === 'Todos'
    ? PLANNER_SHEETS
    : PLANNER_SHEETS.filter(s => s.category === activeFilter);

  return (
    <section id="galeria-paginas" className="py-12 sm:py-16 bg-[#F5F2EC] border-b border-[#E3DBD0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#855038] bg-[#EAE2D5] px-3.5 py-1 rounded-full border border-[#D9CEBF] font-bold">
            Explora el Interior · Hojas Listas para Imprimir
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#1A1816] font-bold mt-3 tracking-tight">
            Cada hoja tiene un solo propósito: <br />
            <span className="italic font-normal text-[#8C4627]">hacer avanzar tu negocio hoy</span>
          </h2>
          <p className="text-sm text-[#615B52] mt-2 font-sans leading-relaxed">
            Hojas limpias, claras y fáciles de entender. Diseñadas para imprimir fácilmente en cualquier impresora común o papelería y tenerlas siempre sobre tu mesa.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#1C1A18] text-white shadow-sm font-semibold'
                  : 'bg-white text-[#635D53] border border-[#DDD5C7] hover:bg-[#EBE5DB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Visual Sheets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSheets.map((sheet) => (
            <div
              key={sheet.id}
              className="bg-white rounded-2xl border border-[#DED6C7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Visual Sheet Preview Canvas */}
              <SheetCardCanvas sheet={sheet} onClick={() => onSelectSheet(sheet)} />

              {/* Sheet Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold text-[#804832] font-sans mb-1">
                    {sheet.tagline}
                  </p>
                  <p className="text-xs text-[#5C564D] leading-relaxed line-clamp-2">
                    {sheet.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EFE9DF] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectSheet(sheet)}
                    className="text-xs text-[#1C1A18] font-semibold hover:text-[#A45532] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Ver hoja completa
                  </button>
                  <span className="text-[10px] font-mono text-[#7A4027] bg-[#F2EDE4] px-2 py-0.5 rounded font-bold">
                    FORMATO PDF
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
