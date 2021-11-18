import React from "react";

const ShoppingCar = ({ totalqty = 0, onEmptyCar = () => {} }) => {
  const carStyle = { fonstSize: "2em" };
  return (
    <div onEmptyCar={onEmptyCar} style={carStyle}>
      🛒
      {totalqty}
    </div>
  );
};



export default ShoppingCar;
