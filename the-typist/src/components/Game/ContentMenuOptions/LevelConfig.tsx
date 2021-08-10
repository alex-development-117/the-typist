import React, {useEffect} from "react";

const LevelConfig = (props:any) => {

  const level = "class Hola extends React.Component{}";

    useEffect(() => {
        console.log("Fetch levels");
    }, []);

    return <div>LevelConfig</div>
}

export default LevelConfig;