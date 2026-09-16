import React, { useState } from 'react';
import { UNIQUE_MECHANISM, OPTIMIZED_HEADLINE, SEO_DATA, IDEAL_CUSTOMER_PROFILE, FAQS } from '../data/copyData';
import { Copy, Check, X, FileText, Sparkles, User, Search, Target } from 'lucide-react';

interface CopyDeliverablesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CopyDeliverablesModal: React.FC<CopyDeliverablesModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'mecanismo' | 'titular' | 'avatar' | 'seo' | 'copyCompleto'>('mecanismo');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const copyCompletoMarkdown = `
# COPY COMPLETO DE LA PÁGINA DE VENTAS · RUMBO 2027

---
## 1. HEADER (PORTADA)
**Pre-titular:** ${OPTIMIZED_HEADLINE.pretitle}
**Titular:** ${OPTIMIZED_HEADLINE.title}
**Subtítulo:** ${OPTIMIZED_HEADLINE.subtitle}
**Micro-beneficios:** Descarga en PDF de Alta Resolución · Escribe a mano · Incluye Herramienta Companion · Paso a paso sin enredos

---
## 2. EL SISTEMA RUMBO 2027
**Nombre:** ${UNIQUE_MECHANISM.name}
**Concepto simple:** ${UNIQUE_MECHANISM.concept}

---
## 3. BONOS INCLUIDOS (x2)
**Bono 1: Herramienta Digital Companion (Valor: $25 USD - GRATIS HOY)**
Companion acompaña la experiencia de RUMBO 2027. Mientras el PDF impreso es tu espacio para pensar y escribir con calma, la herramienta digital te ayuda con los cálculos y la ruta guiada en pestañas limpias.
Incluye: Roadmap de Estructuración del Negocio, Calculadora de Costos/Precios y Barra de Progreso.

**Bono 2: Complemento de Arranque Inmediato (Valor: $15 USD - GRATIS HOY)**
Hojas listas para imprimir para arrancar hoy mismo sin tener que esperar.

---
## 4. OFERTA / DESGLOSE
- RUMBO 2027 Imprimible (Edición Completa en PDF) - Valor: $27 USD
- Bono 1: Herramienta Digital Companion con Roadmap Guiado - Valor: $25 USD
- Bono 2: Complemento de Arranque Inmediato - Valor: $15 USD
- Licencia de Impresión Ilimitada de por Vida - Valor: $10 USD
- Garantía Total de Satisfacción por 7 Días - Invaluable
**VALOR TOTAL: $77 USD**
**PRECIO ESPECIAL HOY: $5 USD (Pago único)**
**CTA:** "QUIERO DESCARGAR MI RUMBO 2027 POR $5USD"

---
## 5. GARANTÍA DE 7 DÍAS
"Pruébalo durante 7 días. Sin ningún riesgo para ti."
Descargas el planner, lo imprimes, abres Companion y lo pruebas durante 7 días. Si no te convence, te devolvemos el 100% de tu dinero sin preguntas.
`.trim();

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-5 sm:p-7 shadow-2xl border border-[#D5CBB9] relative my-auto space-y-5 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E8DFC2] pb-3 flex-shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase bg-[#FAF3EC] text-[#8C4627] px-2 py-0.5 rounded font-bold border border-[#EADBCC]">
                Entregables Requeridos
              </span>
              <span className="text-xs text-[#7A7264] font-mono">Estrategia & Copywriting</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1A1816] mt-1">
              Estructura Completa de Conversión
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#EFE8DD] hover:bg-[#DDD2C0] text-[#1A1816] flex items-center justify-center font-bold text-sm cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab selector */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-1 flex-shrink-0 text-xs font-medium border-b border-[#EFE8DF]">
          <button
            type="button"
            onClick={() => setActiveTab('mecanismo')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-all ${
              activeTab === 'mecanismo'
                ? 'bg-[#1A1816] text-white font-semibold'
                : 'bg-[#F2ECE2] text-[#615B52] hover:bg-[#E5DFD4]'
            }`}
          >
            1. Mecanismo Único
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('titular')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-all ${
              activeTab === 'titular'
                ? 'bg-[#1A1816] text-white font-semibold'
                : 'bg-[#F2ECE2] text-[#615B52] hover:bg-[#E5DFD4]'
            }`}
          >
            2. Titular Optimizado
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('avatar')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-all ${
              activeTab === 'avatar'
                ? 'bg-[#1A1816] text-white font-semibold'
                : 'bg-[#F2ECE2] text-[#615B52] hover:bg-[#E5DFD4]'
            }`}
          >
            3. Cliente Ideal
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('seo')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-all ${
              activeTab === 'seo'
                ? 'bg-[#1A1816] text-white font-semibold'
                : 'bg-[#F2ECE2] text-[#615B52] hover:bg-[#E5DFD4]'
            }`}
          >
            4. Título SEO & Meta
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('copyCompleto')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-all ${
              activeTab === 'copyCompleto'
                ? 'bg-[#1A1816] text-white font-semibold'
                : 'bg-[#F2ECE2] text-[#615B52] hover:bg-[#E5DFD4]'
            }`}
          >
            5. Copy Seccionado
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto pr-1 text-xs sm:text-sm text-[#403B33] space-y-4">
          
          {/* Tab 1: Mecanismo Único */}
          {activeTab === 'mecanismo' && (
            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E3DBD0] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase font-bold text-[#8C4627]">
                  Mecanismo Único Identificado
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(UNIQUE_MECHANISM.name + '\n' + UNIQUE_MECHANISM.concept, 'mec')}
                  className="px-2.5 py-1 rounded bg-white border border-[#D5C9B8] text-[11px] font-mono flex items-center gap-1 hover:bg-[#FAF6F0]"
                >
                  {copiedKey === 'mec' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedKey === 'mec' ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              <h4 className="font-editorial text-2xl font-bold text-[#1A1816]">
                {UNIQUE_MECHANISM.name}
              </h4>

              <div className="space-y-2 text-xs leading-relaxed text-[#544E45]">
                <p>
                  <strong>Concepto Central:</strong> {UNIQUE_MECHANISM.concept}
                </p>
                <p>
                  <strong>El Problema Invisible:</strong> {UNIQUE_MECHANISM.problem}
                </p>
                <p>
                  <strong>La Solución Lógica y Emocional:</strong> {UNIQUE_MECHANISM.solution}
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Titular Optimizado */}
          {activeTab === 'titular' && (
            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E3DBD0] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase font-bold text-[#8C4627]">
                  Fórmula Base de Titular
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(OPTIMIZED_HEADLINE.title + '\n' + OPTIMIZED_HEADLINE.subtitle, 'tit')}
                  className="px-2.5 py-1 rounded bg-white border border-[#D5C9B8] text-[11px] font-mono flex items-center gap-1 hover:bg-[#FAF6F0]"
                >
                  {copiedKey === 'tit' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedKey === 'tit' ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              <div className="p-2.5 bg-white rounded-xl border border-[#DDD4C5] font-mono text-[11px] text-[#696155]">
                Fórmula: {OPTIMIZED_HEADLINE.formula}
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-xs text-[#7A7163] uppercase font-mono">{OPTIMIZED_HEADLINE.pretitle}</div>
                <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1A1816] leading-tight">
                  {OPTIMIZED_HEADLINE.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5C564C] leading-relaxed">
                  {OPTIMIZED_HEADLINE.subtitle}
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Avatar / Cliente Ideal */}
          {activeTab === 'avatar' && (
            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E3DBD0] space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase font-bold text-[#8C4627]">
                  Perfil Resumido del Cliente Ideal
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(JSON.stringify(IDEAL_CUSTOMER_PROFILE, null, 2), 'ava')}
                  className="px-2.5 py-1 rounded bg-white border border-[#D5C9B8] text-[11px] font-mono flex items-center gap-1 hover:bg-[#FAF6F0]"
                >
                  {copiedKey === 'ava' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedKey === 'ava' ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#DDD3C2] space-y-1">
                <h4 className="font-bold text-[#1A1816] text-sm">{IDEAL_CUSTOMER_PROFILE.name}</h4>
                <p className="text-xs text-[#6B6356]">{IDEAL_CUSTOMER_PROFILE.demographics}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-[#E0D7C9] space-y-1.5">
                  <span className="font-bold text-emerald-800 font-mono text-[10px] uppercase">Deseos Clave:</span>
                  <ul className="space-y-1 list-disc list-inside text-[#544E45]">
                    {IDEAL_CUSTOMER_PROFILE.desires.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E0D7C9] space-y-1.5">
                  <span className="font-bold text-rose-800 font-mono text-[10px] uppercase">Miedos & Frustraciones:</span>
                  <ul className="space-y-1 list-disc list-inside text-[#544E45]">
                    {IDEAL_CUSTOMER_PROFILE.fears.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#E0D7C9] space-y-2 text-xs">
                <span className="font-bold text-[#8C4627] font-mono text-[10px] uppercase">Refutación de Objeciones:</span>
                {IDEAL_CUSTOMER_PROFILE.mainObjections.map((obj, i) => (
                  <div key={i} className="p-2 bg-[#FAF8F5] rounded-lg border border-[#EDE5DA] space-y-1">
                    <p className="font-semibold text-[#1A1816]">{obj.objection}</p>
                    <p className="text-[#635C51]">{obj.reframing}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Título SEO & Meta */}
          {activeTab === 'seo' && (
            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E3DBD0] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase font-bold text-[#8C4627]">
                  Título SEO + Meta Descripción
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(`Título SEO: ${SEO_DATA.title}\nMeta Descripción: ${SEO_DATA.metaDescription}`, 'seo')}
                  className="px-2.5 py-1 rounded bg-white border border-[#D5C9B8] text-[11px] font-mono flex items-center gap-1 hover:bg-[#FAF6F0]"
                >
                  {copiedKey === 'seo' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedKey === 'seo' ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-[#DDD3C2] space-y-1">
                  <span className="font-mono text-[10px] text-[#7A7264] uppercase font-bold">Título SEO (&lt;title&gt;):</span>
                  <div className="font-bold text-sm text-[#1A1816]">{SEO_DATA.title}</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#DDD3C2] space-y-1">
                  <span className="font-mono text-[10px] text-[#7A7264] uppercase font-bold">Meta Descripción (&lt;meta name="description"&gt;):</span>
                  <div className="text-xs text-[#524C44] leading-relaxed">{SEO_DATA.metaDescription}</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#DDD3C2] space-y-1">
                  <span className="font-mono text-[10px] text-[#7A7264] uppercase font-bold">Palabras Clave Sugeridas:</span>
                  <div className="text-xs font-mono text-[#8C4627]">{SEO_DATA.keywords}</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Copy Completo */}
          {activeTab === 'copyCompleto' && (
            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E3DBD0] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase font-bold text-[#8C4627]">
                  Copy Seccionado Listo para Copiar
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(copyCompletoMarkdown, 'full')}
                  className="px-3 py-1.5 rounded-lg bg-[#A45532] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm hover:bg-[#8C4627]"
                >
                  {copiedKey === 'full' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'full' ? '¡Copiado al Portapapeles!' : 'Copiar Copy Completo'}</span>
                </button>
              </div>

              <textarea
                readOnly
                value={copyCompletoMarkdown}
                rows={14}
                className="w-full font-mono text-[11px] p-3 bg-white rounded-xl border border-[#DDD3C2] text-[#2D2A26] focus:outline-none"
              />
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-[#E8DFC2] flex justify-end flex-shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#1A1816] text-white text-xs font-semibold cursor-pointer"
          >
            Listo
          </button>
        </div>

      </div>
    </div>
  );
};
