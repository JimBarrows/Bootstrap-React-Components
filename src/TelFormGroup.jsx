'use strict';
import React from "react";
import FormGroup from "./FormGroup";

export default class TelFormGroup extends React.Component {

	render() {
		let {disabled, error, id, label, onChange, placeholder, required, value} = this.props;
		return (
				<FormGroup required={required}>
					<input class="form-control"
					       disabled={disabled}
					       id={id}
					       onChange={onChange}
					       placeholder={placeholder}
					       required={required}
					       type="tel"
					       value={value}/>
				</FormGroup>
		);
	}
}