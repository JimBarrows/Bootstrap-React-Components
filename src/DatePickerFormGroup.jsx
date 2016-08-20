'use strict';
import React from "react";
import FormGroup from "./FormGroup";
import DatePicker from "react-datetime";

require('react-datetime/css/react-datetime.css');

export default class DatePickerFormGroup extends React.Component {

	render() {
		let {label, id, onChange, error, value} = this.props;
		return (
				<FormGroup label={label} id={id} error={error}>
					<DatePicker id={id} value={value} onChange={onChange}/>
				</FormGroup>
		);
	}
}