import { ScrollReveal } from './ScrollReveal';

export function QuoteDivider({ text }: { text: string }) {
  return (
    <ScrollReveal>
      <div className="flex items-center justify-center gap-4 px-6 my-12">
        <span className="h-px w-8 bg-white/15" />
        <p className="font-serif italic text-center text-white/40 text-sm md:text-base max-w-xl leading-relaxed">
          {text}
        </p>
        <span className="h-px w-8 bg-white/15" />
      </div>
    </ScrollReveal>
  );
}
