import React, { useEffect, useState } from "react";

export default function scrollingHelper() {
  //hooks for scrolling observer
  const [scrollY, setScrollY] = useState<number>(0);

  //make nav Position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const windowHeight = scrollY > 40;

  return { windowHeight };
}
