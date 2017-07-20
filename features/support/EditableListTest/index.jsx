import {List} from "../../../src/EditableList";
import DataItem from "./DataItem";
import data from "./Data";
import React from "react";

class EditableListTest extends List {

  render() {
    let elements = this.state.list.map( i => <DataItem item={i} allowEditing={true} />);
    return <div class="EditableListTest"> <ul>{elements}</ul></div>;
  }
}

export default EditableListTest;
