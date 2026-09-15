import React from "react";
import startBottomImg from "../assets/start-bottom.png";
import nebuloidLogo from "../assets/nebuloid-logo.png";

/**
 * TopLogoBanner:
 * Renders at the top of all screens/components:
 * - Background: start-bottom.png flipped vertically
 * - Overlay: nebuloid-logo.png with white background card placed over the banner image
 * - Height: 64px, proper width with aspect-ratio preserved
 */
export default function TopLogoBanner() {
  return (
    <div className="relative w-full overflow-hidden leading-none shrink-0 z-30">
      {/* Top Banner Background Image */}
      <img
        src={startBottomImg}
        alt="Logo Banner Top"
        className="w-full h-20 sm:h-24 md:h-28 object-cover object-bottom select-none block pointer-events-none"
        style={{ transform: "scaleY(-1)" }}
      />

      {/* Nebuloid Logo over the image with background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4">
        <div className="bg-white/95 backdrop-blur-xs px-4 sm:px-6 py-1 sm:py-1.5 rounded-2xl shadow-md border border-black/10 flex items-center justify-center pointer-events-auto">
          <img
            src={nebuloidLogo}
            alt="Nebuloid Logo"
            className="h-[64px] w-auto max-w-[85vw] object-contain select-none block"
          />
        </div>
      </div>
    </div>
  );
}
