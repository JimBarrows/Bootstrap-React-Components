'use strict';
import React from "react";
import DatePicker from "react-datetime";
import FormGroup from "./FormGroup";


require('react-datetime/css/react-datetime.css');


export default class DateRangeFormGroup extends React.Component {

	constructor(props) {
		super(props);
		this.fromName = this.props.id + "From";
		this.thruName = this.props.id + "Thru";
	}

	fromChange(selectedDate) {
		this.props.onChange({
			target: {
				id: this.fromName,
				value: selectedDate
			}
		})
	}

	thruChange(selectedDate) {
		this.props.onChange({
			target: {
				id: this.thruName,
				value: selectedDate
			}
		})
	}

	render() {
		let {dateFormat, disabled, error, fromValue, id, label, onChange, placeholder, required, thruValue, value} = this.props;
		let requiredText                                                                                           = "";
		if (required) {
			requiredText = (<small class="text-deanger">Required</small>)
		}
		return (

				<FormGroup error={error} id={id} label={label} required={required}>
					<div class="row">
						<div class="col-md-6">
							<label class="control-label" for={this.fromName}>From {requiredText}</label>
							<DatePicker id={this.fromName} name={this.fromName} value={fromValue}
							            onChange={this.fromChange.bind(this)} dateFormat={dateFormat} timeFormat={false}/>
						</div>
						<div class="col-md-6">
							<label class="control-label" for={this.thruName}>Thru {requiredText}</label>
							<DatePicker id={this.thruName} name={this.thruName} value={thruValue}
							            onChange={this.thruChange.bind(this)} dateFormat={dateFormat} timeFormat={false}/>
						</div>
					</div>
				</FormGroup>
		);
	}
}