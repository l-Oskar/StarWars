import style from "./App.module.scss";
import PeoplePage from "../../containers/PeoplePage/PeoplePage";

function App() {
  return (
    <>
      <div id={style.App}>
        <PeoplePage />
      </div>
    </>
  );
}

export default App;
