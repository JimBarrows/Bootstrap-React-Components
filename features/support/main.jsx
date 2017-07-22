import React from "react";
import ReactDOM from "react-dom";
import { PageHeader, TextAreaFormGroup } from "../../src";
import EditableListComponent from "./EditableListComponent";

const mountNode = document.getElementById( 'app' );

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css"



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
	<EditableListComponent/>

</div>, mountNode);
