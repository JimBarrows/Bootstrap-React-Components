'use strict';
import React from "react";
import FormGroup from "./FormGroup";

class TextFormGroup extends React.Component {

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
					       type="text"
					       value={value}/>
				</FormGroup>
		);
	}
}

export default TextFormGroup;
