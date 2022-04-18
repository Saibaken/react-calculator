import logo from "./logo.svg";
import "./App.scss";
import React from "react";

export default function App() {
  return (
    <form>
      <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="row flex-column col-12 col-md-8 col-lg-4">
        <div className="col faded-text my-1 text-end">Previous Value</div>
        <input className="col border-0 main-text my-1 text-end w-100" type="text" placeholder="Current Input" />
      </div>
      <div className="row gap-1 d-flex col-12 col-md-8 col-lg-4 justify-content-center">
          <div className="row gap-1 d-flex flex-row justify-content-center">
            <button className="btn btn-x-operations rounded-pill col">sqrt</button>
            <button className="btn btn-x-operations rounded-pill col">pi</button>
            <button className="btn btn-x-operations rounded-pill col">^</button>
            <button className="btn btn-x-operations rounded-pill col">!</button>
          </div>

          <div className="row gap-1 d-flex flex-row justify-content-around">
            <button className="btn btn-ac         col round-button">AC</button>
            <button className="btn btn-operations col round-button">()</button>
            <button className="btn btn-operations col round-button">%</button>
            <button className="btn btn-operations col round-button">/</button>
          </div>

          <div className="row gap-1 d-flex flex-row  justify-content-around">
            <button className="btn btn-numbers btn-lg col round-button">7</button>
            <button className="btn btn-numbers btn-lg col round-button">8</button>
            <button className="btn btn-numbers btn-lg col round-button">9</button>
            <button className="btn btn-operations btn-lg col round-button">*</button>
          </div>

          <div className="row gap-1 d-flex flex-row  justify-content-around">
            <button className="btn btn-numbers btn-lg col round-button">4</button>
            <button className="btn btn-numbers btn-lg col round-button">5</button>
            <button className="btn btn-numbers btn-lg col round-button">6</button>
            <button className="btn btn-operations btn-lg col round-button">-</button>
          </div>

          <div className="row gap-1 d-flex flex-row  justify-content-around">
            <button className="btn btn-numbers btn-lg col round-button">1</button>
            <button className="btn btn-numbers btn-lg col round-button">2</button>
            <button className="btn btn-numbers btn-lg col round-button">3</button>
            <button className="btn btn-operations btn-lg col round-button">+</button>
          </div>

          <div className="row gap-1 d-flex flex-row  justify-content-around">
            <button className="btn btn-numbers btn-lg col round-button">0</button>
            <button className="btn btn-operations btn-lg col round-button">,</button>
            <button className="btn btn-operations btn-lg col round-button">&lt;-</button>
            <button className="btn btn-equals btn-lg col round-button">=</button>
          </div>
      </div>
      </div>
    </form>
  );
}
