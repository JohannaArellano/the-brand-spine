import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  gold?: boolean;
  hover?: boolean;
  padding?: string;
}

export default function GlassCard({
  children,
  className,
  gold = false,
  hover = false,
  padding = "p-8",
}: GlassCardProps) {
  const baseClass = gold ? "glass-card-gold" : "glass-card";

  return (
    <div
      className={cn(
        baseClass,
        padding,
        hover && "transition-all duration-300 hover:border-brand-gold/50 hover:shadow-lg hover:shadow-brand-gold/10",
        className
      )}
    >
      {children}
    </div>
  );
}
