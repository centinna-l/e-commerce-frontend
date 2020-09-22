import React from "react";
import { API } from "../backend";
import Base from "./Base";
import "../styles.css";

const Home = () => {
  console.log("API IS", API);
  return (
    <Base title="Home Page" description="An Interactive E Commerce Site">
      <div className="row">
        <div className="row col-4">
          <button className="btn btn-success">Test</button>
        </div>
        <div className="row col-4">
          <button className="btn btn-success">Test</button>
        </div>
        <div className="row col-4">
          <button className="btn btn-success">Test</button>
        </div>
      </div>
    </Base>
  );
};

export default Home;
