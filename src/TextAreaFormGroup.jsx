'use strict';
import React from "react";
import FormGroup from "./FormGroup";
import BasicEditor from "./BasicEditor";

export default class TextAreaFormGroup extends React.Component {

	render() {
		let {label, name, onChange, error, value, disabled} = this.props;
		return (
				<FormGroup label={label} name={name} error={error}>
					<BasicEditor id={name} onChange={onChange} value={value} disabled={disabled}/>
				</FormGroup>
		);
	}
}