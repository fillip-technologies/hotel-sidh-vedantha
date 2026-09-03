/**
 * Renders the SVG gradient that `.brand-gradient-icon` paints icons with.
 *
 * CSS gradients cannot paint an SVG stroke, and the lucide icons used across the
 * site are stroke-based (`stroke="currentColor"`). So the gradient has to exist
 * as a real SVG <linearGradient> that CSS can point at via `stroke: url(#id)`.
 * The stops mirror --brand-gradient in globals.css; keep the two in sync.
 *
 * Rendered once in the root layout so every page can reference the id.
 */
export function BrandGradientDefs() {
  return (
    <svg aria-hidden="true" focusable="false" className="absolute size-0 overflow-hidden">
      <defs>
        <linearGradient id="brand-icon-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4A24C" />
          <stop offset="55%" stopColor="#8C1F3B" />
          <stop offset="100%" stopColor="#5C1526" />
        </linearGradient>
      </defs>
    </svg>
  );
}
