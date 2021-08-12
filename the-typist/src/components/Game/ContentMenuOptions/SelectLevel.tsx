import React, {useEffect} from 'react'
import './Options.scss'

const SelectLevel = (props:any) => {

    const staticLevels = [
        {
            id: 0,
            name: 'Classes',
            timePerSublevel: 10,
            level: "class FOO extends React.PureComponent {}"
        },
        {
            id: 0,
            name: 'Functions',
            timePerSublevel: 10,
            level: "function selectLevel() {}"
        },
    ];

    useEffect(() => {
    
    }, []);

    const handleOnClick = (level:any) => {
        props.setConfiguration((config:any) => {
            return {
                ...config,
                levelSelected: level
            }
        });
    }

    const renderLevels = () => {
        return staticLevels.map((level, index) => {
            return (
                <div onClick={() => {handleOnClick(level)}} className="level" key={index}>
                    <div className="level-index">{index+1}</div>
                    <div className="level-name">{level.name}</div>
                </div>
            );
        })
    }

    return (
        <>
            {renderLevels()}
        </>
    );
}

export default SelectLevel;