  import React from "react";

  const Child3 = (props) => {
    return (
      <div id="child3">
        <div className="child3-container">
          <h1>Child 3</h1>
          <p>{props.data.property}</p>
          <p>{props.data.cars.car1}</p>
          <p>{props.data.cars.car2}</p>
          <p>{props.data.cars.car3}</p>
        </div>
      </div>
    );
  };

  export default Child3;
