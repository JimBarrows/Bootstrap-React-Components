'use strict';
import React from "react";
import {ContentState, Editor, EditorState, RichUtils} from "draft-js";
import ButtonGroup from "./ButtonGroup.js";

export default class BasicEditor extends React.Component {

	constructor(props) {
		super(props);
		let editorState = EditorState.createEmpty();
		console.log("props.value: ", props.value);
		if (props.value) {
			editorState = EditorState.createWithContent(ContentState.createFromText(props.value));
		}
		this.state            = {editorState};
		this.onChange         = (editorState) => this.setState({editorState});
		this.handleKeyCommand = this.handleKeyCommand.bind(this);
	}

	handleKeyCommand(command) {
		const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
		if (newState) {
			this.onChange(newState);
			return true;
		}
		return false;
	}

	_onBoldClick() {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
	}

	_onUnderlineClick() {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
	}

	_onItalicClick() {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
	}

	render() {
		let {id, value, disabled} = this.props;

		return (
				<div>
					<ButtonGroup>
						<button class="btn btn-default btn-xs" onClick={this._onBoldClick.bind(this)}>
							<span class="glyphicon glyphicon-bold" aria-hidden="true"></span>
						</button>
						<button class="btn btn-default btn-xs" onClick={this._onUnderlineClick.bind(this)}>
							<span class="fa fa-underline" aria-hidden="true"></span>
						</button>
						<button class="btn btn-default btn-xs" onClick={this._onItalicClick.bind(this)}>
							<span class="glyphicon glyphicon-italic" aria-hidden="true"></span>
						</button>
					</ButtonGroup>
					<div class="panel panel-default">
						<div class="panel-body">
							<Editor id={id}
							        editorState={this.state.editorState}
							        handleKeyCommand={this.handleKeyCommand}
							        onChange={this.onChange}/>
						</div>
					</div>
				</div>
		);
	}
}