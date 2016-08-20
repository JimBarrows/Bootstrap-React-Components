'use strict';
import React from "react";
import FormGroup from "./FormGroup";


export default class SelectFormGroup extends React.Component {

	render() {
		let {label, id, onChange, error, value, options} = this.props;
		return (
				<FormGroup label={label} id={id} error={error}>
					<select id={id} value={value} class="form-control" onChange={onChange}>
						<option value="-1"></option>
						{options.map(o => <option key={o.value}
						                          value={o.value}>{o.label}</option>)} </select>
				</FormGroup>
		);
	}
}