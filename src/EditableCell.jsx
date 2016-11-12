'use strict';
import React from "react";

export default class EditableCell extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			edit: props.edit
		}
	}

	componentWillReceiveProps(props) {
		this.setState({
			edit: props.edit
		});
	};

	render() {
		let {disabled, error, id, label, onChange, placeholder, required, type, value}     = this.props;
		let input                                                                          = this.state.edit ?
				<input
						class="form-control"
						disabled={disabled}
						id={id}
						onChange={onChange}
						placeholder={placeholder}
						required={required}
						type={type}
						value={value}/> :
				<span id={id + "Value"}>{value}</span>;
		return (<td id={id + "Cell"}>{input}</td>);
	}
}