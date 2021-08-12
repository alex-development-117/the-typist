import React, { useState, useEffect } from "react";
import LevelConfiguration from "./LevelConfiguration";
import Gameplay from "./Gameplay";
import LevelStats from "./LevelStats";
import "./Game.scss";

const Game = (props: any) => {
  const TIMER = 10_000;
  const [numberErrors, setNumberErrors] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(TIMER);
  const [generalConfiguration, setGeneralConfiguration] = useState({
    levelSelected: null
  });

  return (
    <div id="game-layout" className="game-layout">
      <LevelConfiguration configuration={generalConfiguration} setConfiguration={setGeneralConfiguration}/>
      <div className="right-side">
        <LevelStats score={score} errors={numberErrors} time={time}/>
        <Gameplay
          level={generalConfiguration.levelSelected}
          setScore={setScore}
          setErrors={setNumberErrors}
          setTime={setTime}
          time={time}
        />
      </div>
    </div>
  );
};

export default Game;
