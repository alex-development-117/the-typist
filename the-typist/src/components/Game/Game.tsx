import React, {useEffect} from "react";
import LevelConfiguration from "./LevelConfiguration";
import Gameplay from './Gameplay';
import LevelStats from './LevelStats';
import './Game.scss'

const Game = (props:any) => {

    useEffect(() => {
        
    }, []);

    return (
        <div id="game-layout" className="game-layout">
            <LevelConfiguration/>
            <div className="right-side">
                <LevelStats/>
                <Gameplay/>
            </div>
        </div>
    );
}

export default Game;