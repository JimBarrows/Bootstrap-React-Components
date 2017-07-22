import { List } from "../../../src/EditableList";
import DataItem from "./DataItem";
import data from "./Data";
import DataEditor from "./DataEditor";
import React from "react";

class EditableListTest extends List {

	render( ) {
		return <div id="EditableListTestDiv" class="EditableListTest">
      {this.buttonEditOrNothing("Add",<DataEditor onSubmit={this.addItem.bind(this)}/>)}
			<ul id="EditableListTestDiv">{this.state.list.map( ( i, index ) => <DataItem key={index} item={i} allowEditing={true} remove={this.removeItem.bind(this)} save={this.updateItem.bind(this)} /> )}</ul>
		</div>;
	}
}

export default EditableListTest;
