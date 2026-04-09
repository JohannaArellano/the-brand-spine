"use client";

import React from "react";
import { motion } from "framer-motion";

interface SpineVisualProps {
  height?: number;
  className?: string;
}

export default function SpineVisual({
  height = 300,
  className = "",
}: SpineVisualProps) {
  const nodeCount = 5;
  const nodePositions = Array.from({ length: nodeCount }, (_, i) =>
    Math.round((i / (nodeCount - 1)) * 100)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const pulseVariants = {
    pulse: {
      boxShadow: [
        "0 0 0 0 rgba(201, 169, 110, 0.4)",
        "0 0 0 10px rgba(201, 169, 110, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <motion.svg
        width="80"
        height={height}
        viewBox={`0 0 80 ${height}`}
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main vertical line */}
        <motion.line
          x1="40"
          y1="0"
          x2="40"
          y2={height}
          stroke="#c9a96e"
          strokeWidth="2"
          variants={lineVariants}
        />

        {/* Nodes and connectors */}
        {nodePositions.map((position, index) => {
          const yPos = (position / 100) * height;
          const isOdd = index % 2 === 1;

          return (
            <motion.g key={index} variants={nodeVariants}>
              {/* Horizontal connector line */}
              <line
                x1={isOdd ? "10" : "70"}
                y1={yPos}
                x2="40"
                y2={yPos}
                stroke="#c9a96e"
                strokeWidth="1"
                opacity="0.5"
              />

              {/* Node circle */}
              <motion.circle
                cx="40"
                cy={yPos}
                r="6"
                fill="#c9a96e"
                variants={pulseVariants}
                animate="pulse"
              />

              {/* Inner glow */}
              <circle
                cx="40"
                cy={yPos}
                r="3"
                fill="#c9a96e"
                opacity="0.8"
              />
            </motion.g>
          );
        })}
      </motion.svg>
    </div>
  );
}
