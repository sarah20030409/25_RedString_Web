"use client";
// Because AOSInitializer is a client component,
// it will only be rendered on the client side.

import react from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
  react.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return null;
}
