import React, { useState } from "react";
import './PropertyForm.css';

const PropertyForm = () => {
  const [enteredLand, setEnteredLand] = useState("");
  const [enteredBuilding, setEnteredBuilding] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const landChangeHandler = (event) => {
    setEnteredLand(event.currentTarget.value)
  }

  const buildingChangeHandler = (event) => {
    setEnteredBuilding(event.currentTarget.value)
  }

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.currentTarget.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredLand, enteredBuilding, enteredPrice);
  }

  return (
    <form className="new-property__controls" onSubmit={submitHandler}>
      <div className="new-property__control">
        <label className="mr-2">Luas tanah</label>
        <input className="mr-2" type="number" value={enteredLand} onChange={landChangeHandler}  />
        <p>m^2</p>
      </div>
      <div className="new-property__control">
        <label className="mr-2">Luas bangunan</label>
        <input className="mr-2" type="number" value={enteredBuilding} onChange={buildingChangeHandler}  />
        <p>m^2</p>
      </div>
      <div className="new-property__control">
        <label className="mr-2">Harga</label>
        <p className="mr-2">Rp.</p>
        <input type="number" value={enteredPrice} onChange={priceChangeHandler}  />
      </div>
      <div className="new-property__actions">
        <button className="button-primary">Calculate</button>
        <button className="button-reset" type="submit">Reset</button>
      </div>
    </form>
  )
}

export default PropertyForm;
