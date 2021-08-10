import React, {useState} from "react";

import { OptionsMenu } from '../../interfaces/optionsMenu.interface';
import './DropDownItem.scss';


const DropDownItem = (props:any) => {

    const [isOpen, setIsOpen] = useState<boolean>(props.option.open);

    return (
        <div className="dropdown-item">
            <div onClick={() => setIsOpen((open:boolean) => !open)} className={`header-item ${isOpen?'open':''}`}>
                <div className="icon"><i className={`${props.option.icon}`}></i></div>
                <div className="title">{props.option.name}</div>
            </div>
            <div className={`content-item ${isOpen?'open':''}`}>
                {props.children}
            </div>
        </div>
    );
}

export default DropDownItem;