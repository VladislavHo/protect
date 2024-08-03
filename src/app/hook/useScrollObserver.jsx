"use client";
import { useEffect } from "react";

export default function useScrollObserver(ref, setWidthComponets) {
  useEffect(() => {
    function handleScroll() {
      const position = ref.current.getBoundingClientRect();
      if (window.innerHeight >= position.top) {
        setWidthComponets(window.innerHeight - position.top);
      }
    }

    const handleResize = () => {
      if (window.innerWidth < 480) {
        window.removeEventListener('scroll', handleScroll);
        setWidthComponets(100);
      } else {
        window.addEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Call the handleResize function initially

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [ref, setWidthComponets]);
}