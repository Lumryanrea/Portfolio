// Lumry Analytics logo + title, recreated from the brand flier (vector, crisp at any size)

export function LumryLogoMark({ size = 68 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.26,
        background: 'linear-gradient(135deg,#10b981,#047857)',
        boxShadow: '0 10px 24px rgba(5,150,105,0.30)',
      }}
      className="flex items-center justify-center flex-shrink-0"
    >
      <svg viewBox="0 0 24 24" width={size * 0.53} height={size * 0.53} fill="none">
        <rect x="4" y="13" width="3.6" height="7" rx="1.2" fill="#ffffff" />
        <rect x="10.2" y="9" width="3.6" height="11" rx="1.2" fill="#ffffff" />
        <rect x="16.4" y="5" width="3.6" height="15" rx="1.2" fill="#ffffff" />
      </svg>
    </div>
  );
}

export function LumryLockup({
  markSize = 56,
  titleClass = 'text-2xl',
  dark = false,
}: {
  markSize?: number;
  titleClass?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <LumryLogoMark size={markSize} />
      <div>
        <div
          className={`font-extrabold leading-none tracking-tight ${titleClass} ${dark ? 'text-white' : 'text-[#102a22]'}`}
        >
          Lumry Analytics
        </div>
        <div className="font-bold text-[11px] tracking-[3.5px] uppercase mt-1.5 text-[#059669]">
          Business Consulting
        </div>
      </div>
    </div>
  );
}
