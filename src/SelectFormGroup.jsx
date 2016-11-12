'use strict';
import React from "react";
import FormGroup from "./FormGroup";


export default class SelectFormGroup extends React.Component {

	render() {
		let {disabled, error, id, label, onChange, options, placeholder, required, value} = this.props;
		return (
				<FormGroup label={label} id={id} error={error} required={required}>
					<select class="form-control"
					        disabled={disabled}
					        id={id}
					        onChange={onChange}
					        placeholder={placeholder}
					        required={required}
					        value={value}>
						<option value="-1"></option>
						{options.map(o => <option key={o.value}
						                          value={o.value}>{o.label}</option>)} </select>
				</FormGroup>
		);
	}
}