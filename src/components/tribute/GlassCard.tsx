import { useState, type ReactNode } from "react";
import { Maximize2, X } from "lucide-react";

export function GlassCard({
  icon,
  title,
  children,
  expandable = true,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  expandable?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const body = (
    <>
      <header className="flex items-center gap-4">
        <span className="glass-icon shrink-0">{icon}</span>
        <h2 className="min-w-0 truncate font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </header>
      <div className="mt-6 font-serif text-lg italic leading-relaxed text-muted-foreground sm:text-xl">
        {children}
      </div>
    </>
  );

  return (
    <>
      <article className="glass-card animate-rise relative w-full max-w-3xl p-6 sm:p-10">
        {expandable && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Expand ${title}`}
            className="glass-chip absolute right-4 top-4 grid h-10 w-10 place-items-center"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        )}
        {body}
      </article>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-background/80 p-4 backdrop-blur-xl">
          <div className="glass-card animate-rise relative max-h-[85vh] w-full max-w-4xl overflow-auto p-8 sm:p-12">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="glass-chip absolute right-4 top-4 grid h-10 w-10 place-items-center"
            >
              <X className="h-4 w-4" />
            </button>
            {body}
          </div>
        </div>
      )}
    </>
  );
}
