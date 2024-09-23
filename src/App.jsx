import Propsdrilling from "./TASK/PropsDrilling/Propsdrilling";
import ThemeContextAPI from "./TASK/ThemeContextAPI/ThemeContextAPI";
import Youtube from "./TASK/Youtube/Youtube";

function App() {
  return (
    <div className="parent">
      <Youtube/>
      <ThemeContextAPI/>
      <Propsdrilling/>
    </div>
  );
}

export default App;
