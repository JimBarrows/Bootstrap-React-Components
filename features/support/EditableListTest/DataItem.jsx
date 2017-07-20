import React from "react";
import {Item} from "../../../src/EditableList";

class DataItem extends Item {
  editor(item) {
    return <p>Form goes here</p>;
  }

  viewer(item) {
    return <li> {item.name} - {item.age} </li>;
  }
}

export default DataItem;
