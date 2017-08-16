'use strict';
import React from "react";
import Alert from "./Alert";


export default class CheckboxFormGroup extends React.Component {

	render() {
		let {disabled, error, id, label, onChange, placeholder, required, value} = this.props;
		let validationStatus                                                     = "";
		let requiredText                                                         = "";
		let alert = "";
		if (error) {
			validationStatus = "has-error";
			alert = <Alert id={id } type="error" message={error}/>;
		}
		if (required) {
			requiredText = (<small class="text-deanger">Required</small>)
		}
		return (
				<div id={id + "FormGroup"} class={"form-group " + validationStatus}>
					<label id={id + "Label"}>
						<input checked={value}
						       disabled={disabled}
						       id={id}
						       onChange={onChange}
						       placeholder={placeholder}
						       required={required}
						       type="checkbox"
						       value={id}
						/>
						{label} {requiredText}
					</label>
					{alert}
				</div>
		);
	}
}
