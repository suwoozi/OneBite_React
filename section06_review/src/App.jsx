import { useState } from "react";
import "./App.css";
import Display from "./components/display";
import Keypad from "./components/Keypad";

function App() {
  const [currentInput, setCurrentInput] = useState(0);
  const [expression, setExpression] = useState("");

  return (
    <>
      <section>
        <Display currentInput={currentInput} expression={expression} />
      </section>
      <section>
        <Keypad
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          expression={expression}
          setExpression={setExpression}
        />
      </section>
    </>
  );
}

export default App;
