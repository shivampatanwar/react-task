import React from "react";
import Child2 from "./Child2";

const Child1 = (props) => {
  return (
    <div id="child1">
      <div className="child1-container">
        <h1>Child 1</h1> 
        <p>{props.data.property}</p>
        <p>{props.data.cars.car1}</p>
        <p>{props.data.cars.car2}</p>
        <p>{props.data.cars.car3}</p>
      </div>
      <Child2 data={props.data} />

    </div>
  );
};

export default Child1;
