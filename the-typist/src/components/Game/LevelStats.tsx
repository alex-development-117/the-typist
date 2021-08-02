import React from "react";
import './LevelStats.scss'

const LevelStats = (props:any) => {


    return (
        <div className="level-stats">
            <div className="total-score center">Score: 1000</div>
            <div className="total-score center">Errors: {props.errors}</div>
            <div className="total-score center">Time: 9:54s</div>
        </div>
    );

}

export default LevelStats;