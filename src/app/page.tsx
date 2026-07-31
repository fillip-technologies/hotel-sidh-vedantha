import {
  Award,
  BedDouble,
  Bell,
  Check,
  ChevronDown,
  Coffee,
  Crown,
  Heart,
  Mail,
  MapPin,
  Moon,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Wifi,
} from "lucide-react";
import { Hero } from "@/components/hero";

type Token = {
  name: string;
  className?: string;
  cssVar?: string;
  textClass?: string;
};

const colors: Token[] = [
  { name: "Primary", cssVar: "--primary" },
  { name: "Primary Foreground", cssVar: "--primary-foreground" },
  { name: "Secondary", cssVar: "--secondary" },
  { name: "Accent", cssVar: "--accent" },
  { name: "Background", cssVar: "--background" },
  { name: "Surface", cssVar: "--surface" },
  { name: "Surface Hover", cssVar: "--surface-hover" },
  { name: "Card", cssVar: "--card" },
  { name: "Border", cssVar: "--border" },
  { name: "Muted", cssVar: "--muted" },
  { name: "Muted Foreground", cssVar: "--muted-foreground" },
  { name: "Text Primary", cssVar: "--text-primary" },
  { name: "Text Secondary", cssVar: "--text-secondary" },
  { name: "Text Muted", cssVar: "--text-muted" },
  { name: "Success", cssVar: "--success" },
  { name: "Warning", cssVar: "--warning" },
  { name: "Error", cssVar: "--error" },
  { name: "Gold", cssVar: "--gold" },
  { name: "Glass", cssVar: "--glass" },
  { name: "Overlay", cssVar: "--overlay" },
  { name: "Shadow", cssVar: "--shadow" },
];

const typography: Token[] = [
  { name: "Display XL", textClass: "text-display-xl" },
  { name: "Display LG", textClass: "text-display-lg" },
  { name: "Heading XL", textClass: "text-heading-xl" },
  { name: "Heading LG", textClass: "text-heading-lg" },
  { name: "Heading MD", textClass: "text-heading-md" },
  { name: "Heading SM", textClass: "text-heading-sm" },
  { name: "Body LG", textClass: "text-body-lg" },
  { name: "Body MD", textClass: "text-body-md" },
  { name: "Body SM", textClass: "text-body-sm" },
  { name: "Caption", textClass: "text-caption" },
  { name: "Button", textClass: "text-button" },
];

const shadows: Token[] = [
  { name: "XS", className: "shadow-xs" },
  { name: "SM", className: "shadow-sm" },
  { name: "MD", className: "shadow-md" },
  { name: "LG", className: "shadow-lg" },
  { name: "Gold", className: "shadow-gold" },
  { name: "Glass", className: "shadow-glass" },
];

const radii: Token[] = [
  { name: "None", className: "rounded-none" },
  { name: "XS", className: "rounded-xs" },
  { name: "SM", className: "rounded-sm" },
  { name: "MD", className: "rounded-md" },
  { name: "LG", className: "rounded-lg" },
  { name: "XL", className: "rounded-xl" },
  { name: "Full", className: "rounded-full" },
];

const spacing: Token[] = [
  { name: "1", className: "w-1" },
  { name: "2", className: "w-2" },
  { name: "3", className: "w-3" },
  { name: "4", className: "w-4" },
  { name: "5", className: "w-5" },
  { name: "6", className: "w-6" },
  { name: "8", className: "w-8" },
  { name: "10", className: "w-10" },
  { name: "12", className: "w-12" },
  { name: "16", className: "w-16" },
  { name: "20", className: "w-20" },
  { name: "24", className: "w-24" },
];

const previewNavItems = ["Suites", "Dining", "Wellness", "Experiences"];

