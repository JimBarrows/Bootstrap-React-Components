'use strict';
import {FormGroup} from "bootstrap-react-components";
import React from "react";
import RichTextEditor from "react-rte";

export default class TextAreaFormGroup extends React.Component {

	constructor(props) {
		super(props);
		let value = null;
		if (props.value) {
			this.state = {
				value: RichTextEditor.createValueFromString(props.value)
			}
		} else {
			this.state = {
				value: RichTextEditor.createEmptyValue()
			}
		}
	}

	changeThis = (value) => {
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
					<RichTextEditor id={id} onChange={this.changeThis} value={this.state.value}/>
				</FormGroup>
		);
	}
}