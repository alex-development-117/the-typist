import React from "react";
import LevelConfiguration from "./LevelConfiguration";
import Gameplay from './Gameplay';
import LevelStats from './LevelStats';
import './Game.scss'

const Game = () => {

    

    return (
        <div className="game-layout">
            <LevelConfiguration/>
            <div>
                <LevelStats/>
                <Gameplay/>
            </div>
        </div>
    );
}

export default Game;