import React, { useState } from "react";
import LevelConfiguration from "./LevelConfiguration";
import Gameplay from './Gameplay';
import LevelStats from './LevelStats';
import './Game.scss'

const Game = (props:any) => {

  const [numberErrors, setNumberErrors] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const level = 'class Hola extends React.Component{}';

    return (
        <div id="game-layout" className="game-layout">
            <LevelConfiguration/>
            <div className="right-side">
                <LevelStats score={score} errors={numberErrors}/>
                <Gameplay level={level} setScore={setScore} setErrors={setNumberErrors}/>
            </div>
        </div>
    );
}

export default Game;