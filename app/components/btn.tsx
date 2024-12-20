"use client";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";

interface BtnProps {
  className?: string;
  displayText?: string;
  url?: string;
}

const Btn = ({
  className = "",
  displayText = "Start Learning",
  url = "/StartLearning",
}: BtnProps) => {
  const defaultOptions = {
    reverse: true,
    max: 20,
    perspective: 500,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.25,.8,.25,1)",
  };

  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <Tilt options={defaultOptions}>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => setIsVisible(false)}
          >
            <Link href={url}>
              <button
                className={`${className} bg-primary text-xs sm:text-sm text-bg font-bold py-3 px-6 rounded-lg hover:opacity-90 duration-200 ease-in-out max-h-12 hover:shadow-xl hover:shadow-primary/30`}
              >
                {displayText}
              </button>
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Tilt>
  );
};

export default Btn;
