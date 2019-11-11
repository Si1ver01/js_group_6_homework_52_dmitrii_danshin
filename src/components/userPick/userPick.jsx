import React from "react";
import "./userPick.css";

const Userpick = props => {
  let status = "user-pick m-1 rounded";
  if (props.pick) {
    status += " picked";
  }

  return (
    <span className={status} onClick={props.activePick}>
      {props.usernumber}
    </span>
  );
};

export default Userpick;
