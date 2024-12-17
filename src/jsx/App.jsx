import { useState } from "react";
import "../scss/App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="App">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
