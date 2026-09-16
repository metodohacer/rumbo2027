import React, { useState } from 'react';
import { PlannerSheet } from '../types';
import { Printer, ArrowRight, X, ZoomIn } from 'lucide-react';
import { PrintableSheetVector } from './PrintableSheetVector';

interface SheetDetailModalProps {
  sheet: PlannerSheet | null;
  onClose: () => void;
  onBuyClick: () => void;
}

export const SheetDetailModal: React.FC<SheetDetailModalProps> = ({
  sheet,
  onClose,
  onBuyClick,
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  if (!sheet) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl border border-[#D5CBB9] relative my-auto space-y-5">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[#E8DFC2] pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase bg-[#EFE8DD] text-[#7A452D] px-2 py-0.5 rounded font-bold">
                {sheet.category}
              </span>
              {sheet.badge && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                  {sheet.badge}
                </span>
              )}
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1A1816] mt-1">
              {sheet.title}
            </h3>
            <p className="text-xs text-[#7A452D] font-medium font-sans">
              {sheet.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#EFE8DC] hover:bg-[#DDD3C2] text-[#1A1816] flex items-center justify-center font-bold text-sm cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Visual Sheet Preview (Image or Vector) */}
        <div className="w-full rounded-2xl overflow-hidden bg-[#ECE6DA] p-3 sm:p-4 flex items-center justify-center border border-[#D8CFBF]">
          {sheet.image && !imgFailed ? (
            <img
              src={sheet.image}
              alt={sheet.title}
              referrerPolicy="no-referrer"
              onError={() => setImgFailed(true)}
              className="max-h-[50vh] sm:max-h-[55vh] w-auto object-contain rounded-lg shadow-md"
            />
          ) : (
            <div className="w-full max-w-sm aspect-[4/5]">
              <PrintableSheetVector sheet={sheet} isDetail />
            </div>
          )}
        </div>

        {/* Paper Sheet Preview in High Detail */}
        <div className="bg-white rounded-2xl border border-[#D8CFC0] p-5 shadow-sm space-y-4">
          <p className="text-xs sm:text-sm text-[#575147] leading-relaxed">
            {sheet.description}
          </p>

          <div className="space-y-4 pt-2">
            {sheet.sections.map((sec, idx) => (
              <div key={idx} className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EADBCC] space-y-2">
                <h4 className="text-xs font-bold text-[#1A1816] font-sans flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#A45532]" />
                  {sec.title}
                </h4>
                <div className="space-y-1.5">
                  {sec.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center gap-2 text-xs text-[#403B33] bg-white p-2 rounded-lg border border-[#EDE5DA]"
                    >
                      <div className="w-3.5 h-3.5 rounded border border-[#9E9484] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {sheet.quote && (
            <div className="p-3 rounded-xl bg-[#FAF3EB] border border-[#EBD6C3] text-center text-xs text-[#7A4027] font-editorial italic">
              {sheet.quote}
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
          <div className="text-xs text-[#6E675A] font-mono flex items-center gap-2">
            <Printer className="w-3.5 h-3.5 text-[#8C4627]" />
            <span className="font-bold text-[#7A4027]">Formato en PDF listo para imprimir</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#EFE8DD] hover:bg-[#E3D8CA] text-xs font-semibold text-[#1A1816] cursor-pointer"
            >
              Cerrar
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBuyClick();
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#E03A14] hover:bg-[#C9300D] text-white text-xs font-bold shadow-md cursor-pointer flex items-center justify-center gap-1.5 uppercase"
            >
              <span>QUIERO DESCARGAR MI RUMBO 2027 POR $5USD</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
