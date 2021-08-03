import React from "react";
import { OptionsMenu } from "../../interfaces/optionsMenu.interface";
import DropDownItem from "./DropDownItem";

const LevelConfiguration = () => {
  const optionsMenu: OptionsMenu[] = [
    {
      id: 0,
      icon: "fas fa-level-up-alt",
      name: "Select level",
      open: false,
    },
    {
      id: 1,
      icon: "fas fa-cogs",
      name: "Level configuration",
      open: false,
    },
    {
      id: 2,
      icon: "fas fa-clipboard-list",
      name: "Level scoreboard",
      open: false,
    },
    {
      id: 3,
      icon: "fas fa-user-cog",
      name: "User settings",
      open: false,
    },
  ];

  return (
    <div className="level-configuration">
      {optionsMenu.map((option) => <DropDownItem key={option.id} option={option}/>)}
    </div>
  );
};

export default LevelConfiguration;
