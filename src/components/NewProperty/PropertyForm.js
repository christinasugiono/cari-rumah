import React, { useState } from "react";
import './PropertyForm.css';
import home from '../../images/home.png';
import land from '../../images/land.png';

const PropertyForm = () => {
  const [userInput, setUserInput] = useState({
    areaEntered: '',
    priceEntered: '',
    landSizeEntered: '',
    buildingSizeEntered: '',
    houseChecked: false,
    landChecked: false,
    brokerChecked: false,
    taxChecked: false,
    notaryChecked: false,
    transferChecked: false
  })

  const inputChangeHandler = (event) => {
    setUserInput((prevState) => {
      const data = {...prevState}
      console.log(data[`${event.target.id}Entered`]);
      data[`${event.target.id}Entered`] = event.target.value;
      return data
    })
  }

  const checkboxHandler = (event) => {
    setUserInput((prevState) => {
      const data = {...prevState}
      data[`${event.target.value}Checked`] = !data[`${event.target.value}Checked`]
      if (event.target.value === 'house') {
        data.landChecked = false;
      } else if (event.target.value === 'land') {
        data.houseChecked = false;
      }
      return data
    })
  }

  const resetHandler = () => {
    setUserInput({
      areaEntered: '',
      priceEntered: '',
      landSizeEntered: '',
      buildingSizeEntered: '',
      houseChecked: false,
      landChecked: false,
      brokerChecked: false,
      taxChecked: false,
      notaryChecked: false,
      transferChecked: false
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Area</label>
        <div className="form-control__input">
          <input type="text" id="area" value={userInput.areaEntered} onChange={inputChangeHandler}  />
        </div>
      </div>
      <div className="form-control">
        <label>Property type</label>
        <ul className="cards">
          <li>
            <input type="checkbox" onChange={checkboxHandler} defaultChecked={userInput.houseChecked} id="type-house" value='house' className="hidden" required=""/>
            <label htmlFor="type-house" className="type-card">
              <div className="block">
                <img src={home} alt="home"/>
                <h2 className="w-full text-lg font-semibold">House</h2>
              </div>
            </label>
          </li>
          <li>
            <input type="checkbox" onChange={checkboxHandler} defaultChecked={userInput.landChecked} id="type-land" value='land' className="hidden"/>
            <label htmlFor="type-land" className="type-card">
              <div className="block">
                <img src={land} alt="home"/>
                <h2 className="w-full text-lg font-semibold">Land</h2>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <div className="form-control">
        <label>Price</label>
        <div className="form-control__input">
          <input type="number" id="price" value={userInput.priceEntered} onChange={inputChangeHandler}  />
        </div>
      </div>
      <div className="half-view">
        <div className="">
          <label>Land size</label>
          <div className="form-control__input">
            <input type="number" id="landSize" value={userInput.landSizeEntered} onChange={inputChangeHandler}  />
          </div>
        </div>
        <div className="">
          <label>Building size</label>
          <div className="form-control__input">
            <input type="number" id="buildingSize" value={userInput.buildingSizeEntered} onChange={inputChangeHandler}  />
          </div>
        </div>
      </div>
      <div className="form-control">
        <label className="my-3">Extra costs</label>
        <div className="half-view">
          <div>
            <input type="checkbox" onChange={checkboxHandler} defaultChecked={userInput.taxChecked} id="tax" name="tax" value="tax"/>
            <label htmlFor="tax"> Tax</label>
          </div>
          <div>
            <input type="checkbox" onChange={checkboxHandler} defaultChecked={userInput.brokerChecked} id="broker" name="broker" value="broker"/>
            <label htmlFor="broker"> Broker fee</label>
          </div>
          <div>
            <input type="checkbox" onChange={checkboxHandler} defaultChecked={userInput.notaryChecked} id="notary" name="notary" value="notary"/>
            <label htmlFor="notary"> Notary fee</label>
          </div>
          <div>
            <input type="checkbox" onChange={checkboxHandler} defaultChecked={userInput.transferChecked} id="transfer" name="transfer" value="transfer"/>
            <label htmlFor="transfer"> Transfer fee</label>
          </div>
        </div>
      </div>
      <div className="form-actions">
        <button className="btn btn-primary mb-3" type="submit">Calculate</button>
        <button className="btn btn-secondary" onClick={resetHandler}>Reset</button>
      </div>
    </form>
  )
}

export default PropertyForm;
