import { useEffect, useState } from "react";

function SelectProduct(props) {
 
  return (
    <select value={props.select} onChange={(event) => props.handleChange(event.target.value)}>
      <option value="Newest">Newest</option>
      <option value="Popular">Popular</option>
      <option value="Old">Old</option>
      <option value="Recent">Recent</option>
    </select>
  );
}

export default SelectProduct;