function Section({
  eyebrow,
  title,
  children,
}: Readonly<{
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="border-t border-border py-section">
      <div className="mb-8 flex flex-col gap-3">
        <p className="text-caption text-gold">{eyebrow}</p>
        <h2 className="text-heading-lg text-text-primary">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Button({
  children,
  variant,
}: Readonly<{ children: React.ReactNode; variant: string }>) {
  const variants: Record<string, string> = {
    primary: "bg-primary text-primary-foreground hover:bg-text-primary",
    secondary: "bg-secondary text-secondary-foreground hover:bg-surface-hover",
    outline:
      "border border-border bg-background text-text-primary hover:border-gold hover:text-primary",
    ghost: "bg-transparent text-text-secondary hover:bg-surface hover:text-text-primary",
    gold: "bg-gold text-accent-foreground shadow-gold hover:bg-accent",
    dark: "bg-text-primary text-primary-foreground hover:bg-primary",
  };

  return (
    <button
      className={`luxury-focus inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-button ${variants[variant]}`}
      type="button"
    >
      <Sparkles className="size-4" aria-hidden="true" />
      {children}
    </button>
  );
}

function PreviewCard({
  title,
  children,
  className = "",
}: Readonly<{
  title: string;
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <article className={`rounded-lg border border-border p-6 ${className}`}>
      <h3 className="mb-3 text-heading-sm">{title}</h3>
      <div className="text-body-sm">{children}</div>
    </article>
  );
}

function FieldLabel({ children }: Readonly<{ children: React.ReactNode }>) {
  return <label className="text-caption text-text-secondary">{children}</label>;
}

function Alert({
  icon,
  title,
  tone,
}: Readonly<{ icon: React.ReactNode; title: string; tone: string }>) {
  const tones: Record<string, string> = {
    success: "border-success text-success",
    warning: "border-warning text-warning",
    error: "border-error text-error",
    neutral: "border-border text-text-secondary",
  };

  return (
    <div className={`flex items-start gap-3 rounded-lg border bg-card p-4 ${tones[tone]}`}>
      <span className="mt-1">{icon}</span>
      <div>
        <h3 className="text-body-md font-semibold text-text-primary">{title}</h3>
        <p className="text-body-sm text-text-secondary">
          Semantic alerts inherit their tone from centralized state tokens.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Hero />

      <div className="page-shell">
        <Section eyebrow="Foundation" title="Color Palette">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {colors.map((color) => (
              <article
                className="overflow-hidden rounded-lg border border-border bg-card shadow-xs"
                key={color.name}
              >
                <div
                  className="h-28 border-b border-border"
                  style={{ background: `var(${color.cssVar})` }}
                />
                <div className="p-4">
                  <h3 className="text-body-md font-semibold">{color.name}</h3>
                  <p className="text-caption text-text-muted">{color.cssVar}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Type" title="Typography">
          <div className="grid gap-4">
            {typography.map((type) => (
              <article
                className="rounded-lg border border-border bg-card p-6"
                key={type.name}
              >
                <p className="mb-3 text-caption text-gold">{type.name}</p>
                <p className={`${type.textClass} text-text-primary`}>
                  Refined hospitality begins with intentional details.
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Actions" title="Buttons">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="gold">Luxury Gold</Button>
            <Button variant="dark">Dark</Button>
          </div>
        </Section>

        <Section eyebrow="Surfaces" title="Cards">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <PreviewCard title="Light Card" className="bg-card text-text-primary shadow-sm">
              Elegant neutral surface for repeated content, summaries, and booking UI.
            </PreviewCard>
            <PreviewCard
              title="Dark Card"
              className="border-primary bg-primary text-primary-foreground shadow-md"
            >
              High contrast treatment for premium calls to action and featured moments.
            </PreviewCard>
            <PreviewCard
              title="Glass Card"
              className="bg-glass text-text-primary shadow-glass backdrop-blur-md"
            >
              Translucent surface for layered navigation, overlays, and refined panels.
            </PreviewCard>
            <PreviewCard
              title="Luxury Card"
              className="border-gold bg-secondary text-text-primary shadow-gold"
            >
              Gold-accented surface for suite highlights and elevated confirmations.
            </PreviewCard>
          </div>
        </Section>

        <Section eyebrow="Forms" title="Inputs">
          <div className="grid gap-5 rounded-lg border border-border bg-card p-6 shadow-sm md:grid-cols-2">
            <div className="grid gap-2">
              <FieldLabel>Input</FieldLabel>
              <input
                className="luxury-focus rounded-md border border-border bg-background px-4 py-3 text-body-md text-text-primary placeholder:text-text-muted"
                placeholder="Guest name"
              />
            </div>
            <div className="grid gap-2">
              <FieldLabel>Select</FieldLabel>
              <div className="relative">
                <select className="luxury-focus w-full appearance-none rounded-md border border-border bg-background px-4 py-3 text-body-md text-text-primary">
                  <option>Royal Suite</option>
                  <option>Garden Room</option>
                  <option>Courtyard View</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-text-secondary" />
              </div>
            </div>
            <div className="grid gap-2 md:col-span-2">
              <FieldLabel>Textarea</FieldLabel>
              <textarea
                className="luxury-focus min-h-32 rounded-md border border-border bg-background px-4 py-3 text-body-md text-text-primary placeholder:text-text-muted"
                placeholder="Special request"
              />
            </div>
            <div className="flex flex-wrap gap-5">
              <label className="flex items-center gap-3 text-body-sm text-text-secondary">
                <input className="size-4 accent-[var(--gold)]" type="checkbox" defaultChecked />
                Breakfast included
              </label>
              <label className="flex items-center gap-3 text-body-sm text-text-secondary">
                <input className="size-4 accent-[var(--gold)]" type="radio" name="view" defaultChecked />
                Garden view
              </label>
              <label className="flex items-center gap-3 text-body-sm text-text-secondary">
                <input className="size-4 accent-[var(--gold)]" type="radio" name="view" />
                City view
              </label>
            </div>
          </div>
        </Section>

        <Section eyebrow="Elevation" title="Shadows">
          <div className="grid gap-4 md:grid-cols-3">
            {shadows.map((shadow) => (
              <div
                className={`rounded-lg border border-border bg-card p-6 ${shadow.className}`}
                key={shadow.name}
              >
                <p className="text-heading-sm">{shadow.name}</p>
                <p className="text-caption text-text-muted">shadow-{shadow.name.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Shape" title="Border Radius">
          <div className="grid gap-4 md:grid-cols-4">
            {radii.map((radius) => (
              <div className="rounded-lg border border-border bg-card p-4" key={radius.name}>
                <div className={`mb-4 h-20 border border-gold bg-surface ${radius.className}`} />
                <p className="text-body-sm font-semibold">{radius.name}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Rhythm" title="Spacing Scale">
          <div className="grid gap-4">
            {spacing.map((space) => (
              <div className="flex items-center gap-5" key={space.name}>
                <p className="w-16 text-caption text-text-muted">Space {space.name}</p>
                <div className="flex h-12 flex-1 items-center rounded-md bg-surface">
                  <span className={`block h-full bg-gold ${space.className}`} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="System" title="Icons">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
            {[
              BedDouble,
              Coffee,
              Utensils,
              Wifi,
              MapPin,
              Mail,
              ShieldCheck,
              Bell,
              Moon,
              Award,
              Heart,
              Search,
            ].map((Icon, index) => (
              <div
                className="flex h-32 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card text-text-secondary"
                key={index}
              >
                <Icon className="size-6 text-gold" aria-hidden="true" />
                <span className="text-caption">Lucide</span>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Feedback" title="Badges, Alerts, Chips, Tags">
          <div className="grid gap-8">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-primary px-4 py-2 text-caption text-primary-foreground">
                Badge
              </span>
              <span className="rounded-full bg-gold px-4 py-2 text-caption text-accent-foreground">
                Featured
              </span>
              <span className="rounded-full border border-border bg-card px-4 py-2 text-caption text-text-secondary">
                Chip
              </span>
              <span className="rounded-md bg-secondary px-3 py-2 text-caption text-text-primary">
                Tag
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Alert icon={<Check className="size-5" />} title="Reservation confirmed" tone="success" />
              <Alert icon={<Bell className="size-5" />} title="Limited suite availability" tone="warning" />
              <Alert icon={<ShieldCheck className="size-5" />} title="Payment requires review" tone="error" />
              <Alert icon={<Star className="size-5" />} title="Luxury preference saved" tone="neutral" />
            </div>
          </div>
        </Section>

        <Section eyebrow="Structure" title="Navigation">
          <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <Crown className="size-6 text-gold" aria-hidden="true" />
                <span className="text-heading-sm">Hotel Sidh Vedantha</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {previewNavItems.map((item) => (
                  <a
                    className="rounded-md px-4 py-2 text-button text-text-secondary hover:bg-surface hover:text-primary"
                    href="#"
                    key={item}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <Button variant="gold">Book Stay</Button>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
