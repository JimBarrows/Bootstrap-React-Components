import React from "react";
import DangerAlert from "./DangerAlert";

export default class FormGroup extends React.Component {

	constructor() {
		super();
	}

	render() {
		let {error, id, label, required} = this.props;
		let validationStatus             = "";
		let requiredText                 = "";
		if (error) {
			validationStatus = "has-error";
		}
		if (required) {
			requiredText = (<small class="text-deanger">Required</small>)
		}

		return (
				<div id={id + "FormGroup"} class={"form-group " + validationStatus}>
					<label id={id + "Label"} class="control-label" for={id}>{label} {requiredText}</label>
					{this.props.children}
					<DangerAlert id={id + "DangerAlert"} error={error}/>
				</div>
		);
	}
}