import { useEffect, useState } from "react";
import logoMark from "@/assets/logo-mark.svg";

export const SplashLoader = ({ onDone }: { onDone?: () => void }) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), 1800);
    const t2 = setTimeout(() => onDone?.(), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative h-40 w-40 flex items-center justify-center">
        {/* Vibrating square waves */}
        <span className="splash-ring splash-ring-1" />
        <span className="splash-ring splash-ring-2" />
        <span className="splash-ring splash-ring-3" />

        {/* Logo breathing in/out */}
        <img
          src={logoMark}
          alt="Papryx AI"
          className="relative h-20 w-20 rounded-2xl object-contain bg-white shadow-[0_0_40px_hsl(var(--primary)/0.5)] splash-logo"
        />
      </div>

      <p className="mt-10 text-sm tracking-[0.3em] uppercase text-muted-foreground">
        <span className="gradient-text font-semibold">Loading</span>
        <span className="splash-dots" />
      </p>
    </div>
  );
};

export default SplashLoader;
