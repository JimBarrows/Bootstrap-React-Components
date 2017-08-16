import React from "react";
import Alert from "./Alert";

export default class FormGroup extends React.Component {

	constructor() {
		super();
	}

	render() {
		let {error, id, label, required} = this.props;
		let validationStatus             = "";
		let requiredText                 = "";
		let alert = "";
		if (error) {
			validationStatus = "has-error";
			alert = <Alert id={id } type="danger" message={error}/>;
		}
		if (required) {
			requiredText = (<small class="text-deanger">Required</small>)
		}

		return (
				<div id={id + "FormGroup"} class={"form-group " + validationStatus}>
					<label id={id + "Label"} class="control-label" for={id}>{label} {requiredText}</label>
					{this.props.children}
					{alert}
				</div>
		);
	}
}
