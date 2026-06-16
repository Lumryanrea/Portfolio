import { motion } from 'framer-motion';
import type { ReactNode, CSSProperties } from 'react';

const ACCENT = '#5DADE2';

// A floating, semi-transparent glass panel that drifts gently
function Floaty({
  children,
  style,
  delay = 0,
  duration = 9,
  drift = 16,
  rotate = 0,
  scale = 1,
  className = '',
}: {
  children: ReactNode;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  drift?: number;
  rotate?: number;
  scale?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ ...style, scale }}
      initial={{ y: 0 }}
      animate={{ y: [0, -drift, 0], rotate: [rotate, rotate + 1.5, rotate] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

function Glass({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 backdrop-blur-[2px] p-4 shadow-xl ${className}`}
      style={{ background: 'rgba(45,45,60,0.35)' }}
    >
      {children}
    </div>
  );
}

// --- Mini visuals ---

function RevenueCard() {
  return (
    <Glass className="w-56">
      <div className="text-[10px] tracking-widest text-white/50 uppercase mb-1">Total Revenue</div>
      <div className="text-2xl font-bold text-white">$2.41M</div>
      <div className="text-[11px] text-emerald-400 mb-2">▲ +18.4% vs last month</div>
      <svg viewBox="0 0 200 60" className="w-full h-12">
        <polyline
          points="0,50 30,42 60,46 90,30 120,34 150,18 200,8"
          fill="none"
          stroke={ACCENT}
          strokeWidth="2.5"
        />
        <circle cx="200" cy="8" r="4" fill={ACCENT} />
      </svg>
    </Glass>
  );
}

function BarsCard() {
  const bars = [28, 40, 22, 46, 34, 54];
  return (
    <Glass className="w-48">
      <div className="text-[10px] tracking-widest text-white/50 uppercase mb-1">Monthly Sales</div>
      <div className="text-xl font-bold text-white mb-2">94.2k</div>
      <div className="flex items-end gap-2 h-16">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{ height: `${h}px`, background: `linear-gradient(${ACCENT}, #2a7fb5)` }}
          />
        ))}
      </div>
    </Glass>
  );
}

function DonutCard() {
  const r = 30;
  const circ = 2 * Math.PI * r;
  return (
    <Glass className="w-40 flex flex-col items-center">
      <div className="text-[10px] tracking-widest text-white/50 uppercase mb-2 self-start">Segments</div>
      <svg viewBox="0 0 80 80" className="w-20 h-20">
        <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="9" />
        <circle
          cx="40"
          cy="40"
          r={r}
          fill="none"
          stroke={ACCENT}
          strokeWidth="9"
          strokeDasharray={`${circ * 0.63} ${circ}`}
          strokeLinecap="round"
          transform="rotate(-90 40 40)"
        />
        <text x="40" y="45" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">63%</text>
      </svg>
    </Glass>
  );
}

function MetricsCard() {
  const rows = [
    ['Active Projects', '30+'],
    ['Clients Served', '18'],
    ['Avg. Accuracy', '98.2%'],
  ];
  return (
    <Glass className="w-56">
      <div className="text-[10px] tracking-widest text-white/50 uppercase mb-3">Key Metrics</div>
      <div className="space-y-2">
        {rows.map(([label, val]) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span className="text-white/60">{label}</span>
            <span className="font-semibold" style={{ color: ACCENT }}>{val}</span>
          </div>
        ))}
      </div>
    </Glass>
  );
}

function TrendCard() {
  return (
    <Glass className="w-52">
      <div className="text-[10px] tracking-widest text-white/50 uppercase mb-1">Monthly Trend</div>
      <div className="text-xl font-bold text-white">+24%</div>
      <div className="text-[11px] text-emerald-400 mb-2">▲ vs last month +8%</div>
      <svg viewBox="0 0 200 50" className="w-full h-10">
        <polyline points="0,40 40,36 80,28 120,30 160,16 200,10" fill="none" stroke={ACCENT} strokeWidth="2.5" />
      </svg>
    </Glass>
  );
}

