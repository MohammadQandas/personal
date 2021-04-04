import { useState } from "react";
import "./cardInput.css"
const CardInputs = () => {
  const [state, setState] = useState("Income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(Date());
  console.log(state);
  return (
    <div className="container">
      <form onSubmit="" className="form">
        <label>
          Select I or E
          <select className="select1"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="Income">Income</option>
            <option value="Expence">Expence</option>
          </select>
        </label>

        <label>
          Category
          <select className="select2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Income">we gonna put </option>
            <option value="Expence">we gonna put </option>
          </select>
        </label>
        <label>
          Amount
          <input
           className="input1"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value, "$")}
            required
           
          />
        </label>
        <label>
          Date
          <input
           className="input2"
            type="Date"
            value={date}
            onChange={(e) => setDate(e.target.value, "$")}
            required
           
          />
        </label>
      </form>
    </div>
  );
};

export default CardInputs;
