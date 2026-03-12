"use client";
import { categories } from "./Data";

interface Props {
  active: string;
  onSelect: (id: string) => void;
}

export function MenuTabs({ active, onSelect }: Props) {
  return (
    <div
      className="w-full overflow-x-auto"
      style={{
        background:   "var(--color-bg-card)",
        borderBottom: "1px solid var(--color-border)",
        position:     "sticky",
        top:          "72px",
        zIndex:       40,
      }}
    >
      <div
        className="max-w-7xl mx-auto flex items-stretch gap-0"
        style={{ padding: "0 clamp(1.25rem,5vw,3rem)" }}
      >
        {categories.map((cat) => {
          const isActive = active === cat.id;
          // Extract the component and capitalize it so React knows to render it
          const Icon = cat.icon;

          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className="flex items-center gap-2 px-4 py-4 text-xs font-bold uppercase tracking-widest whitespace-nowrap cursor-pointer transition-all duration-150 shrink-0"
              style={{
                color:        isActive ? "var(--color-primary)" : "var(--color-text-secondary)",
                borderBottom: isActive
                  ? "2px solid var(--color-primary)"
                  : "2px solid transparent",
                background:   "transparent",
                marginBottom: "-1px",
              }}
            >
              {/* Render as a component with props */}
              <Icon size={16} strokeWidth={isActive ? 2.5 : 2} className="shrink-0" />
              <span className="hidden sm:inline">{cat.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}