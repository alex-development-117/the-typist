import React, { useEffect, useState } from "react";

const Gameplay = () => {
  const [write, setWrite] = useState("");

  const keyDownCallback = (e: KeyboardEvent) => {
    console.log(e);
    if (e.key.length === 1) {
      setWrite((w) => w + e.key);
    }
    if (e.key === "Backspace") {
      setWrite((w) => w.slice(0, w.length - 1));
    }
    if (e.key === "Enter") {
      setWrite((w) => w + "\n");
    }
    if (e.key === "Tab") {
        setWrite((w) => w + '\t');
      e.preventDefault();
    }
    console.log(write);
    
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => keyDownCallback(e));
  }, []);


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
