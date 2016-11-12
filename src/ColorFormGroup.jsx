'use strict';
import React from "react";
import FormGroup from "./FormGroup";

export default class ColorFormGroup extends React.Component {

	render() {
		let {disabled, error, id, label, onChange, placeholder, required, value} = this.props;
		return (
				<FormGroup label={label} id={id} error={error} required={required}>
					<input checked={value}
					       class="form-control"
					       disabled={disabled}
					       id={id}
					       onChange={onChange}
					       placeholder={placeholder}
					       required={required}
					       type="color"
					       value={id}
					/>
				</FormGroup>
		);
	}
}