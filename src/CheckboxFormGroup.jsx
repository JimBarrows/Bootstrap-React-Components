'use strict';
import React from "react";
import DangerAlert from "./DangerAlert";


export default class CheckboxFormGroup extends React.Component {

	render() {
		let {label, placeholder, id, onChange, error, value} = this.props;
		let validationStatus                                 = "";
		if (error) {
			validationStatus = "has-error";
		}
		return (
				<div id={id + "FormGroup"} class={"form-group " + validationStatus}>
					<label id={id + "Label"}>
						<input type="checkbox" id={id} placeholder={placeholder}
						       onChange={onChange}
						       value={id}
						       checked={value}/>
						{label}
					</label>
					<DangerAlert id={id + "DangerAlert"} error={error}/>
				</div>
		);
	}
}