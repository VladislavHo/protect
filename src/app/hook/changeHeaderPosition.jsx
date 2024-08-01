import { observer } from "mobx-react-lite";
import React from "react";
import { useEffect } from "react";


export default function changeHeaderPosition({ref, changeOnDarkPosition}) {
  useEffect(() => {
    function handleScroll() {
      const position = ref.current.getBoundingClientRect();
      const heightSection = ref.current.offsetHeight;

      if (heightSection <= Math.abs(position.top)) {
        console.log(false);
        // changeOnDarkPosition(false);
      } else if (position.top <= 0) {
        console.log(true);
        // changeOnDarkPosition(true);
      } 
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, changeOnDarkPosition]);
}
