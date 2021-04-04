import React from "react";
import CardInputs from "./cardInputs/CardInputs";
import "./Cardtracker.css";
import List from "./List/List";

const CardTracker = () => {
  return (
    <div className="container1">
      <div className="cardTracker">
        <span>
          Ex<i>pen</i>ce <i>T</i>racker
        </span>
        <h4>Total Balance{"10$"}</h4>
        <h4> Say add income salary 500$</h4>
     
      <div>
        <CardInputs />
      </div>
      <div>
        <List />
      </div>
      </div>
    </div>
  );
};

export default CardTracker;
