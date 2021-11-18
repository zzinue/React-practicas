import React from "react";

const ShoppingCar = ({ qtyTotal = 0, onEmptyCar = () => {} }) => {
  const carStyle = { fonstSize: "2em" };
  return (
    <div onEmptyCar={onEmptyCar} style={carStyle}>
      🛒
      {qtyTotal}
    </div>
  );
};

export default ShoppingCar;
