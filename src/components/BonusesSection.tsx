import React from 'react';
import { BONUSES } from '../data/copyData';
import { Gift, Check, Smartphone } from 'lucide-react';

interface BonusesSectionProps {
  onBuyClick?: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = () => {
  const bono1 = BONUSES[0];
  const bono2 = BONUSES[1];

  return (
    <section id="bonos" className="py-14 sm:py-20 bg-[#F5F2EC] border-y border-[#E3DBD0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAE2D4] text-[#804832] text-xs font-mono font-bold border border-[#D9CEBF] mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>2 Regalos Especiales Incluidos Gratis</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#1A1816] font-bold tracking-tight">
            Herramientas fáciles que <br />
            <span className="italic font-normal text-[#8C4627]">acompañan tu planner RUMBO 2027</span>
          </h2>
          <p className="text-sm text-[#5E584F] mt-2">
            No son cosas complicadas. Son herramientas sencillas para que avances rápido y sin dudas.
          </p>
        </div>

        <div className="space-y-10">

          {/* Bono 1: Herramienta Digital Companion */}
          <div className="bg-white rounded-3xl border border-[#DCD3C4] shadow-sm p-6 sm:p-8 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Column: Bono Details & Copy */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A45532] bg-[#FAF3EB] px-3 py-1 rounded-full border border-[#E8DACB]">
                    {bono1.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono">
                    <span className="text-[#877E71] line-through">Valor: {bono1.realValue}</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      GRATIS HOY
                    </span>
                  </div>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#191715] leading-tight">
                  {bono1.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#8C4627]">
                  {bono1.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#575147] leading-relaxed font-sans">
                  {bono1.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 pt-2 text-xs text-[#403B34]">
                  {bono1.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Up-Close Expanded Video Showcase (No phone-in-phone, zoomed in) */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center relative py-2 sm:py-4">
                
                {/* Clean, Expanded Video Display with Up-Close Zoom */}
                <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#DCD3C4] bg-white group">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/_j4sbCoTwzU?autoplay=1&mute=1&loop=1&playlist=_j4sbCoTwzU&playsinline=1&controls=1&rel=0&modestbranding=1"
                    title="Herramienta Companion · Rumbo 2027"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0 scale-[1.15] origin-center transition-transform duration-300"
                  />
                </div>

                {/* Subtitle note */}
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#7A7163] font-medium text-center">
                  <Smartphone className="w-3.5 h-3.5 text-[#A45532] flex-shrink-0" />
                  <span>Demostración de la Herramienta Companion en detalle</span>
                </div>

              </div>

            </div>
          </div>

          {/* Bono 2: Complemento de Arranque Inmediato */}
          <div className="bg-white rounded-3xl border border-[#DCD3C4] shadow-sm p-6 sm:p-8 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Column: Image for Bono 2 */}
              <div className="lg:col-span-6 order-2 lg:order-1 flex items-center justify-center">
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-[#E0D7C8] shadow-md bg-white p-3 sm:p-4 flex items-center justify-center">
                  <img
                    src={bono2.image || "https://i.postimg.cc/W3wpn31G/Creativo.png"}
                    alt="Complemento de Arranque Inmediato"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    onError={(e) => {
                      if (e.currentTarget.src !== window.location.origin + '/Creativo.png') {
                        e.currentTarget.src = '/Creativo.png';
                      }
                    }}
                    className="w-full h-auto object-contain rounded-xl max-h-[420px] transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Right Column: Copy & Details */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A45532] bg-[#FAF3EB] px-3 py-1 rounded-full border border-[#E8DACB]">
                    {bono2.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono">
                    <span className="text-[#877E71] line-through">Valor: {bono2.realValue}</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      GRATIS HOY
                    </span>
                  </div>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#191715] leading-tight">
                  {bono2.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#8C4627]">
                  {bono2.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#575147] leading-relaxed font-sans">
                  {bono2.description}
                </p>

                {bono2.features && bono2.features.length > 0 && (
                  <ul className="space-y-2 pt-2 text-xs text-[#403B34]">
                    {bono2.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="pt-3 border-t border-[#EFE8DE] flex items-center justify-between">
                  <span className="text-xs text-[#6B6357]">
                    Imprimible en PDF · Se entrega de inmediato.
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
