"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cursorRef.current) {
      // ===== Listen for mouse movement =====
      const moveCursor = (e: MouseEvent) => {
        gsap.set(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
        });
      };

      //   ===== Animation for mouse click =====
      const clickCursor = () => {
        gsap.to(cursorRef.current, {
          scale: 1.3,
          yoyo: true,
          duration: 0.08,
          repeat: 1,
        });
      };

      // ===== Add event listeners for interactive elements =====
      const interactiveElements =
        document.querySelectorAll(".mouse_interactive");
      // Mouse in
      const handleMouseEnter = () => {
        gsap.to(cursorRef.current, {
          scale: 2.5,
          duration: 0.1,
          borderWidth: 0.5,
        });
      };
      // Mouse out
      const handleMouseLeave = () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.1,
        });
      };

      // Add event listeners, "el" means "DOM element".
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter); // Do "handleMouseEnter" when the mouse enters the element
        el.addEventListener("mouseleave", handleMouseLeave); // Do "handleMouseLeave" when the mouse leaves the element
      });

      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("click", clickCursor);

      // Remove event listeners
      return () => {
        window.removeEventListener("mousemove", moveCursor);
        window.removeEventListener("click", clickCursor);
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    }
  }, []);

  return (
    <div
      ref={cursorRef}
      className="duration-[50ms] fixed w-10 h-10 bg-transparent border border-Cus_Red rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block"
    />
  );
};

export default Cursor;
