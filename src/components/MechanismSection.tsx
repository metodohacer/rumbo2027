import React from 'react';
import { UNIQUE_MECHANISM } from '../data/copyData';
import { ArrowRight, Check, X, Sparkles, Brain, Compass, BookOpen, Layers } from 'lucide-react';

interface MechanismSectionProps {
  onBuyClick: () => void;
}

export const MechanismSection: React.FC<MechanismSectionProps> = ({ onBuyClick }) => {
  return (
    <section id="mecanismo" className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[#9E532D] bg-[#F2EAE0] px-3.5 py-1 rounded-full border border-[#DFD4C5]">
            La Ciencia Detrás del Resultado
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#191715] font-bold mt-4 tracking-tight leading-tight">
            Por qué los métodos comunes fallan... y por qué el{' '}
            <span className="italic font-normal underline decoration-[#C26D45]/40 decoration-2 underline-offset-4">
              Sistema Rumbo Dual™
            </span>{' '}
            funciona
          </h2>
          <p className="text-sm sm:text-base text-[#57524A] mt-3 font-sans leading-relaxed">
            No necesitas más motivación ni otra app con 80 funciones. Necesitas un entorno donde tu cerebro pueda pensar sin ruido y ejecutar sin dudar.
          </p>
        </div>

        {/* The 3-Way Comparison: The Real Reason It Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Failure Pattern 1: Apps & Digital Overload */}
          <div className="p-6 rounded-2xl bg-white border border-[#E8E1D5] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mb-4">
                <X className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#1C1A18] mb-2">
                1. El Caos Digital
              </h3>
              <p className="text-xs text-[#615A50] leading-relaxed mb-4">
                Notion, Asana, Excel y notas en el celular. Terminas abriendo la pantalla para trabajar y terminas consumiendo contenido en redes sociales.
              </p>
              <ul className="space-y-2 text-xs text-[#524D44]">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Sobrecarga cognitiva y fatiga visual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Constantes notificaciones y distracciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Pasas horas configurando en vez de vender</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-[#F0EAE0] text-[11px] font-mono text-rose-700">
              Resultado: Procrastinación disfrazada
            </div>
          </div>

          {/* Failure Pattern 2: Blank Planners */}
          <div className="p-6 rounded-2xl bg-white border border-[#E8E1D5] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-4">
                <X className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#1C1A18] mb-2">
                2. Planners en Blanco
              </h3>
              <p className="text-xs text-[#615A50] leading-relaxed mb-4">
                Comprar una libreta bonita o agenda genérica con hojas en blanco. Los primeros tres días la usas y luego queda en el cajón porque no te dice qué hacer.
              </p>
              <ul className="space-y-2 text-xs text-[#524D44]">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✕</span>
                  <span>Hojas vacías sin estructura de negocio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✕</span>
                  <span>Te preguntas a diario: “¿Y ahora qué?”</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✕</span>
                  <span>Llenas casillas de tareas que no generan caja</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-[#F0EAE0] text-[11px] font-mono text-amber-800">
              Resultado: Abandono a los pocos días
            </div>
          </div>

          {/* The Unique Mechanism: Rumbo Dual */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#FAF7F0] to-[#EFE8DC] border-2 border-[#A45532] shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 bg-[#A45532] text-white text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full font-bold">
              Mecanismo Único
            </div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#A45532] text-white flex items-center justify-center mb-4 shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#1C1A18] mb-2">
                3. Sistema Rumbo Dual™
              </h3>
              <p className="text-xs text-[#575045] leading-relaxed mb-4">
                La combinación exacta entre <strong>claridad táctil en papel</strong> para tu foco diario y la <strong>guía interactiva Companion</strong> para estructurar y calcular sin dudas.
              </p>
              <ul className="space-y-2 text-xs text-[#38332C] font-medium">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 stroke-[2.5] flex-shrink-0" />
                  <span>El papel activa retención y foco sin distracciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 stroke-[2.5] flex-shrink-0" />
                  <span>Roadmap guiado: sabes exactamente qué paso dar hoy</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 stroke-[2.5] flex-shrink-0" />
                  <span>Companion resuelve cálculos de costos y márgenes</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-[#DDD3C2] text-[11px] font-mono text-[#8C4627] font-bold">
              Resultado: Claridad total y tracción diaria
            </div>
          </div>

        </div>

        {/* Mechanism Visual Diagram: The Synergy */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DDD5C7] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7A452D] bg-[#F7EFE6] px-3 py-1 rounded-md">
                <Compass className="w-3.5 h-3.5" />
                <span>¿Por qué ambos forman parte del mismo sistema?</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#191715] leading-tight">
                Tu mesa es para pensar y registrar. <br />
                Tu pantalla es para resolver y guiar.
              </h3>
              <p className="text-xs sm:text-sm text-[#5C564C] leading-relaxed font-sans">
                Companion no reemplaza tu planner; lo potencia. Mientras el PDF impreso es tu espacio sagrado de calma y compromiso donde anotas tus metas semanales y tareas de impacto con pluma, la herramienta digital Companion te acompaña con fórmulas pre-programadas, el Roadmap de Estructuración paso a paso y la ficha guiada de cliente ideal.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#FAF8F4] rounded-xl border border-[#E8E1D5]">
                  <div className="text-xs font-bold text-[#1A1918] mb-1 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#A45532]" />
                    Planner Físico
                  </div>
                  <p className="text-[11px] text-[#696256]">
                    Espacio de registro, foco profundo matutino y seguimiento de hábitos sin pantallas.
                  </p>
                </div>
                <div className="p-3 bg-[#FAF8F4] rounded-xl border border-[#E8E1D5]">
                  <div className="text-xs font-bold text-[#1A1918] mb-1 flex items-center gap-1.5">
                    <Brain className="w-3.5 h-3.5 text-emerald-700" />
                    Companion Digital
                  </div>
                  <p className="text-[11px] text-[#696256]">
                    Roadmap secuencial, calculadora de precios y base de datos de tu cliente ideal.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Synergy Card */}
            <div className="bg-[#FAF7F1] p-5 sm:p-6 rounded-2xl border border-[#E0D7CA] flex flex-col justify-between">
              <div className="text-xs font-mono uppercase text-[#736B5E] mb-3 border-b border-[#E8DFC2] pb-2 flex justify-between items-center">
                <span>Transformación tangible</span>
                <span className="text-emerald-800 font-semibold">Garantizada en 7 Días</span>
              </div>

              <div className="space-y-3 my-2">
                <div className="flex items-start gap-3 p-2.5 bg-white rounded-xl border border-[#E3D9CC]">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#191715]">Claridad absoluta de tus cimientos</h4>
                    <p className="text-[11px] text-[#5C564D]">
                      En menos de 48 horas defines el nombre, tu propuesta única y a quién vas a venderle.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 bg-white rounded-xl border border-[#E3D9CC]">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#191715]">Precios con margen real sin miedo</h4>
                    <p className="text-[11px] text-[#5C564D]">
                      Sabes con exactitud matemática cuánto cobrar y cuántos clientes necesitas cada mes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 bg-white rounded-xl border border-[#E3D9CC]">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#191715]">Adiós a la parálisis matutina</h4>
                    <p className="text-[11px] text-[#5C564D]">
                      Te sientas en tu escritorio y sabes de inmediato cuáles son tus 3 tareas clave del día.
                    </p>
                  </div>
                </div>
              </div>

              {/* Micro CTA */}
              <div className="mt-4 pt-3 border-t border-[#E8DFC2] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-[#635C52]">
                  Acceso completo por <strong className="text-[#191715] font-mono text-sm">$5 USD</strong>
                </div>
                <button
                  type="button"
                  onClick={onBuyClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#A45532] hover:bg-[#8C4627] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  <span>Probar el Sistema Dual Hoy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
