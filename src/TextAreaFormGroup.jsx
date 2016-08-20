'use strict';
import React from "react";
import FormGroup from "./FormGroup";
import BasicEditor from "./BasicEditor";

export default class TextAreaFormGroup extends React.Component {

	render() {
		let {label, id, onChange, error, value, disabled} = this.props;
		return (
				<FormGroup label={label} id={id} error={error}>
					<BasicEditor id={id} onChange={onChange} value={value} disabled={disabled}/>
				</FormGroup>
		);
	}
}