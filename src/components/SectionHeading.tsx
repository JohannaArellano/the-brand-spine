import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(center && "text-center", className)}>
      {eyebrow && (
        <p className="font-sans text-xs uppercase tracking-widest text-brand-gold mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className="font-serif text-heading text-brand-cream mb-4">
        {title}
      </h2>

      {description && (
        <p className={cn(
          "font-sans text-lg text-brand-gray-300",
          !center && "max-w-3xl"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
