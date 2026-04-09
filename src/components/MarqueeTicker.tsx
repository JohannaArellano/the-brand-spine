"use client";

import React from "react";

interface MarqueeTickerProps {
  items?: string[];
}

const defaultItems = [
  "IDENTITY INFRASTRUCTURE",
  "BRAND GOVERNANCE",
  "DECISION ARCHITECTURE",
  "AUTHORITY COMPOUNDING",
  "BrandOS",
  "DRIFT PREVENTION",
];

export default function MarqueeTicker({
  items = defaultItems,
}: MarqueeTickerProps) {
  // Repeat items to fill the space
  const repeatedItems = Array(3).fill(items).flat();

  return (
    <div className="w-full bg-brand-dark/40 py-6 overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .scroll-left {
          animation: scroll-left 60s linear infinite;
        }

        .scroll-right {
          animation: scroll-right 60s linear infinite;
        }
      `}</style>

      {/* First Row - Left */}
      <div className="mb-6 overflow-hidden">
        <div className="scroll-left flex whitespace-nowrap gap-8">
          {repeatedItems.map((item, index) => (
            <React.Fragment key={index}>
              <span className="font-sans text-sm uppercase tracking-[0.2em] text-brand-gray-300">
                {item}
              </span>
              <span className="text-brand-gold">*</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Second Row - Right */}
      <div className="overflow-hidden">
        <div className="scroll-right flex whitespace-nowrap gap-8">
          {repeatedItems.map((item, index) => (
            <React.Fragment key={`reverse-${index}`}>
              <span className="font-sans text-sm uppercase tracking-[0.2em] text-brand-gray-300">
                {item}
              </span>
              <span className="text-brand-gold">*</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
