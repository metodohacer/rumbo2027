import React from 'react';
import { ShieldCheck, Lock, CreditCard, Globe2, CheckCircle2, Zap } from 'lucide-react';

export const HotmartTrustSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-[#E3DBD0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="bg-[#FAF8F5] rounded-3xl border border-[#DED6C7] p-6 sm:p-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E5DDD0]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE6DC] text-[#7A452D] text-xs font-mono font-semibold mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Infraestructura de Pago Confiable</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1A1816]">
                ¿Por qué procesamos tu compra a través de HOTMART?
              </h3>
              <p className="text-xs sm:text-sm text-[#5E574E] mt-1 max-w-xl">
                Elegimos la plataforma líder mundial para que tu única preocupación sea disfrutar y aplicar el sistema, sabiendo que tu transacción está 100% protegida.
              </p>
            </div>

            {/* Hotmart Trust Pill */}
            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl border border-[#D8CEBE] shadow-xs self-start md:self-auto">
              <div className="w-9 h-9 rounded-xl bg-[#F04E23]/10 text-[#F04E23] flex items-center justify-center font-bold text-base font-mono">
                H
              </div>
              <div>
                <div className="text-xs font-bold text-[#1A1816]">Procesado por Hotmart</div>
                <div className="text-[10px] text-[#7A7265] font-mono">Líder Global en Productos Digitales</div>
              </div>
            </div>
          </div>

          {/* 3 Key Pillars of Trust */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#DDD4C5] flex items-center justify-center text-[#A45532]">
                <Lock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#1A1816]">
                Encriptación Bancaria SSL 256-Bit
              </h4>
              <p className="text-xs text-[#635C52] leading-relaxed">
                Tus datos financieros viajan encriptados bajo los mismos estándares que utilizan los principales bancos mundiales. Jamás tenemos acceso a los números de tu tarjeta.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#DDD4C5] flex items-center justify-center text-emerald-700">
                <Globe2 className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#1A1816]">
                Pago en Tu Moneda Local
              </h4>
              <p className="text-xs text-[#635C52] leading-relaxed">
                Paga cómodamente con tarjeta de crédito, débito, PayPal o métodos de pago en efectivo locales (OXXO en México, PSE en Colombia, Pix en Brasil, PagoFácil en Argentina, etc.).
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#DDD4C5] flex items-center justify-center text-[#8C4627]">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#1A1816]">
                Entrega Inmediata y Automática
              </h4>
              <p className="text-xs text-[#635C52] leading-relaxed">
                En el mismo instante en que se confirma tu orden, Hotmart te envía un correo electrónico con tus accesos directos al archivo descargable y a la herramienta digital Companion.
              </p>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-[#E8DFC2] text-center text-xs text-[#665F54] font-sans">
            * <strong>No es un producto genérico más:</strong> Es un sistema de trabajo real y medible creado para brindarte resultados prácticos desde el primer día.
          </div>

        </div>

      </div>
    </section>
  );
};
