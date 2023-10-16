import React, { useEffect, useRef } from "react";
import {
  LazyMotion,
  useAnimation,
  useInView,
  m,
  domAnimation,
} from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
export const Reveal = ({
  children,
  width = "full",
  orientation = "y",
  inverted = false,
  className,
  duration = 0.5,
  delay = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const classes = `relative w-${width} overflow-hidden`;

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView]);

  return (
    <div className={twMerge(clsx(classes, className))}>
      <LazyMotion features={domAnimation}>
        <m.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, [orientation]: inverted ? "-100%" : "100%" },
            visible: { opacity: 1, [orientation]: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: duration, delay: delay }}
          className={className}
        >
          {children}
        </m.div>
      </LazyMotion>
    </div>
  );
};
