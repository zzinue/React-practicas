import React, {useState} from "react";


const Counter = ({ qty, onAddClick,onSubtractClick}) => {



  const styleContainer = {
    margin: "5px",
    fontSize: "20px",
  };
  const styleQty = {
    marginLeft: "15px",
    marginRight: "15px",
  };
  return (
    <div style={styleContainer}>
      {(qty<=0)?null : <button  onClick={onSubtractClick}> - </button>}
      <span style={styleQty}>{qty}</span>
      <button onClick={onAddClick}> + </button>
    </div>
  );
};



export default Counter;
