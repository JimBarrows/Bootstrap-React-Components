'use strict';
import React from "react";

export default class SaveButton extends React.Component {

	render() {
		let {id, onClick} = this.props;
		return (
				<button id={id + "SaveButton"} type="button" class="btn btn-default btn-xs" onClick={onClick}>
					<span class="glyphicon glyphicon-ok"/>
				</button>
		);
	}
}