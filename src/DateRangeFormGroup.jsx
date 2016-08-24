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
		let {label, id, error, fromValue, thruValue} = this.props;


		return (

				<FormGroup error={error} id={id} label={label}>
					<div class="row">
						<div class="col-md-6">
							<label class="control-label" for={this.fromName}>From</label>
							<DatePicker id={this.fromName} name={this.fromName} value={fromValue}
							            onChange={this.fromChange.bind(this)}/>
						</div>
						<div class="col-md-6">
							<label class="control-label" for={this.thruName}>Thru</label>
							<DatePicker id={this.thruName} name={this.thruName} value={thruValue}
							            onChange={this.thruChange.bind(this)}/>
						</div>
					</div>
				</FormGroup>
		);
	}
}