import React, { useEffect, useState } from "react";
import { useCallback } from "react";

const Gameplay = () => {
  const [write, setWrite] = useState("");

  const keyDownCallback = useCallback((e: KeyboardEvent) => {
    console.log(e);
    if (e.key.length === 1) {
      setWrite((w) => w + e.key);
    }else{
      switch(e.key){
        case 'Backspace':
          setWrite((w) => w.slice(0, w.length - 1));
          break;
        case 'Enter':
          setWrite((w) => w + "\n");
          break;
        case 'Tab':
          setWrite((w) => w + "\t");
          e.preventDefault();
          break;
      }
    }
    console.log(write);
    
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", (e) => keyDownCallback(e));

    return () => {
      window.removeEventListener("keydown", (e) => keyDownCallback(e));
    }
  }, [keyDownCallback]);


  useEffect(() => {
    return () => {
      console.log("Destruyendo");
    };
  }, []);

  return (
    <div id="gameplay" className="gameplay">
      {write}
    </div>
  );
};

export default Gameplay;
