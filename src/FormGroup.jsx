import React from "react";
import DangerAlert from "./DangerAlert";

export default class FormGroup extends React.Component {

	constructor() {
		super();
	}

	render() {
		let {label, id, error} = this.props;
		let validationStatus   = "";
		if (error) {
			validationStatus = "has-error";
		}

		return (
				<div id={id + "FormGroup"} class={"form-group " + validationStatus}>
					<label id={id + "Label"} class="control-label" for={id}>{label}</label>
					{this.props.children}
					<DangerAlert id={id + "DangerAlert"} error={error}/>
				</div>
		);
	}
}