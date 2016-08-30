'use strict';
import FormGroup from "./FormGroup";
import React from "react";
import RichTextEditor from "react-rte";

export default class TextAreaFormGroup extends React.Component {

	constructor(props) {
		super(props);
		let value = null;
		if (props.value) {
			value = RichTextEditor.createValueFromString(props.value, "markdown");
		} else {
			value = RichTextEditor.createEmptyValue();
		}
		this.state = {
			value
		}
	}

	changeThis(value) {
		this.setState({value});
		if (this.props.onChange) {
			this.props.onChange({
				target: {
					id: this.props.id,
					value: value.toString('markdown')
				}
			});
		}
	};

	render() {
		let {label, id, error} = this.props;
		return (
				<FormGroup label={label} id={id} error={error}>
					<RichTextEditor onChange={this.changeThis.bind(this)} value={this.state.value}/>
				</FormGroup>
		);
	}
}