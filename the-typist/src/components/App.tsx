import React, { useState, useEffect } from "react";
import Game from "./Game/Game";
import "./App.scss";

const App = () => {
  const [page, setPage] = useState("GAME");

  useEffect(() => {}, []);

  if (page === "GAME") {
    return <Game/>;
 }

  return <div>Error 404</div>;
};

export default App;
