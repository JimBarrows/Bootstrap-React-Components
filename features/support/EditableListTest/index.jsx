import { List } from "../../../src/EditableList";
import DataItem from "./DataItem";
import data from "./Data";
import DataEditor from "./DataEditor";
import React from "react";

class EditableListTest extends List {

	render( ) {
		return <div id="EditableListTestDiv" class="EditableListTest">
			{this.buttonEditOrNothing( "Add", < DataEditor item = {this.state.newItem}
			onSubmit = {
				this.addItem.bind( this )
			}
			nameChange = {
				this.props.nameChange
			}
			ageChange = {
				this.props.ageChange
			} /> )}
			<ul id="EditableListTestDiv">{this.props.list.map( ( i, index ) => <DataItem key={index} item={i} allowEditing={this.props.allowEditing} remove={this.removeItem.bind( this )} save={this.updateItem.bind( this )}/> )}</ul>
		</div>;
	}
}

export default EditableListTest;
