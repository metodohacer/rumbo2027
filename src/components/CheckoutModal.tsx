import React, { useState } from 'react';
import { Lock, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink, X, Download, CreditCard } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  hotmartUrl: string;
  onUpdateHotmartUrl: (url: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  hotmartUrl,
  onUpdateHotmartUrl,
}) => {
  const [isSimulatedSuccess, setIsSimulatedSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('tu-correo@ejemplo.com');

  if (!isOpen) return null;

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulatedSuccess(true);
  };

  const handleGoToRealHotmart = () => {
    if (hotmartUrl && hotmartUrl.startsWith('http')) {
      window.open(hotmartUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-[#D5CBB9] relative my-auto space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E8DFC2] pb-3">
          <div className="flex items-center gap-2">
            <div>
              <h3 className="font-editorial text-xl font-bold text-[#1A1816]">
                RUMBO 2027 · Descarga Segura
              </h3>
              <div className="text-[10px] font-mono text-[#787063] flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-700" />
                <span>Pago Protegido con Garantía de 7 Días</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#EFE8DD] hover:bg-[#DDD2C0] text-[#1A1816] flex items-center justify-center font-bold text-sm cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        {!isSimulatedSuccess ? (
          <div className="space-y-4">
            
            {/* Order summary pill */}
            <div className="p-3.5 bg-white rounded-2xl border border-[#E3D9CB] flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-[#1A1816]">
                  RUMBO 2027 + Companion + Bonos
                </div>
                <div className="text-[10px] text-[#787063]">
                  Pago único de por vida · Sin cobros sorpresa
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-editorial font-bold text-[#E03A14]">$5.00</span>
                <span className="text-[10px] text-[#E03A14] block font-mono font-bold">USD</span>
              </div>
            </div>

            {/* Direct button to official checkout */}
            {hotmartUrl && (
              <a
                href={hotmartUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#E03A14] hover:bg-[#C9300D] text-white font-sans font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wide text-center"
              >
                <span>QUIERO DESCARGAR MI RUMBO 2027 POR $5USD</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {/* Simulated Checkout Form for test */}
            <form onSubmit={handleSimulatePayment} className="space-y-3 pt-2 border-t border-[#E8DFC2]">
              <div className="space-y-1 text-left">
                <label className="text-[11px] font-semibold text-[#544E44]">
                  Correo para recibir los accesos:
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white rounded-xl border border-[#DDD3C2] text-xs text-[#1A1816] focus:outline-none focus:border-[#A45532]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-[#EFE8DD] hover:bg-[#E2D6C6] text-[#3A352F] font-sans font-semibold text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Probar entrega simulada</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="flex items-center justify-center gap-3 text-[11px] text-[#736B5E] pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                Garantía 7 Días
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Download className="w-3.5 h-3.5 text-[#8C4627]" />
                Descarga Inmediata
              </span>
            </div>

          </div>
        ) : (
          /* Simulated Delivery Confirmation */
          <div className="py-4 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="font-editorial text-2xl font-bold text-[#1A1816]">
                ¡Acceso Confirmado!
              </h4>
              <p className="text-xs text-[#5C564C] mt-1 max-w-sm mx-auto">
                Hemos preparado tus archivos de <strong>RUMBO 2027</strong> y tu acceso a <strong>Companion</strong>.
              </p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-[#DDD4C4] text-left text-xs space-y-2.5">
              <div className="font-bold text-[#1A1816] border-b border-[#EFE8DD] pb-1.5 flex justify-between">
                <span>Archivos Listos para Descarga</span>
                <span className="font-mono text-emerald-700">✓ Activo</span>
              </div>
              <div className="flex items-center justify-between text-[#403B33]">
                <span>1. Planificadora RUMBO 2027 (PDF)</span>
                <button
                  type="button"
                  onClick={() => alert('Descarga iniciada: Rumbo-2027-Planner.pdf')}
                  className="text-[#8C4627] font-semibold hover:underline cursor-pointer"
                >
                  Descargar PDF
                </button>
              </div>
              <div className="flex items-center justify-between text-[#403B33]">
                <span>2. Herramienta Companion Digital</span>
                <a
                  href="#bonos"
                  onClick={onClose}
                  className="text-[#8C4627] font-semibold hover:underline"
                >
                  Abrir Companion
                </a>
              </div>
              <div className="flex items-center justify-between text-[#403B33]">
                <span>3. Bono Arranque Inmediato (PDF)</span>
                <button
                  type="button"
                  onClick={() => alert('Descarga iniciada: Arranque-Inmediato.pdf')}
                  className="text-[#8C4627] font-semibold hover:underline cursor-pointer"
                >
                  Descargar PDF
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsSimulatedSuccess(false);
                onClose();
              }}
              className="px-6 py-2 rounded-xl bg-[#1C1A18] text-white text-xs font-semibold hover:bg-[#332F2A] cursor-pointer"
            >
              Cerrar Ventana
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
