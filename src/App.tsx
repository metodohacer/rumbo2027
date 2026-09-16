import React, { useState } from 'react';
import { HeaderHero } from './components/HeaderHero';
import { PageGallery } from './components/PageGallery';
import { BonusesSection } from './components/BonusesSection';
import { StackValueSection } from './components/StackValueSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FooterCta } from './components/FooterCta';
import { SheetDetailModal } from './components/SheetDetailModal';
import { CheckoutModal } from './components/CheckoutModal';
import { CopyDeliverablesModal } from './components/CopyDeliverablesModal';
import { PlannerSheet } from './types';
import { HOTMART_CHECKOUT_URL } from './data/copyData';
import { ShieldCheck, Download } from 'lucide-react';

export default function App() {
  const [selectedSheet, setSelectedSheet] = useState<PlannerSheet | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isDeliverablesOpen, setIsDeliverablesOpen] = useState<boolean>(false);
  const [hotmartUrl, setHotmartUrl] = useState<string>(HOTMART_CHECKOUT_URL);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1D1B18] flex flex-col antialiased selection:bg-[#EADBCC]">
      
      {/* Top Notification Announcement Bar (Simplified, no price, no buttons, highlights the product) */}
      <div className="bg-[#1E1C1A] text-[#F7F4EE] text-[11px] py-2.5 px-4 border-b border-[#36322C]">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#C9A97A] font-bold">
              EDICIÓN ESPECIAL:
            </span>
            <span className="text-[#DFD7CB] truncate font-sans">
              RUMBO 2027 · Edición Oficial
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 font-mono text-[10px] text-[#A69E90] flex-shrink-0">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              Garantía 7 Días
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#C9A97A]">
              <Download className="w-3 h-3 text-[#C9A97A]" />
              Descarga Inmediata
            </span>
          </div>
        </div>
      </div>

      {/* Main Page Content */}
      <main className="flex-1">
        
        {/* 1. Header Hero (No price, no buttons, clean language, highlights product) */}
        <HeaderHero />

        {/* 2. Visual Gallery of Printable Pages (Tamaño Carta, simple language) */}
        <PageGallery
          onSelectSheet={(sheet) => setSelectedSheet(sheet)}
          onBuyClick={handleOpenCheckout}
        />

        {/* 3. Bonuses Section: Companion Tool (Tabs + Video) & Arranque Inmediato */}
        <BonusesSection onBuyClick={handleOpenCheckout} />

        {/* 4. Complete Stack Value & Offer Card (Red/Orange Price, Hotmart link, requested CTA) */}
        <StackValueSection onBuyClick={handleOpenCheckout} />

        {/* 5. Guarantee Section (7 Days, no "frustrante", no hotmart logo, RUMBO 2027) */}
        <GuaranteeSection onBuyClick={handleOpenCheckout} />

        {/* 6. Frequently Asked Questions (FAQs without Q3, Carta size, simple language) */}
        <FaqSection onBuyClick={handleOpenCheckout} />

        {/* 7. Final Emotional Close, Deliverables List & CTA */}
        <FooterCta
          onBuyClick={handleOpenCheckout}
          onOpenDeliverables={() => setIsDeliverablesOpen(true)}
        />

      </main>

      {/* Modal: Sheet Zoom & Inspection */}
      <SheetDetailModal
        sheet={selectedSheet}
        onClose={() => setSelectedSheet(null)}
        onBuyClick={handleOpenCheckout}
      />

      {/* Modal: Checkout / Hotmart Direct */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        hotmartUrl={hotmartUrl}
        onUpdateHotmartUrl={setHotmartUrl}
      />

      {/* Modal: Copy Deliverables */}
      <CopyDeliverablesModal
        isOpen={isDeliverablesOpen}
        onClose={() => setIsDeliverablesOpen(false)}
      />

    </div>
  );
}
