import React from "react";

const UnloggedBackground = (props:any) => {
  return (
    <div className="full-screen">
      <div className="header center title-1">The typist</div>
      <div className="content center">
        {props.children}
      </div>
    </div>
  );
};

export default UnloggedBackground;
