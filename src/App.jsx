import { useEffect } from "react";
import Controlledform from "./TASK/ControlledForm/Controlledform";
import Propsdrilling from "./TASK/PropsDrilling/Propsdrilling";
import ThemeContextAPI from "./TASK/ThemeContextAPI/ThemeContextAPI";
import Youtube from "./TASK/Youtube/Youtube";

function App() {


  return (
    <div className="parent">
      <Youtube/>
      <ThemeContextAPI/>
      <Propsdrilling/>
      <Controlledform/>
    </div>
  );
}

export default App;
