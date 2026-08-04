"use client";

import { motion } from "framer-motion";

import { ExperienceContent } from "./ExperienceContent";
import { ExperienceImage } from "./ExperienceImage";
import { ExperienceOverlay } from "./ExperienceOverlay";
import type { ExperienceItem } from "./experienceData";

type ExperiencePanelProps = {
  item: ExperienceItem;
  isActive: boolean;
  onActivate: () => void;
};

export function ExperiencePanel({
  item,
  isActive,
  onActivate,
}: ExperiencePanelProps) {
  return (
    <motion.article
      animate={{ flex: isActive ? 3.2 : 1 }}
      aria-label={item.title}
      className="group relative min-h-[36rem] min-w-[16rem] overflow-hidden bg-primary outline-none md:min-h-[32rem] lg:min-w-0"
      onFocus={onActivate}
      onMouseEnter={onActivate}
      tabIndex={0}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <ExperienceImage alt={`${item.title} at Hotel Sidh Vedanta`} image={item.image} isActive={isActive} />
      <ExperienceOverlay isActive={isActive} />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary to-primary/0"
      />
      <ExperienceContent item={item} isActive={isActive} />
    </motion.article>
  );
}
