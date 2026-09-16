import React from 'react';
import { PlannerSheet } from '../types';

interface PrintableSheetVectorProps {
  sheet: PlannerSheet;
  className?: string;
  isDetail?: boolean;
}

export const PrintableSheetVector: React.FC<PrintableSheetVectorProps> = ({
  sheet,
  className = '',
  isDetail = false,
}) => {
  const pageNumber = sheet.image ? sheet.image.replace(/[^0-9]/g, '') : '';

  // Render specific layout based on sheet id or image number
  switch (pageNumber) {
    case '3':
      return (
        <div className={`w-full h-full bg-white rounded-lg border border-[#D9D0C1] p-3 flex flex-col justify-between select-none ${className}`}>
          {/* Header */}
          <div className="text-center pb-2 border-b border-[#222]">
            <h4 className="font-editorial text-xs sm:text-sm font-black tracking-widest text-[#111]">
              CALENDARIO 2027
            </h4>
          </div>

          {/* 12 Months Grid */}
          <div className="grid grid-cols-4 gap-1.5 py-2 flex-1">
            {[
              'ENERO', 'FEBRERO', 'MARZO', 'ABRIL',
              'MAYO', 'JUNIO', 'JULIO', 'AGOSTO',
              'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
            ].map((mes, idx) => (
              <div key={idx} className="border border-[#333] rounded-[2px] overflow-hidden flex flex-col">
                <div className="bg-[#EEDBB2] text-[#222] text-[6px] font-bold text-center py-0.5 border-b border-[#333]">
                  {mes}
                </div>
                <div className="bg-[#FAF8F5] p-0.5 flex-1 flex flex-col justify-between">
                  <div className="flex justify-between text-[4.5px] text-[#555] font-mono border-b border-[#DDD] pb-0.5">
                    <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span>
                  </div>
                  <div className="grid grid-cols-7 gap-0.5 py-0.5 text-[4px] text-[#333] text-center">
                    {Array.from({ length: 28 }).map((_, d) => (
                      <span key={d} className="leading-none">{d + 1}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Page Number */}
          <div className="flex justify-between items-center text-[7px] font-mono text-[#444] border-t border-[#DDD] pt-1">
            <span className="font-semibold text-[#8C4627]">RUMBO 2027 · PLANIFICADORA</span>
            <span className="font-bold text-[#111]">3</span>
          </div>
        </div>
      );

    case '4':
    case '11': {
      const monthName = pageNumber === '4' ? 'ENERO' : 'AGOSTO';
      return (
        <div className={`w-full h-full bg-white rounded-lg border border-[#D9D0C1] p-3 flex flex-col justify-between select-none ${className}`}>
          {/* Header */}
          <div className="flex items-baseline justify-between border-b-2 border-[#111] pb-1">
            <h4 className="font-editorial text-sm sm:text-base font-black tracking-wider text-[#111]">
              {monthName}
            </h4>
            <span className="font-editorial text-sm sm:text-base font-bold text-[#222]">2027</span>
          </div>

          {/* Weekday Header */}
          <div className="grid grid-cols-7 text-center bg-[#EEDBB2] border border-[#222] mt-1.5 text-[6.5px] font-bold text-[#111]">
            <div className="border-r border-[#222] py-0.5">LUN</div>
            <div className="border-r border-[#222] py-0.5">MAR</div>
            <div className="border-r border-[#222] py-0.5">MIÉ</div>
            <div className="border-r border-[#222] py-0.5">JUE</div>
            <div className="border-r border-[#222] py-0.5">VIE</div>
            <div className="border-r border-[#222] py-0.5">SÁB</div>
            <div className="py-0.5">DOM</div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 border-x border-b border-[#222] flex-1">
            {Array.from({ length: 35 }).map((_, idx) => (
              <div
                key={idx}
                className="border-r border-b border-[#333] last:border-r-0 p-0.5 min-h-[14px] flex flex-col justify-start"
              >
                {idx < 31 && (
                  <span className="text-[5.5px] font-mono font-bold text-[#222] leading-none">
                    {idx + 1}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Notes & Important */}
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="border border-[#222] rounded-[2px] overflow-hidden">
              <div className="bg-[#EEDBB2] text-[6.5px] font-bold text-[#111] px-1.5 py-0.5 border-b border-[#222]">
                NOTAS
              </div>
              <div className="h-6 bg-[#FAF8F5]" />
            </div>
            <div className="border border-[#222] rounded-[2px] overflow-hidden">
              <div className="bg-[#EEDBB2] text-[6.5px] font-bold text-[#111] px-1.5 py-0.5 border-b border-[#222]">
                IMPORTANTE
              </div>
              <div className="h-6 bg-[#FAF8F5]" />
            </div>
          </div>

          {/* Footer Page Number */}
          <div className="flex justify-between items-center text-[7px] font-mono text-[#444] pt-1 mt-1 border-t border-[#EEE]">
            <span className="font-semibold text-[#8C4627]">RUMBO 2027 · PLANIFICADORA</span>
            <span className="font-bold text-[#111]">{pageNumber}</span>
          </div>
        </div>
      );
    }

    case '19':
      return (
        <div className={`w-full h-full bg-white rounded-lg border border-[#D9D0C1] p-3 flex flex-col justify-between select-none ${className}`}>
          {/* Header */}
          <div className="text-center pb-1.5 border-b-2 border-[#111]">
            <h4 className="font-editorial text-xs sm:text-sm font-black tracking-wider text-[#111]">
              PLANIFICADOR DE YOUTUBE
            </h4>
          </div>

          {/* Top Form Rows */}
          <div className="grid grid-cols-2 gap-2 py-1.5">
            <div className="space-y-1">
              <div className="border border-[#222] rounded-[2px] overflow-hidden">
                <div className="bg-[#EEDBB2] text-[6px] font-bold text-[#111] px-1 py-0.5 border-b border-[#222]">
                  NOMBRE DEL CANAL
                </div>
                <div className="h-3 bg-white" />
              </div>
              <div className="border border-[#222] rounded-[2px] overflow-hidden">
                <div className="bg-[#EEDBB2] text-[6px] font-bold text-[#111] px-1 py-0.5 border-b border-[#222]">
                  DESCRIPCIÓN
                </div>
                <div className="h-4 bg-white" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="border border-[#222] rounded-[2px] overflow-hidden">
                <div className="bg-[#EEDBB2] text-[6px] font-bold text-[#111] px-1 py-0.5 border-b border-[#222]">
                  USUARIO / ACCESO
                </div>
                <div className="h-3 bg-white" />
              </div>
              <div className="border border-[#222] rounded-[2px] overflow-hidden">
                <div className="bg-[#EEDBB2] text-[6px] font-bold text-[#111] px-1 py-0.5 border-b border-[#222]">
                  CONTRASEÑA
                </div>
                <div className="h-3 bg-white" />
              </div>
            </div>
          </div>

          {/* Mid Section: Audience */}
          <div className="border border-[#222] rounded-[2px] overflow-hidden my-1 flex-1">
            <div className="bg-[#EEDBB2] text-[6px] font-bold text-[#111] px-1.5 py-0.5 border-b border-[#222]">
              AUDIENCIA
            </div>
            <div className="p-1 bg-[#FAF8F5] h-7 text-[5px] text-[#666]">
              ¿Quién es tu espectador ideal y qué busca aprender o disfrutar en tu canal?
            </div>
          </div>

          {/* Bottom Section: Categories & Playlists */}
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="border border-[#222] rounded-[2px] overflow-hidden">
              <div className="bg-[#EEDBB2] text-[6px] font-bold text-[#111] px-1 py-0.5 border-b border-[#222]">
                CATEGORÍAS DE YOUTUBE
              </div>
              <div className="p-1 text-[5px] text-[#444] space-y-0.5">
                <div>• Personas y blogs</div>
                <div>• Tutoriales y estilo</div>
                <div>• Ciencia y tecnología</div>
              </div>
            </div>

            <div className="border border-[#222] rounded-[2px] overflow-hidden">
              <div className="bg-[#EEDBB2] text-[6px] font-bold text-[#111] px-1 py-0.5 border-b border-[#222]">
                LISTAS DE REPRODUCCIÓN
              </div>
              <div className="h-7 bg-white" />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-[7px] font-mono text-[#444] pt-1 mt-1 border-t border-[#EEE]">
            <span className="font-semibold text-[#8C4627]">RUMBO 2027 · PLANIFICADORA</span>
            <span className="font-bold text-[#111]">19</span>
          </div>
        </div>
      );

    case '23':
      return (
        <div className={`w-full h-full bg-white rounded-lg border border-[#D9D0C1] p-3 flex flex-col justify-between select-none ${className}`}>
          {/* Header */}
          <div className="text-center pb-1.5 border-b-2 border-[#111]">
            <h4 className="font-editorial text-xs sm:text-sm font-black tracking-wider text-[#111]">
              PLANIFICADOR DE PINTEREST
            </h4>
          </div>

          {/* Two Pin Slots */}
          {[1, 2].map((slot) => (
            <div key={slot} className="border border-[#222] rounded-[2px] overflow-hidden my-1">
              <div className="bg-[#EEDBB2] text-[6px] font-bold text-[#111] px-1.5 py-0.5 border-b border-[#222] flex justify-between">
                <span>PUBLICACIÓN #{slot}</span>
                <span className="font-mono text-[5.5px]">ELEMENTOS: IMG • PIN • TABLERO</span>
              </div>
              <div className="p-1 grid grid-cols-3 gap-1 bg-[#FAF8F5]">
                <div className="space-y-0.5">
                  <div className="text-[5px] text-[#555] font-bold">FECHA: _____</div>
                  <div className="text-[5px] text-[#555] font-bold">HORA: _____</div>
                  <div className="text-[5px] text-[#555] font-bold">CATEGORÍA: _____</div>
                </div>
                <div className="space-y-0.5 col-span-2">
                  <div className="text-[5px] text-[#555] font-bold">ENLACE: __________________</div>
                  <div className="text-[5px] text-[#555] font-bold">DESCRIPCIÓN Y HASHTAGS:</div>
                  <div className="h-3 bg-white border border-[#DDD] rounded-xs" />
                </div>
              </div>
            </div>
          ))}

          {/* Footer */}
          <div className="flex justify-between items-center text-[7px] font-mono text-[#444] pt-1 border-t border-[#EEE]">
            <span className="font-semibold text-[#8C4627]">RUMBO 2027 · PLANIFICADORA</span>
            <span className="font-bold text-[#111]">23</span>
          </div>
        </div>
      );

    case '30':
      return (
        <div className={`w-full h-full bg-white rounded-lg border border-[#D9D0C1] p-3 flex flex-col justify-between select-none ${className}`}>
          {/* Header */}
          <div className="text-center pb-1 border-b-2 border-[#111]">
            <h4 className="font-editorial text-xs sm:text-sm font-black tracking-wider text-[#111]">
              MIS CUENTAS
            </h4>
            <div className="flex justify-center gap-2 text-[7px] text-[#8C4627] font-bold mt-0.5">
              <span>● INSTAGRAM</span>
              <span>● YOUTUBE</span>
              <span>● PINTEREST</span>
              <span>● FACEBOOK</span>
            </div>
          </div>

          {/* 2 Account cards */}
          {[1, 2].map((acc) => (
            <div key={acc} className="border border-[#222] rounded-[2px] overflow-hidden my-1">
              <div className="bg-[#EEDBB2] text-[6px] font-bold text-[#111] px-1.5 py-0.5 border-b border-[#222]">
                REGISTRO DE CUENTA #{acc}
              </div>
              <div className="p-1.5 grid grid-cols-2 gap-1.5 bg-[#FAF8F5]">
                <div className="text-[5.5px] space-y-1">
                  <div><strong className="text-[#111]">RED SOCIAL:</strong> ________________</div>
                  <div><strong className="text-[#111]">USUARIO:</strong> ________________</div>
                  <div><strong className="text-[#111]">CONTRASEÑA:</strong> ________________</div>
                </div>
                <div className="text-[5.5px] space-y-1">
                  <div><strong className="text-[#111]">BIOGRAFÍA / NOTAS:</strong></div>
                  <div className="h-5 bg-white border border-[#DDD] rounded-xs" />
                </div>
              </div>
            </div>
          ))}

          {/* Footer */}
          <div className="flex justify-between items-center text-[7px] font-mono text-[#444] pt-1 border-t border-[#EEE]">
            <span className="font-semibold text-[#8C4627]">RUMBO 2027 · PLANIFICADORA</span>
            <span className="font-bold text-[#111]">30</span>
          </div>
        </div>
      );

    case '33':
      return (
        <div className={`w-full h-full bg-white rounded-lg border border-[#D9D0C1] p-3 flex flex-col justify-between select-none ${className}`}>
          {/* Header */}
          <div className="text-center pb-1.5 border-b-2 border-[#111]">
            <h4 className="font-editorial text-xs sm:text-sm font-black tracking-wider text-[#111]">
              MERCADO Y CLIENTE OBJETIVO
            </h4>
          </div>

          {/* Top Profile */}
          <div className="grid grid-cols-3 gap-1.5 my-1">
            <div className="border border-[#222] rounded-[2px] overflow-hidden flex flex-col justify-between">
              <div className="bg-[#EEDBB2] text-[6px] font-bold text-[#111] px-1 py-0.5 border-b border-[#222]">
                CLIENTE / FOTO
              </div>
              <div className="h-8 bg-[#FAF8F5] flex items-center justify-center text-[5px] text-[#888]">
                [Avatar / Foto]
              </div>
            </div>
            <div className="col-span-2 border border-[#222] rounded-[2px] overflow-hidden">
              <div className="bg-[#EEDBB2] text-[6px] font-bold text-[#111] px-1 py-0.5 border-b border-[#222]">
                PERFIL DEL CLIENTE · DATOS
              </div>
              <div className="p-1 grid grid-cols-2 gap-0.5 text-[5px] text-[#444] bg-[#FAF8F5]">
                <div>• Género: ___________</div>
                <div>• Edad: ___________</div>
                <div>• Ocupación: ___________</div>
                <div>• Ubicación: ___________</div>
              </div>
            </div>
          </div>

          {/* Metas, Valores, Desafíos */}
          <div className="grid grid-cols-3 gap-1 my-0.5">
            {['METAS', 'VALORES', 'DESAFÍOS'].map((box, idx) => (
              <div key={idx} className="border border-[#222] rounded-[2px] overflow-hidden">
                <div className="bg-[#EEDBB2] text-[5.5px] font-bold text-[#111] text-center py-0.5 border-b border-[#222]">
                  {box}
                </div>
                <div className="h-5 bg-[#FAF8F5]" />
              </div>
            ))}
          </div>

          {/* Unique value question */}
          <div className="border border-[#222] rounded-[2px] overflow-hidden mt-1">
            <div className="bg-[#EEDBB2] text-[5.5px] font-bold text-[#111] px-1 py-0.5 border-b border-[#222]">
              ¿QUÉ PUEDES OFRECERLE DE FORMA ÚNICA A TU CLIENTE IDEAL?
            </div>
            <div className="h-6 bg-white" />
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-[7px] font-mono text-[#444] pt-1 border-t border-[#EEE]">
            <span className="font-semibold text-[#8C4627]">RUMBO 2027 · PLANIFICADORA</span>
            <span className="font-bold text-[#111]">33</span>
          </div>
        </div>
      );

    case '43':
      return (
        <div className={`w-full h-full bg-white rounded-lg border border-[#D9D0C1] p-3 flex flex-col justify-between select-none ${className}`}>
          {/* Header */}
          <div className="flex items-center justify-between pb-1 border-b-2 border-[#111]">
            <h4 className="font-editorial text-xs sm:text-sm font-black tracking-wider text-[#111]">
              GANANCIAS Y PÉRDIDAS ANUALES
            </h4>
            <div className="flex items-center gap-1 text-[6.5px] font-bold">
              <span className="bg-[#EEDBB2] px-1 py-0.5 border border-[#222] rounded-xs">AÑO: 2027</span>
            </div>
          </div>

          {/* Full Financial Table */}
          <div className="border border-[#222] rounded-[2px] overflow-hidden my-1 flex-1 flex flex-col">
            <div className="grid grid-cols-7 bg-[#EEDBB2] text-[5px] font-bold text-[#111] border-b border-[#222] text-center">
              <div className="border-r border-[#222] py-0.5">MES</div>
              <div className="border-r border-[#222] py-0.5">VENTAS</div>
              <div className="border-r border-[#222] py-0.5">MATERIALES</div>
              <div className="border-r border-[#222] py-0.5">SALARIOS</div>
              <div className="border-r border-[#222] py-0.5">MARKETING</div>
              <div className="border-r border-[#222] py-0.5">DEPREC.</div>
              <div className="py-0.5">GANANCIA</div>
            </div>

            <div className="flex-1 flex flex-col justify-between bg-white divide-y divide-[#DDD]">
              {['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'].map((m, idx) => (
                <div key={idx} className="grid grid-cols-7 text-[4.5px] font-mono text-center py-0.5 text-[#333]">
                  <span className="font-bold text-[#111] border-r border-[#EEE]">{m}</span>
                  <span className="border-r border-[#EEE]">-</span>
                  <span className="border-r border-[#EEE]">-</span>
                  <span className="border-r border-[#EEE]">-</span>
                  <span className="border-r border-[#EEE]">-</span>
                  <span className="border-r border-[#EEE]">-</span>
                  <span className="font-bold text-emerald-800">-</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-[7px] font-mono text-[#444] pt-1 border-t border-[#EEE]">
            <span className="font-semibold text-[#8C4627]">RUMBO 2027 · PLANIFICADORA</span>
            <span className="font-bold text-[#111]">43</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
