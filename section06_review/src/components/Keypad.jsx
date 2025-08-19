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
    let result = 0;
    let operator = "";

    const tokens = currentInput.match(/\d+|\+|-|\*|\//g);

    for (const char of tokens) {
      if (isNaN(char)) {

        operator = char;

      } else if (operator) {

        switch (operator) {
          case "+":
            result += Number(char);
            operator = "";
            break;
          case "-":
            result -= Number(char);
            operator = "";
            break;
          case "*":
            result *= Number(char);
            operator = "";
            break;
          case "/":
            result /= Number(char);
            operator = "";
            break;
        }
      } else {
        console.log("--result += char", result, char);
        result += Number(char);
      }
    }
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
