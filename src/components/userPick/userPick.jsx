import React from 'react'
import './userPick.css'


const Userpick = props =>{
  let status = "user-pick m-1 rounded";
  if (props.pick){
    status +=" picked"
  }

  return(
    <div className={status} onClick={props.activePick}>
      <span>{props.usernumber}</span>
    </div>
  )
}

export default Userpick;