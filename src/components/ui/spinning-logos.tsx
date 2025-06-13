"use client"

import React from 'react';
import { 
  Facebook, 
  Youtube, 
  Camera,
  Instagram
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const SpinningLogos: React.FC = () => {
  const radiusToCenterOfIcons = 120;
  const iconWrapperWidth = 50;
  const ringPadding = 30;

  const toRadians = (degrees: number): number => (Math.PI / 180) * degrees;

  const logos = [
    { Icon: Camera, className: 'bg-[#363331] text-[#F9F7F6]', name: 'Camera' },
    { Icon: Instagram, className: 'bg-[#363331] text-[#F9F7F6]', name: 'Instagram' },
    { Icon: Facebook, className: 'bg-[#363331] text-[#F9F7F6]', name: 'Facebook' },
    { Icon: Youtube, className: 'bg-[#363331] text-[#F9F7F6]', name: 'YouTube' },
  ];

  return (
    <div className="flex justify-center items-center">
      <div
        style={{
          width: radiusToCenterOfIcons * 2 + iconWrapperWidth + ringPadding,
          height: radiusToCenterOfIcons * 2 + iconWrapperWidth + ringPadding,
        }}
        className="relative rounded-full bg-[#F9F7F6]/80 shadow-lg border border-[#C6C0BE]/30"
      >
        <div className="absolute inset-0 animate-spin-slow">
          {logos.map((logo, index) => {
            const angle = (360 / logos.length) * index;
            return (
              <div
                key={index}
                style={{
                  top: `calc(50% - ${iconWrapperWidth / 2}px + ${radiusToCenterOfIcons * Math.sin(toRadians(angle))}px)`,
                  left: `calc(50% - ${iconWrapperWidth / 2}px + ${radiusToCenterOfIcons * Math.cos(toRadians(angle))}px)`,
                  width: iconWrapperWidth,
                  height: iconWrapperWidth,
                }}
                className={cn(
                  "absolute flex items-center justify-center rounded-full shadow-md border-2 border-[#F9F7F6] animate-spin-reverse",
                  logo.className
                )}
                aria-label={`${logo.name} logo`}
              >
                <logo.Icon className="w-5 h-5" />
              </div>
            );
          })}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#F9F7F6] rounded-full w-3/5 h-3/5 flex items-center justify-center shadow-inner border-4 border-[#C6C0BE]/20">
            <img 
              src="/lovable-uploads/c13f40f6-288e-4f74-bb4b-0c73571c3042.png" 
              alt="Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
