import React, {useState} from "react";
// import { useState } from "react/cjs/react.production.min";

function Item({ name, category }) {
  const [classNames, setclassNames] = useState("")
  function handleCart(){
    setclassNames("in-cart")
  }
  return (
    <li className= {classNames}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{ classNames === "" ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
