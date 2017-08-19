import React from "react";
import ReactDOM from "react-dom";
import { Alert, PageHeader, RowControlButtons, TextAreaFormGroup } from "../../src";
import EditableListComponent from "./EditableListComponent";
import PaginationComponent from "./PaginationComponent";

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
	<h1>Pagination</h1>
	<PaginationComponent/>
	<h1>Alerts</h1>
	<h2>Plain</h2>
	<Alert id="plain" message="This is a basic alert message"/>
	<Alert id="children">
		<ul>
			<li>Message 1</li>
			<li>Message 2</li>
		</ul>
	</Alert>
	<Alert id="plain_success" type="success" message="This is a basic success alert message"/>
	<Alert id="plain_warning" type="warning" message="This is a basic warning alert message"/>
	<Alert id="plain_danger" type="danger" message="This is a basic danger alert message"/>
	<h2>Dismissable</h2>
	<Alert id="dismissable" onDismiss={( ) => {}} message="This is a dismissable alert message"/>
	<Alert id="children" onDismiss={( ) => {}}>
		<ul>
			<li>Message 1</li>
			<li>Message 2</li>
		</ul>
	</Alert>
	<Alert id="plain_success" onDismiss={( ) => {}} type="success" message="This is a basic success alert message"/>
	<Alert id="plain_warning" onDismiss={( ) => {}} type="warning" message="This is a basic warning alert message"/>
	<Alert id="plain_danger" onDismiss={( ) => {}} type="danger" message="This is a basic danger alert message"/>
	<h1>Row Control Buttons</h1>
	<RowControlButtons cancel={() => {}} editing={false} edit={() => {}} id="not_editing" save={() => {}} remove={() => {}}/>
	<br/>
	<RowControlButtons cancel={() => {}} editing={true} edit={() => {}} id="editing" save={() => {}} remove={() => {}}/>
</div>, mountNode);
