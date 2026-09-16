import React from 'react';
import { HOTMART_CHECKOUT_URL } from '../data/copyData';
import { Layers, Smartphone, Zap, ShieldCheck, ArrowRight, Lock, Sparkles } from 'lucide-react';

interface StackValueSectionProps {
  onBuyClick?: () => void;
}

export const StackValueSection: React.FC<StackValueSectionProps> = ({ onBuyClick }) => {
  const deliverables = [
    {
      icon: Layers,
      title: 'Planner Rumbo 2027',
      subtitle: 'PDF digital listo para imprimir',
      price: '$27',
    },
    {
      icon: Smartphone,
      title: 'Bono: Companion',
      subtitle: 'Herramienta digital complementaria',
      price: '$25',
    },
    {
      icon: Zap,
      title: 'Bono: Complemento de Arranque Inmediato',
      subtitle: 'Empieza desde ahora con hojas de inicio rápido',
      price: '$15',
    },
    {
      icon: ShieldCheck,
      title: 'Licencia de Impresión Ilimitada & Garantía 7 días',
      subtitle: 'Acceso de por vida sin vencimiento',
      price: '$10',
    },
  ];

  return (
    <section id="oferta" className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#9E532D] bg-[#F2EAE0] px-3.5 py-1 rounded-full border border-[#DFD4C5] font-bold">
            Resumen de la Oferta Completa
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#191715] font-bold mt-4 tracking-tight">
            Todo lo que recibes hoy
          </h2>
        </div>

        {/* 2-Column Presentation: Large Image on Left + Styled Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Much Bigger Product Stack Mockup (Appears FIRST on mobile right below the header) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1">
            <div className="relative w-full max-w-[540px] flex items-center justify-center group">
              <img
                src="/13.png"
                alt="Todo lo que incluye RUMBO 2027"
                referrerPolicy="no-referrer"
                loading="eager"
                onError={(e) => {
                  if (e.currentTarget.src !== window.location.origin + '/13.png') {
                    e.currentTarget.src = '/13.png';
                  }
                }}
                className="w-full h-auto object-contain max-h-[540px] sm:max-h-[600px] drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <p className="text-xs text-[#7A7265] text-center mt-4 font-mono">
              Descarga inmediata en PDF + Acceso a la herramienta Companion
            </p>
          </div>

          {/* Right Column: White Structured Card (Appears SECOND on mobile after the image) */}
          <div className="lg:col-span-6 order-2">
            <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#E5DDD0] shadow-xl space-y-6">

              {/* Card Header */}
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#9E532D]">
                  RUMBO 2027 · EDICIÓN DIGITAL
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#1A1816] font-bold mt-2 leading-tight">
                  Todo lo que necesitas para dejar de postergar tu idea.
                </h3>
              </div>

              {/* Deliverables List with tinted icon boxes */}
              <div className="divide-y divide-[#F0EAE1] pt-1">
                {deliverables.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-[#FAF2EB] border border-[#EFE3D5] flex items-center justify-center flex-shrink-0 text-[#9E532D]">
                          <Icon className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-xs sm:text-sm text-[#1C1A18] leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-[#6E6659] truncate">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold font-mono text-[#3D3730] flex-shrink-0 pl-2">
                        {item.price}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Pricing Section: Centered, $77 USD first, then big $5 USD below */}
              <div className="pt-4 border-t border-[#ECE4D8] text-center flex flex-col items-center justify-center gap-1">
                <span className="text-xs sm:text-sm text-[#7A7164]">
                  Valor total:{' '}
                  <span className="font-mono text-sm sm:text-base line-through text-[#999083]">
                    $77 USD
                  </span>
                </span>
                <div className="text-5xl sm:text-6xl font-editorial font-bold text-[#E03A14] tracking-tight leading-none mt-1">
                  $5 <span className="text-base sm:text-lg font-sans font-bold text-[#7A7164]">USD</span>
                </div>
              </div>

              {/* CTA Button: Hotmart URL with responsive text that wraps cleanly on mobile without overflowing */}
              <a
                id="stack-buy-button"
                href={HOTMART_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onBuyClick}
                className="w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 px-3 sm:px-6 rounded-2xl bg-[#E03A14] hover:bg-[#C9300D] text-white font-sans font-bold text-xs sm:text-sm md:text-base shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] cursor-pointer text-center uppercase tracking-normal sm:tracking-wide"
              >
                <span className="leading-snug break-words">QUIERO DESCARGAR MI RUMBO 2027 POR $5USD</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </a>

              {/* Lifetime access and subscription note */}
              <p className="text-xs sm:text-sm text-[#615B52] text-center font-medium">
                Sin suscripciones mensuales. Acceso de por vida a todo el sistema RUMBO 2027.
              </p>

              {/* Security & Access note with Lock icon */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#696256] pt-1">
                <Lock className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>Compra segura a través de Hotmart · acceso inmediato</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
