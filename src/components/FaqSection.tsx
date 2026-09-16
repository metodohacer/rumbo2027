import React, { useState } from 'react';
import { FAQS, HOTMART_CHECKOUT_URL } from '../data/copyData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onBuyClick?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onBuyClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE8DD] text-[#7A452D] text-xs font-mono font-bold mb-3 border border-[#DDD3C2]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#1A1816] font-bold tracking-tight">
            Todo lo que necesitas saber
          </h2>
          <p className="text-xs sm:text-sm text-[#5E584E] mt-2">
            Respuestas sencillas y directas para que comiences con total tranquilidad.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#C4B7A5] shadow-sm'
                    : 'bg-white/80 border-[#E5DDD0] hover:border-[#D5C9B8]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-[#8C8476] bg-[#F2EDE4] px-2 py-0.5 rounded font-bold">
                      0{index + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#1A1816] font-sans">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#7A7163] transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#E03A14]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#575147] leading-relaxed border-t border-[#F2ECE1] bg-[#FAF8F5]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section Closing Box with CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#1F1C1A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5D2B3] font-bold">
              RUMBO 2027 · SISTEMA COMPLETO
            </span>
            <h3 className="font-editorial text-2xl font-bold">
              ¿Listo para ordenar tu emprendimiento?
            </h3>
            <p className="text-xs text-[#B5ADA0] max-w-md">
              Por solo $5 USD recibes la planificadora imprimible, la herramienta Companion y todos los bonos con 7 días de garantía.
            </p>
          </div>

          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-[#E03A14] hover:bg-[#C9300D] text-white font-sans font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 uppercase tracking-normal sm:tracking-wide text-center"
          >
            <span className="leading-snug break-words">QUIERO DESCARGAR MI RUMBO 2027 POR $5USD</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};
