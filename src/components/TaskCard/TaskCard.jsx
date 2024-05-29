import React, { useState } from "react";
import "./taskCard.css";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
const TaskCard = ({ task ,deleteHandler,index}) => {
  const [bg,setBg]=useState(false);
  const clickHandler = ()=>{
    setBg((prev)=>!prev);
  }
  return (
    <div className={"taskCard"} style={bg ? {backgroundColor:"#3A70F0",color:"#fff"  }:null} >
      <div className="card_left" onClick={clickHandler}>
        {
          bg && <FaCheck />
        }
        <p style={bg?{textDecorationLine:"line-through"}:null}>{task}</p>
      </div>
      <RxCross2 onClick={()=>deleteHandler(index)} />
    </div>
  );
};

export default TaskCard;
