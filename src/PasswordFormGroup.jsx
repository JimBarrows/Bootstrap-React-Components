'use strict';
import React from "react";
import FormGroup from "./FormGroup";


export default class PasswordFormGroup extends React.Component {

	render() {
		let {disabled, error, id, label, onChange, placeholder, required, value} = this.props;
		return (
				<FormGroup label={label} id={id} error={error} required={required}>
					<input class="form-control"
					       disabled={disabled}
					       id={id}
					       onChange={onChange}
					       placeholder={placeholder}
					       required={required}
					       type="password"
					       value={value}/>
				</FormGroup>
		);
	}
}