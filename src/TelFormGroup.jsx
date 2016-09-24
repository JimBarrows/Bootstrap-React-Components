'use strict';
import React from "react";
import FormGroup from "./FormGroup";

export default class TelFormGroup extends React.Component {

	render() {
		let {label, id, onChange, error, value, placeholder, disabled} = this.props;
		return (
				<FormGroup label={label} id={id} error={error}>
					<input type="tel" class="form-control" id={id} placeholder={placeholder} onChange={onChange}
					       value={value} disabled={disabled}/>
				</FormGroup>
		);
	}
}