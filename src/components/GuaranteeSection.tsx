import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface GuaranteeSectionProps {
  onBuyClick?: () => void;
  customSealUrl?: string;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ customSealUrl }) => {
  return (
    <section id="garantia" className="py-14 sm:py-20 bg-[#F5F2EB] border-t border-[#E3DBD0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl border border-[#DDD5C7] shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Information of the guarantee */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF3EC] text-[#8C4627] text-xs font-mono font-bold border border-[#EADBCC]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Garantía de Satisfacción por 7 Días</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl text-[#1A1816] font-bold leading-tight">
                Pruébalo durante 7 días. <br />
                <span className="italic font-normal text-[#8C4627]">Sin ningún riesgo para ti.</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#575147] leading-relaxed font-sans">
                Queremos que pruebes <strong>RUMBO 2027</strong> con total tranquilidad en tu escritorio:
              </p>

              <div className="p-4 sm:p-5 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC2] space-y-2 text-xs sm:text-sm text-[#3E3932] leading-relaxed">
                <p>
                  <strong>Descargas tu planner hoy</strong>, lo imprimes fácilmente, abres la herramienta digital <strong>Companion</strong> y comienzas a marcar tus primeros pasos.
                </p>
                <p>
                  Si en los próximos 7 días sientes que <strong>RUMBO 2027</strong> no te ayuda a dar los pasos correctos, o decides que no es para ti por cualquier motivo, <strong>te devolvemos el 100% de tu dinero</strong> de inmediato.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#6E675B] italic pt-1">
                * Tu compra está 100% protegida. No tienes nada que perder.
              </p>
            </div>

            {/* Right Column: Enriched & Larger 7-Day Guarantee Seal Badge */}
            <div className="md:col-span-5 flex flex-col items-center justify-center py-2">
              {customSealUrl ? (
                <img
                  src={customSealUrl}
                  alt="Sello de Garantía 7 Días"
                  className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-xl"
                />
              ) : (
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                  {/* Outer decorative dashed ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#C9A97A]/70 animate-[spin_60s_linear_infinite]" />
                  
                  {/* Outer solid luxury ring */}
                  <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-tr from-[#1E1C1A] via-[#2D2A26] to-[#1E1C1A] p-2.5 shadow-2xl flex items-center justify-center border-2 border-[#D8BE96]">
                    
                    {/* Inner gold embossed seal */}
                    <div className="w-full h-full rounded-full border-2 border-[#D8BE96]/60 bg-gradient-to-b from-[#FAF7F2] via-[#F3EDE3] to-[#E8DFC8] flex flex-col items-center justify-center p-4 text-center shadow-inner relative overflow-hidden">
                      
                      <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#735A38] font-bold">
                        100% SEGURO
                      </span>

                      {/* Large 7 */}
                      <div className="font-editorial text-6xl sm:text-7xl lg:text-8xl font-bold text-[#1A1816] leading-none my-1 flex items-baseline">
                        <span>7</span>
                        <span className="text-sm sm:text-base uppercase font-sans font-bold tracking-wider text-[#8C4627] ml-1.5">
                          DÍAS
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-[#1A1816] leading-tight">
                        GARANTÍA <br />
                        <span className="text-[#8C4627]">TOTAL</span>
                      </div>

                      <div className="text-[9px] sm:text-[10px] font-mono text-[#7A6F62] mt-2 uppercase tracking-wider border-t border-[#D5C9B8] pt-1.5 w-4/5 font-semibold">
                        REEMBOLSO 100%
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
