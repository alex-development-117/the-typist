import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import './Gameplay.scss'

const Gameplay = (props:any) => {
  const [write, setWrite] = useState<string>("");

  const keyDownCallback = useCallback((e) => {
    if (e.key.length === 1) {
      console.log(props.level);
      evaluateString(write + e.key, props.level)?setWrite((w) => w += e.key):props.setErrors((e:number) => e+=1);
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
    
  }, [write]);

  const evaluateString = (userString:string, levelString:string):boolean => {
    return userString===levelString.slice(0, userString.length)?true:false;
  }

  useEffect(() => {

  }, []);

  return (
    <div onKeyDown={(e) => {keyDownCallback(e)}} tabIndex={0} id="gameplay" className="gameplay">
      <div className="container-code">
        <div className="good">{write}</div><div className="level">{props.level.slice(write.length, props.level.length)}</div>
      </div>
    </div>
  );
};

export default Gameplay;
