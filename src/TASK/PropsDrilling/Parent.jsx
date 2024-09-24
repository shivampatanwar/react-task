import React from "react";
import Child1 from "./Child1";

const Parent = () => { 
  const [data, setData] = React.useState({
    property: "50 Acre",
    cars: {
      car1: "Toyota",
      car2: "Honda",
      car3: "BMW",
    },
  });
  return (
    <div id="parent" className="parent-container">
      <div >
        <h1>Parent</h1>
        <p>{data.property}</p>
        <p>{data.cars.car1}</p>
        <p>{data.cars.car2}</p>
        <p>{data.cars.car3}</p>
      </div>
      <Child1 data={data} />
    </div>
  );
};

export default Parent;
