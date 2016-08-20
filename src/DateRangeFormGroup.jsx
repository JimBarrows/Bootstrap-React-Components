'use strict';
import React from "react";
import DatePicker from "react-datetime";
import FormGroup from "./FormGroup";


require('react-datetime/css/react-datetime.css');


export default class DateRangeFormGroup extends React.Component {

	render() {
		let {label, id, onChange, error, fromValue, thruValue} = this.props;
		let fromName                                           = id + "From";
		let thruName                                           = id + "Thru";

		return (

				<FormGroup error={error} id={id} label={label}>
					<div class="row">
						<div class="col-md-6">
							<label class="control-label" for={fromName}>{label} From</label>
							<DatePicker id={fromName} name={fromName} value={fromValue} onChange={onChange}/>
						</div>
						<div class="col-md-6">
							<label class="control-label" for={thruName}>Thru</label>
							<DatePicker id={thruName} name={thruName} value={thruValue} onChange={onChange}/>
						</div>
					</div>
				</FormGroup>
		);
	}
}