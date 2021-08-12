import React, { useEffect, useState } from "react";
import "./Gameplay.scss";

const Gameplay = (props: any) => {
  const POINTS_PER_CORRECT_VALUE = 50;
  const POINTS_PER_INCORRECT_VALUE = 50;
  const [write, setWrite] = useState<string>("");

  // LOGIC

  const keyDownCallback = (e: any) => {
    if(!props.level)return;
    if (e.key.length === 1) {
      evaluateString(write + e.key, props.level)
        ? isCorrectValue(true, e.key)
        : isCorrectValue(false);
    } else {
      switch (e.key) {
        case "Backspace":
          setWrite((w) => w.slice(0, w.length - 1));
          props.setScore((s: number) => (s -= POINTS_PER_CORRECT_VALUE));
          break;
        case "Enter":
          setWrite((w) => w + "\n");
          break;
        case "Tab":
          e.preventDefault();
          setWrite((w) => w + "\t");
          break;
      }
    }
  };

  const isCorrectValue = (isCorrect: boolean, letter?: string) => {
    if (isCorrect) {
      setWrite((w) => (w += letter));
      props.setScore((s: number) => (s += POINTS_PER_CORRECT_VALUE));
    } else {
      props.setErrors((e: number) => (e += 1));
      props.setScore((s: number) => (s -= POINTS_PER_INCORRECT_VALUE));
    }
  };

  const evaluateString = (userString: string, levelString: string): boolean => {
    return userString === levelString.slice(0, userString.length)
      ? true
      : false;
  };

  const handleOnClickStartGame = () => {
    if(!props.level)return;
    const timer = setInterval(() => {
      props.setTime((t: any) => {
        if (t === 0) {
          clearInterval(timer);
          return t;
        }
        return (t -= 100);
      });
    }, 100);
  };

  // RENDERS

  const renderPlayGame = () => {
    return(
      <div>Click to play game</div>
    );
  }

  const renderWarningSelectLevel = () => {
    return (
      <div>Select a level first!</div>
    );
  }

  const renderGameplay = () => {
    return (
      <div className="container-code">
          <div className="good">{write}</div>
          <div className="level">
            {props.level.slice(write.length, props.level.length)}
          </div>
      </div>
    );
  }

  const renderLevelCompleted = () => {
    return <div>Nivel completado</div>
  }

  const renderStartEndGame = () => {
    if(props.level){
        return write===props.level
        ?renderLevelCompleted()
        :renderGameplay();
    }
    return renderWarningSelectLevel();
  };

  return (
    <div
      onKeyDown={(e) => {
        keyDownCallback(e);
      }}
      onClick={handleOnClickStartGame}
      tabIndex={0}
      id="gameplay"
      className="gameplay"
    >
      {renderStartEndGame()}
    </div>
  );
};

export default Gameplay;
