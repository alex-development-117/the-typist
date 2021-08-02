import React, { useEffect } from "react";
import './LevelStats.scss'

const LevelStats = (props:any) => {

    useEffect(() => {

    }, [props.score]);

    return (
        <div className="level-stats">
            <div className="total-score center">Score: {props.score}</div>
            <div className="total-score center">Errors: {props.errors}</div>
            <div className="total-score center">Time: 9:54s</div>
        </div>
    );

}

export default LevelStats;