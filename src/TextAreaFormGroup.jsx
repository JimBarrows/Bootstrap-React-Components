'use strict';
import FormGroup from "./FormGroup";
import React from "react";
import RichTextEditor, {createEmptyValue} from "react-rte";

import type {EditorValue} from 'react-rte';

export default class TextAreaFormGroup extends React.Component {

	componentWillReceiveProps(props) {
		this.updateStateFromProps(props);

	}

	constructor(props) {
		super(props);
		this.updateStateFromProps(props);
		this.state = {
			value: createEmptyValue()
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
		let {disabled, error, id, label, onChange, placeholder, required, value} = this.props;
		return (
				<FormGroup label={label} id={id} error={error} required={required}>
					<RichTextEditor onChange={this.changeThis.bind(this)} value={this.state.value}/>
				</FormGroup>
		);
	}

	updateStateFromProps(props) {
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
}
