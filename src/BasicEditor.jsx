'use strict';
import React from "react";
import {Editor, EditorState} from "draft-js";


export default class BasicEditor extends React.Component {

	constructor(props) {
		super(props);
		this.state    = {editorState: EditorState.createEmpty()};
		this.onChange = (editorState) => this.setState({editorState});
	}

	onChange(event) {
		console.log("onChange: ", event);
	}

	render() {
		const {editorState} = this.state;
		return <Editor editorState={editorState} onChange={this.onChange}/>;
	}
}