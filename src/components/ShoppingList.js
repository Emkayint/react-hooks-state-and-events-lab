import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setfilterBy] = useState("All")
console.log(items[0].category)
  function handleFilter(event){
    setfilterBy(event.target.value)
  }

  let itemToDisplay = items.filter( (item2) => {
    if(filterBy === "All"){
      return true;
    } else {
      return item2.category === filterBy;
    }
  })




  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
