import React, { useState } from "react";
import "./Calculator.css"; // Optional: Create this file for styling

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      // Use a safer method to evaluate the expression
      const evaluatedResult = evaluateExpression(input);
      setResult(evaluatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  const evaluateExpression = (expr) => {
    // Create an array of operands and operators
    const operators = expr.split(/\d+/).filter(Boolean);
    const operands = expr.split(/[+\-*/]/).map(Number);

    if (operands.length - 1 !== operators.length) {
      throw new Error("Invalid expression");
    }

    // Reduce the operands array based on the operators
    let total = operands[0];
    for (let i = 0; i < operators.length; i++) {
      const operator = operators[i];
      const operand = operands[i + 1];

      switch (operator) {
        case "+":
          total += operand;
          break;
        case "-":
          total -= operand;
          break;
        case "*":
          total *= operand;
          break;
        case "/":
          total /= operand;
          break;
        default:
          throw new Error("Invalid operator");
      }
    }

    return total;
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button className="equal" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
