const Keypad = ({
  currentInput,
  setCurrentInput,
  expression,
  setExpression,
}) => {
  const onClickButton = (value) => {
    if (currentInput === 0) {
      setCurrentInput(value);
    } else {
      setCurrentInput(currentInput + value);
    }
  };

  const expressionClear = () => {
    setCurrentInput(0);
    setExpression("");
  };

  const onClickBackspace = () => {
    if (currentInput.length === 1) {
      setCurrentInput(0);
    } else {
      setCurrentInput(currentInput.slice(0, -1));
    }
  };

  const calculate = () => {
    let number = "";
    let result = 0;
    let operator = "";

    for (const char of currentInput) {
        console.log("---char", char, "---number", number, "---result", result)
      if (!isNaN(char)) {
        number += char;
      } else {
        operator = char;
        if (result === 0) {
          result = Number(number);
          number = "";
        } else {
          switch (char) {
            case "+":
                console.log("+++++")
              result += Number(number);
              number = "";
              break;
            case "-":
              result -= Number(number);
              number = "";
              break;
            case "*":
              result *= Number(number);
              number = "";
              break;
            case "/":
              result /= Number(number);
              number = "";
              break;
          }
        }
      }
    }
    console.log("--number", number);
    console.log("--result", result);
    if (number !== "") {
      switch (operator) {
        case "+":
          result += Number(number);
          break;
        case "-":
          result -= Number(number);
          break;
        case "*":
          result *= Number(number);
          break;
        case "/":
          result /= Number(number);
          break;
      }
    }

    console.log("--number", number);
    console.log("--result", result);
  };

  return (
    <div className="keypad">
      <div className="row">
        <button onClick={expressionClear}>AC</button>
        <button onClick={() => onClickButton("/")}>/</button>
        <button onClick={() => onClickButton("*")}>*</button>
        <button onClick={onClickBackspace}>⌫</button>
      </div>
      <div className="row">
        <button onClick={() => onClickButton("7")}>7</button>
        <button onClick={() => onClickButton("8")}>8</button>
        <button onClick={() => onClickButton("9")}>9</button>
        <button onClick={() => onClickButton("-")}>-</button>
      </div>
      <div className="row">
        <button onClick={() => onClickButton("4")}>4</button>
        <button onClick={() => onClickButton("5")}>5</button>
        <button onClick={() => onClickButton("6")}>6</button>
        <button onClick={() => onClickButton("+")}>+</button>
      </div>
      <div className="row">
        <button onClick={() => onClickButton("1")}>1</button>
        <button onClick={() => onClickButton("2")}>2</button>
        <button onClick={() => onClickButton("3")}>3</button>
        <button onClick={calculate}>=</button>
      </div>
      <div className="row">
        <button onClick={() => onClickButton("0")}>0</button>
        <button onClick={() => onClickButton("00")}>00</button>
        <button onClick={() => onClickButton(".")}>.</button>
      </div>
    </div>
  );
};

export default Keypad;
