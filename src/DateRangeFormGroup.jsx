'use strict';
import React from "react";
import DatePicker from "react-datetime";
import FormGroup from "./FormGroup";


require('react-datetime/css/react-datetime.css');


export default class DateRangeFormGroup extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			fromName: "dateRange_" + this.props.id + "_From";
			thruName: "dateRange_" + this.props.id + "_Thru";
		}

	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			fromName: "dateRange_" + nextProps.id + "_From";
			thruName: "dateRange_" + nextProps.id + "_Thru";
		})
	}

	fromChange(selectedDate) {
		this.props.onChange({
			target: {
				id: this.state.fromName,
				value: selectedDate
			}
		})
	}

	thruChange(selectedDate) {
		this.props.onChange({
			target: {
				id: this.state.thruName,
				value: selectedDate
			}
		})
	}

	render() {
		let {dateFormat, disabled, error, fromValue, id, label, onChange, placeholder, required, thruValue, value} = this.props;
		let requiredText                                                                                           = "";
		if (required) {
			requiredText = (<small class="text-danger">Required</small>)
		}
		return (

				<FormGroup error={error} id={id} label={label} required={required}>
					<div class="row">
						<div class="col-md-6">
							<label class="control-label" for={this.state.fromName}>From {requiredText}</label>
							<DatePicker id={this.name.statefromName} name={this.name.fromName} value={fromValue}
							            onChange={this.fromChange.bind(this)} dateFormat={dateFormat} timeFormat={false}/>
						</div>
						<div class="col-md-6">
							<label class="control-label" for={this.name.thruName}>Thru {requiredText}</label>
							<DatePicker id={this.name.thruName} name={this.name.thruName} value={thruValue}
							            onChange={this.thruChange.bind(this)} dateFormat={dateFormat} timeFormat={false}/>
						</div>
					</div>
				</FormGroup>
		);
	}
}
