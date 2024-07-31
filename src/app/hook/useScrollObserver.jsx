"use client";
import { useEffect } from "react";

export default function useScrollObserver(ref, setWidthComponets) {
  useEffect(() => {
    function handleScroll() {
      const position = ref.current.getBoundingClientRect();
      console.log(window.innerHeight >= Math.abs(position.top));
      if (window.innerHeight >= position.top) {
        setWidthComponets(window.innerHeight - position.top);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, setWidthComponets]);
}