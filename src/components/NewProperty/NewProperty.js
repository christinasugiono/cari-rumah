import React, { useState } from "react";
import './NewProperty.css';
import menu from '../../images/menu.png'

import PropertyForm from "./PropertyForm";

const NewProperty = () => {
  return (
    <div className="md:max-w-md md:mx-auto px-4 py-8">
      <div className="header">
        <h1>Calculate<br />your property price</h1>
        <img scr={menu} alt="menu"/>
      </div>
      <PropertyForm />
    </div>
  )
}

export default NewProperty;
