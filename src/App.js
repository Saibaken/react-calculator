import "./App.scss";
import React, { useState, useEffect } from "react";
import { evaluate } from "mathjs";

export default function App() {
  const [currentInput, setCurrentInput] = useState("");


  const addToInput = (symbol) => {
    console.log("🚀 ~ file: App.js ~ line 9 ~ addToInput ~ symbol", symbol)
    setCurrentInput(prevState => prevState + symbol);
  };

  const removeClick = () => {
    setCurrentInput((prevState) => prevState.slice(0, -1));
  };

  const allClearClick = () => {
    setCurrentInput("");
  };

  const getAnswer = () => {
    console.log("🚀 ~ file: App.js ~ line 25 ~ submitHandler ~ currentInput", currentInput)
    const answer = evaluate(currentInput);
    setCurrentInput(answer.toString());
  };
  
  const precentClick = () => {
    
  };
  
  const bracketClick = () => {
    const lastChar = currentInput.slice(-1);
    if (["+","-","*","/","^"].includes(lastChar)) {
      addToInput("(");
    } else {
      if (currentInput.split("(").length === currentInput.split(")").length) {
        addToInput("(");
      } else {
        addToInput(")");
      } 
    }
  };
  
  const handleKeyboard = (e) => {
    console.log("🚀 ~ file: App.js ~ line 34 ~ handleKeyboard ~ e.key", e.key)
    switch (e.key) {
      case "Enter":
        console.log("🚀 ~ file: App.js ~ line 36 ~ handleKeyboard ~ currentInput", currentInput)
        getAnswer();
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "+":
      case "-":
      case "*":
      case "/":
      case "!":
      case "^":
        addToInput(e.key);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboard);
    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    }
  });
  

  return (
    <form>
      <div className="container gap-2 d-flex flex-column justify-content-center align-items-center">
      <div className="row flex-column col-12 col-md-8 col-lg-4">
        <div className="col previous-value my-1 text-end">Previous Value</div>
        <div className="col border-0 current-input my-1 text-end w-100">&nbsp;{currentInput}</div>
      </div>
      <div className="row gap-1 d-flex col-12 col-md-8 col-lg-4 justify-content-center">
          <div className="row gap-1 d-flex flex-row justify-content-center">
            <button className="btn btn-x-operations rounded-pill h-75 col lh-sm pb-3" type="button" onClick={() => addToInput("sqrt(")}>√</button>
            <button className="btn btn-x-operations rounded-pill h-75 col lh-sm pb-3" type="button" onClick={() => addToInput("pi")}>π</button>
            <button className="btn btn-x-operations rounded-pill h-75 col lh-sm pb-3" type="button" onClick={() => addToInput("^")}>^</button>
            <button className="btn btn-x-operations rounded-pill h-75 col lh-sm pb-3" type="button" onClick={() => addToInput("!")}>!</button>
          </div>

          <div className="row gap-1 d-flex flex-row justify-content-around">
            <button className="btn btn-ac         col rounded-circle" type="button" onClick={allClearClick}>AC</button>
            <button className="btn btn-operations col rounded-circle" type="button" onClick={bracketClick}>( )</button>
            <button className="btn btn-operations col rounded-circle" type="button" onClick={precentClick}>%</button>
            <button className="btn btn-operations col rounded-circle" type="button" onClick={() => addToInput("/")}>÷</button>
          </div>

          <div className="row gap-1 d-flex flex-row  justify-content-around">
            <button className="btn btn-numbers col rounded-circle" type="button" onClick={() => addToInput("7")}>7</button>
            <button className="btn btn-numbers col rounded-circle" type="button" onClick={() => addToInput("8")}>8</button>
            <button className="btn btn-numbers col rounded-circle" type="button" onClick={() => addToInput("9")}>9</button>
            <button className="btn btn-operations col rounded-circle" type="button" onClick={() => addToInput("*")}>×</button>
          </div>

          <div className="row gap-1 d-flex flex-row  justify-content-around">
            <button className="btn btn-numbers col rounded-circle" type="button" onClick={() => addToInput("4")}>4</button>
            <button className="btn btn-numbers col rounded-circle" type="button" onClick={() => addToInput("5")}>5</button>
            <button className="btn btn-numbers col rounded-circle" type="button" onClick={() => addToInput("6")}>6</button>
            <button className="btn btn-operations col rounded-circle" type="button" onClick={() => addToInput("-")}>-</button>
          </div>

          <div className="row gap-1 d-flex flex-row  justify-content-around">
            <button className="btn btn-numbers col rounded-circle" type="button" onClick={() => addToInput("1")}>1</button>
            <button className="btn btn-numbers col rounded-circle" type="button" onClick={() => addToInput("2")}>2</button>
            <button className="btn btn-numbers col rounded-circle" type="button" onClick={() => addToInput("3")}>3</button>
            <button className="btn btn-operations col rounded-circle" type="button" onClick={() => addToInput("+")}>+</button>
          </div>

          <div className="row gap-1 d-flex flex-row  justify-content-around">
            <button className="btn btn-numbers col rounded-circle" type="button" onClick={() => addToInput("0")}>0</button>
            <button className="btn btn-operations col rounded-circle" type="button" onClick={() => addToInput(".")}>,</button>
            <button className="btn btn-operations col rounded-circle" type="button" onClick={removeClick}>←</button>
            <button className="btn btn-equals col rounded-circle" type="button" onClick={getAnswer}>=</button>
          </div>
      </div>
      </div>
    </form>
  );
}
