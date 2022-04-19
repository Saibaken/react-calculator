import "./App.scss";
import React, { useState } from "react";
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

  const submitHandler = (e) => {
    e.preventDefault();
    const answer = evaluate(currentInput);
    setCurrentInput(answer.toString());
  };

  const precentClick = () => {};

  const bracketClick = () => {};

  const handleKeyboard = (e) => {
    switch (e.key) {
      case "Enter":
        submitHandler(e);
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
        addToInput(e.key);
        break;
      default:
        break;
    }
  }

  return (
    <form onSubmit={(e) => submitHandler(e)} onKeyDown={(e) => handleKeyboard(e)}>
      <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="row flex-column col-12 col-md-8 col-lg-4">
        <div className="col previous-value my-1 text-end">Previous Value</div>
        <div className="col border-0 current-input my-1 text-end w-100">&nbsp;{currentInput}</div>
      </div>
      <div className="row gap-1 d-flex col-12 col-md-8 col-lg-4 justify-content-center">
          <div className="row gap-1 d-flex flex-row justify-content-center">
            <button className="btn btn-x-operations rounded-pill col" type="button">sqrt</button>
            <button className="btn btn-x-operations rounded-pill col" type="button">pi</button>
            <button className="btn btn-x-operations rounded-pill col" type="button">^</button>
            <button className="btn btn-x-operations rounded-pill col" type="button">!</button>
          </div>

          <div className="row gap-1 d-flex flex-row justify-content-around">
            <button className="btn btn-ac         col rounded-circle" type="button" onClick={allClearClick}>AC</button>
            <button className="btn btn-operations col rounded-circle" type="button" onClick={bracketClick}>()</button>
            <button className="btn btn-operations col rounded-circle" type="button" onClick={precentClick}>%</button>
            <button className="btn btn-operations col rounded-circle" type="button" onClick={() => addToInput("/")}>/</button>
          </div>

          <div className="row gap-1 d-flex flex-row  justify-content-around">
            <button className="btn btn-numbers col rounded-circle" type="button" onClick={() => addToInput("7")}>7</button>
            <button className="btn btn-numbers col rounded-circle" type="button" onClick={() => addToInput("8")}>8</button>
            <button className="btn btn-numbers col rounded-circle" type="button" onClick={() => addToInput("9")}>9</button>
            <button className="btn btn-operations col rounded-circle" type="button" onClick={() => addToInput("*")}>*</button>
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
            <button className="btn btn-operations col rounded-circle" type="button" onClick={removeClick}>&lt;-</button>
            <button className="btn btn-equals col rounded-circle" type="submit">=</button>
          </div>
      </div>
      </div>
    </form>
  );
}