function PieCard() {
  return (
    <Glass className="w-32 flex items-center justify-center">
      <svg viewBox="0 0 60 60" className="w-16 h-16">
        <circle cx="30" cy="30" r="26" fill="rgba(255,255,255,0.08)" />
        <path d="M30 30 L30 4 A26 26 0 0 1 54 38 Z" fill={ACCENT} opacity="0.8" />
        <path d="M30 30 L54 38 A26 26 0 0 1 18 53 Z" fill="#2a7fb5" opacity="0.7" />
      </svg>
    </Glass>
  );
}

function Tag({ text, sub }: { text: string; sub?: string }) {
  return (
    <Glass className="px-4 py-2">
      <div className="text-lg font-bold text-white leading-none">{text}</div>
      {sub && <div className="text-[10px] text-emerald-400 mt-1">{sub}</div>}
    </Glass>
  );
}

interface Item {
  el: ReactNode;
  pos: CSSProperties;
  opacity: number;
  scale: number;
  duration: number;
  delay: number;
  rotate: number;
}

const items: Item[] = [
  // Left edge
  { el: <RevenueCard />, pos: { top: '4%', left: '-4%' }, opacity: 0.5, scale: 0.55, duration: 10, delay: 0, rotate: -3 },
  { el: <BarsCard />, pos: { top: '22%', left: '-3%' }, opacity: 0.45, scale: 0.5, duration: 12, delay: 1, rotate: 2 },
  { el: <MetricsCard />, pos: { top: '40%', left: '-5%' }, opacity: 0.4, scale: 0.5, duration: 11, delay: 0.5, rotate: -2 },
  { el: <Tag text="YoY +14%" />, pos: { top: '56%', left: '-1%' }, opacity: 0.4, scale: 0.55, duration: 10, delay: 0.9, rotate: -2 },
  { el: <TrendCard />, pos: { top: '70%', left: '-4%' }, opacity: 0.42, scale: 0.5, duration: 12, delay: 1.3, rotate: 2 },
  { el: <PieCard />, pos: { top: '88%', left: '-2%' }, opacity: 0.4, scale: 0.55, duration: 13, delay: 2.1, rotate: -3 },

  // Right edge
  { el: <DonutCard />, pos: { top: '5%', right: '-3%' }, opacity: 0.5, scale: 0.55, duration: 11, delay: 0.8, rotate: 3 },
  { el: <Tag text="$1.8M" sub="Profit ▲ 12%" />, pos: { top: '20%', right: '-2%' }, opacity: 0.4, scale: 0.55, duration: 9, delay: 1.9, rotate: 0 },
  { el: <TrendCard />, pos: { top: '34%', right: '-5%' }, opacity: 0.45, scale: 0.5, duration: 10, delay: 1.5, rotate: -2 },
  { el: <Tag text="$2.4M" sub="Revenue" />, pos: { top: '50%', right: '-1%' }, opacity: 0.4, scale: 0.55, duration: 12, delay: 0.4, rotate: 2 },
  { el: <MetricsCard />, pos: { top: '66%', right: '-5%' }, opacity: 0.4, scale: 0.5, duration: 11, delay: 1.1, rotate: -3 },
  { el: <RevenueCard />, pos: { top: '86%', right: '-4%' }, opacity: 0.42, scale: 0.5, duration: 10, delay: 2.0, rotate: 2 },

  // Top edge
  { el: <Tag text="+24%" sub="▲ MoM" />, pos: { top: '-1%', left: '34%' }, opacity: 0.35, scale: 0.55, duration: 9, delay: 1.4, rotate: 0 },
  { el: <Tag text="$" sub="Revenue" />, pos: { top: '-2%', left: '62%' }, opacity: 0.32, scale: 0.55, duration: 11, delay: 0.6, rotate: 2 },

  // Bottom edge
  { el: <BarsCard />, pos: { bottom: '-2%', left: '30%' }, opacity: 0.32, scale: 0.5, duration: 13, delay: 0.7, rotate: 2 },
  { el: <Tag text="98.2%" sub="Accuracy" />, pos: { bottom: '-1%', left: '60%' }, opacity: 0.32, scale: 0.55, duration: 10, delay: 2.3, rotate: -2 },
];

export function BackgroundVisuals() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {items.map((it, i) => (
        <Floaty
          key={i}
          style={{ ...it.pos, opacity: it.opacity }}
          scale={it.scale}
          duration={it.duration}
          delay={it.delay}
          rotate={it.rotate}
        >
          {it.el}
        </Floaty>
      ))}
    </div>
  );
}
