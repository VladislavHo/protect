"use client";

import React, { useState, useEffect } from "react";

export default function useScrollPosition() {
  const [scrollDirection, setScrollDirection] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    if (window.innerWidth <= 1280) {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingUp = prevScrollPos > currentScrollPos;
        if(prevScrollPos === 0) setPrevScrollPos(true);
        setScrollDirection(isScrollingUp ? true : false);
        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener("scroll", handleScroll);
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);


  
 return scrollDirection

}
