import React, { useState } from 'react';

interface ProductMockupProps {
  className?: string;
  imageSrc?: string;
}

const ORIGINAL_USER_IMAGE = '/hero-mockup.png';
const POSTIMG_CDN_BACKUP = '/11.png';

export const ProductMockup: React.FC<ProductMockupProps> = ({
  className = '',
  imageSrc = ORIGINAL_USER_IMAGE,
}) => {
  const [currentSrc, setCurrentSrc] = useState(imageSrc);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    if (currentSrc !== POSTIMG_CDN_BACKUP) {
      setCurrentSrc(POSTIMG_CDN_BACKUP);
    } else {
      setImageError(true);
    }
  };

  return (
    <div className={`relative flex flex-col items-center justify-center w-full ${className}`} id="product-mockup-container">
      {!imageError ? (
        /* User provided product image exactly as uploaded without modification */
        <div className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[500px] flex items-center justify-center">
          <img
            src={currentSrc}
            alt="RUMBO 2027"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[32vh] sm:max-h-[38vh] lg:max-h-none object-contain drop-shadow-xl"
            onError={handleImageError}
          />
        </div>
      ) : (
        /* Fallback Clean Cover Representation if image file fails */
        <div className="relative z-10 w-[240px] sm:w-[270px] h-[310px] sm:h-[340px] bg-[#1E1C1A] text-[#F5F2EC] rounded-r-xl rounded-l-sm shadow-2xl border-r border-y border-[#3E3A35] flex flex-col justify-between p-6 overflow-hidden">
          {/* Spine */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#12100F] via-[#2A2724] to-transparent opacity-80 border-r border-[#332F2B]" />

          {/* Gold foil header */}
          <div className="relative z-10 pl-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#C9A97A] uppercase font-semibold">
                EDICIÓN OFICIAL · 2027
              </span>
              <span className="text-[9px] px-2 py-0.5 rounded border border-[#C9A97A]/50 text-[#C9A97A] font-mono font-bold">
                PLANNER
              </span>
            </div>
            <div className="w-8 h-[1px] bg-[#C9A97A]/60 my-2" />
          </div>

          {/* Central Title */}
          <div className="relative z-10 pl-4 my-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A89F91] font-sans font-medium">
              Planificadora de Emprendimiento
            </p>
            <h3 className="font-editorial text-3xl sm:text-4xl leading-[1.05] tracking-tight text-[#FAF7F0] mt-1 font-bold">
              RUMBO <br />
              <span className="italic font-light text-[#E5D2B3]">2027</span>
            </h3>
            <p className="text-[11px] text-[#B8AF9F] mt-2 font-sans leading-relaxed max-w-[190px]">
              Tu mapa claro y paso a paso para hacer crecer tu emprendimiento.
            </p>
          </div>

          {/* Bottom detail badge */}
          <div className="relative z-10 pl-4 pt-3 border-t border-[#34302C] flex items-center justify-between text-[10px] text-[#B0A799] font-mono">
            <span className="text-[#C9A97A]">● RUMBO 2027</span>
            <span>LISTO PARA IMPRIMIR</span>
          </div>
        </div>
      )}
    </div>
  );
};
