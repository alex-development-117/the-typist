import React, {useState} from "react";
import { OptionsMenu } from "../../interfaces/optionsMenu.interface";
import DropDownItem from "./DropDownItem";
import SelectLevel from "./ContentMenuOptions/SelectLevel";

const LevelConfiguration = (props: any) => {

    // const [levelSelected, setLevelSelected] = useState(props.config.levelSelected);

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

  const selectContent = (optionId: number) => {
    if (optionId === 0) {
      return <SelectLevel />;
    } else if (optionId === 1) {
      return <SelectLevel />;
    }
  };

  return (
    <div className="level-configuration">
      {optionsMenu.map((option) => {
        return (
          <DropDownItem key={option.id} option={option}>
            {selectContent(option.id)}
          </DropDownItem>
        );
      })}
    </div>
  );
};

export default LevelConfiguration;
