import { motion } from "framer-motion";

import { ExperienceCTA } from "./ExperienceCTA";
import { ExperienceIcon } from "./ExperienceIcon";
import type { ExperienceItem } from "./experienceData";

type ExperienceContentProps = {
  item: ExperienceItem;
  isActive: boolean;
};

export function ExperienceContent({ item, isActive }: ExperienceContentProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-[var(--z-raised)] p-5 text-primary-foreground md:p-6">
      <motion.div
        animate={{ y: isActive ? -10 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <ExperienceIcon icon={item.icon} />
        <h3 className="mt-4 text-heading-md">{item.title}</h3>
      </motion.div>

      <motion.div
        animate={{
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 16,
        }}
        className="mt-4 overflow-hidden"
        initial={false}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <p className="max-w-[18rem] text-body-sm text-primary-foreground/85">
          {item.description}
        </p>
        <div className="mt-5">
          <ExperienceCTA href={item.link.href} label={item.link.label} tone="light" />
        </div>
      </motion.div>
    </div>
  );
}
