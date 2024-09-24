
import React from "react";
import Child3 from "./Child3";

const Child2 = (props) => {
  return (
    <div id="child2">
      <div className="child2-container">
        <h1>Child 2</h1>
        <p>{props.data.property}</p>
        <p>{props.data.cars.car1}</p>
        <p>{props.data.cars.car2}</p>
        <p>{props.data.cars.car3}</p>
      </div>
      <Child3 data={props.data} />
    </div>
  );
};

export default Child2;
