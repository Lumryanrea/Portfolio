interface SectionDividerProps {
  width?: number;
  className?: string;
}

export function SectionDivider({ width = 80, className = '' }: SectionDividerProps) {
  return (
    <div 
      className={`section-divider ${className}`}
      style={{ width: `${width}px` }}
    />
  );
}
