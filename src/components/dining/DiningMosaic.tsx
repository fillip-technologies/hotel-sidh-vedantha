import Image from "next/image";

type MosaicTile = {
  src: string;
  alt: string;
  sizes: string;
};

const leftTiles: MosaicTile[] = [
  {
    src: "/images/brekfast.jpg",
    alt: "Plated breakfast dessert served at Hotel Sidh Vedantha",
    sizes: "(min-width: 1024px) 20vw, 40vw",
  },
  {
    src: "/images/lunch.jpg",
    alt: "Regional thali spread with curries and rice at Hotel Sidh Vedantha",
    sizes: "(min-width: 1024px) 20vw, 40vw",
  },
];

const featureTile: MosaicTile = {
  src: "/images/cooking.png",
  alt: "Chef grilling skewers at the live kitchen counter",
  sizes: "(min-width: 1024px) 36vw, 60vw",
};

const bottomTiles: MosaicTile[] = [
  {
    src: "/images/dinner.jpg",
    alt: "Evening fine dining plate with a chilled beverage",
    sizes: "(min-width: 1024px) 21vw, 35vw",
  },
  {
    src: "/images/2.png",
    alt: "Signature dessert plated for dinner service",
    sizes: "(min-width: 1024px) 15vw, 25vw",
  },
];

function Tile({ src, alt, sizes }: Readonly<MosaicTile>) {
  return (
    <figure className="dining-mosaic-tile">
      <Image alt={alt} className="object-cover" fill sizes={sizes} src={src} />
    </figure>
  );
}

export function DiningMosaic() {
  return (
    <section className="dining-mosaic section-y" aria-labelledby="dining-mosaic-heading">
      <div className="relative z-[var(--z-raised)] mx-auto w-full max-w-[var(--container-hero)] px-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <p className="brand-gradient-text text-caption tracking-[var(--tracking-eyebrow)]">
              Dining
            </p>
            <h2
              className="dining-mosaic-headline mt-6 text-heading-lg uppercase md:text-heading-xl"
              id="dining-mosaic-heading"
            >
              <span className="block">Crafted with passion,</span>
              <span className="block">served with care</span>
            </h2>
            <p className="mt-6 max-w-[32rem] text-body-lg text-text-secondary">
              Savour regional delights alongside fine dining and home-style
              cooking, prepared fresh each day by our kitchen with the same
              warmth we bring to every stay.
            </p>
          </div>

          <div className="dining-mosaic-grid">
            <div className="dining-mosaic-col">
              {leftTiles.map((tile) => (
                <Tile key={tile.src} {...tile} />
              ))}
            </div>

            <div className="dining-mosaic-main">
              <Tile {...featureTile} />
              <div className="dining-mosaic-row">
                {bottomTiles.map((tile) => (
                  <Tile key={tile.src} {...tile} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
