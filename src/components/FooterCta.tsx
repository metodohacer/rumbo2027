import React from 'react';
import { ArrowRight, ShieldCheck, Download, Check, Sparkles } from 'lucide-react';
import { HOTMART_CHECKOUT_URL } from '../data/copyData';

interface FooterCtaProps {
  onBuyClick?: () => void;
  onOpenDeliverables?: () => void;
}

export const FooterCta: React.FC<FooterCtaProps> = ({ onOpenDeliverables }) => {
  const deliverables = [
    'Planificadora RUMBO 2027 Imprimible (PDF de Alta Resolución).',
    'Acceso directo a la Herramienta Digital Companion con Roadmap guiado.',
    'Bono de Arranque Inmediato para comenzar hoy mismo.',
    'Licencia de impresión ilimitada de por vida para tu uso personal.',
    'Garantía total de satisfacción por 7 días.',
  ];

  return (
    <footer className="relative bg-[#1A1816] text-[#FAF8F5] pt-16 pb-24 sm:pb-20 border-t border-[#36322D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A2622] text-[#C9A97A] text-xs font-mono font-bold mb-6 border border-[#443E38]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tu Proyecto en Orden</span>
        </div>

        {/* Big Final Headline */}
        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
          Comienza hoy a darle rumbo claro a tu negocio con RUMBO 2027.
        </h2>

        {/* Simple & encouraging copy */}
        <p className="text-sm sm:text-base text-[#B8AFA2] mt-4 max-w-2xl mx-auto leading-relaxed font-sans">
          Descarga tus archivos, imprime tu planner sobre tu mesa, abre tu herramienta <strong>Companion</strong> y avanza con tranquilidad paso a paso.
        </p>

        {/* Deliverables List */}
        <div className="my-8 max-w-xl mx-auto text-left bg-[#24201C] p-5 sm:p-6 rounded-2xl border border-[#3E3830] space-y-2.5">
          <div className="text-xs font-mono text-[#C9A97A] font-bold uppercase tracking-wider mb-2">
            Entregables incluidos con tu descarga:
          </div>
          {deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#DDD5C7]">
              <Check className="w-4 h-4 text-emerald-400 stroke-[2.5] flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#E03A14] hover:bg-[#C9300D] text-white font-sans font-bold text-xs sm:text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 sm:gap-3 uppercase tracking-normal sm:tracking-wide text-center"
          >
            <span className="leading-snug break-words">QUIERO DESCARGAR MI RUMBO 2027 POR $5USD</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          </a>
        </div>

        {/* Micro guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-xs text-[#8F8679] font-mono">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Garantía de 7 días
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5 text-[#C9A97A]" />
            Descarga inmediata tras tu pago
          </span>
          <span>•</span>
          <span>Sin suscripciones mensuales</span>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#2F2B27] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7265]">
          <p>© {new Date().getFullYear()} RUMBO 2027 · Planificadora Imprimible + Herramienta Companion.</p>

          {onOpenDeliverables && (
            <button
              type="button"
              onClick={onOpenDeliverables}
              className="px-3 py-1 rounded-lg bg-[#27231F] hover:bg-[#38332C] text-[#C9A97A] border border-[#3E3831] font-mono text-[11px] transition-all cursor-pointer"
            >
              📋 Ver Ficha Técnica
            </button>
          )}
        </div>

      </div>
    </footer>
  );
};
