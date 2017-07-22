import React from "react";
import ReactDOM from "react-dom";
import { PageHeader, TextAreaFormGroup } from "../../src";
import EditableListTest from "./EditableListTest";
import data from "./EditableListTest/Data";

const mountNode = document.getElementById( 'app' );

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css"

let addListItem = (item ) => console.log("add item: ", item);

let removeListItem = (item) => console.log("remove item: ", item);

let updateListItem = (item => console.log("update item: ", item));

ReactDOM.render(
	<div>
	<PageHeader id="ReactTest">
  <h1>Bootstrap React Components Tests</h1>
	</PageHeader>
	<h1>Form Groups</h1>
	<h2>Text Area</h2>
	<TextAreaFormGroup cssClass="question" id="question" label="Question" value="Question"/>
	<h1>Editable List</h1>
	<h2>All Internal Changes</h2>
	<EditableListTest list={data} allowEditing={true} addItem={addListItem.bind(this)} removeItem={removeListItem.bind(this)} updateItem={updateListItem.bind(this)}/>
</div>, mountNode);
